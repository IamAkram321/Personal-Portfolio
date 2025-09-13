import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const nodesRef = useRef([]);
  const connectionsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Node class
    class Node {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 3 + 2;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.hue = Math.random() * 60 + 200; // Blue to purple range
        this.pulse = 0;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // Bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        
        // Keep within bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
        
        // Pulse animation
        this.pulse += this.pulseSpeed;
        this.currentRadius = this.radius + Math.sin(this.pulse) * 1;
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Create gradient for node
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.currentRadius
        );
        gradient.addColorStop(0, `hsla(${this.hue}, 70%, 60%, 0.8)`);
        gradient.addColorStop(1, `hsla(${this.hue}, 70%, 40%, 0.2)`);
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius, 0, Math.PI * 2);
        ctx.fill();
        
        // Add glow effect
        ctx.shadowColor = `hsla(${this.hue}, 70%, 60%, 0.5)`;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.currentRadius * 0.5, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Connection class
    class Connection {
      constructor(node1, node2) {
        this.node1 = node1;
        this.node2 = node2;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.3 + 0.1;
        this.fadeSpeed = Math.random() * 0.02 + 0.01;
        this.fadeDirection = 1;
      }

      update() {
        const dx = this.node1.x - this.node2.x;
        const dy = this.node1.y - this.node2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only show connection if nodes are close enough
        if (distance < 150) {
          this.opacity += this.fadeSpeed * this.fadeDirection;
          if (this.opacity >= this.maxOpacity) {
            this.opacity = this.maxOpacity;
            this.fadeDirection = -1;
          } else if (this.opacity <= 0) {
            this.opacity = 0;
            this.fadeDirection = 1;
          }
        } else {
          this.opacity = Math.max(0, this.opacity - this.fadeSpeed * 2);
        }
      }

      draw() {
        if (this.opacity <= 0) return;
        
        const dx = this.node1.x - this.node2.x;
        const dy = this.node1.y - this.node2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          ctx.save();
          ctx.globalAlpha = this.opacity;
          
          // Create gradient for connection
          const gradient = ctx.createLinearGradient(
            this.node1.x, this.node1.y,
            this.node2.x, this.node2.y
          );
          gradient.addColorStop(0, `hsla(${this.node1.hue}, 70%, 60%, 0.3)`);
          gradient.addColorStop(1, `hsla(${this.node2.hue}, 70%, 60%, 0.3)`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.node1.x, this.node1.y);
          ctx.lineTo(this.node2.x, this.node2.y);
          ctx.stroke();
          
          ctx.restore();
        }
      }
    }

    // Initialize nodes
    const nodeCount = 50;
    for (let i = 0; i < nodeCount; i++) {
      nodesRef.current.push(new Node(
        Math.random() * canvas.width,
        Math.random() * canvas.height
      ));
    }

    // Initialize connections
    for (let i = 0; i < nodesRef.current.length; i++) {
      for (let j = i + 1; j < nodesRef.current.length; j++) {
        connectionsRef.current.push(new Connection(
          nodesRef.current[i],
          nodesRef.current[j]
        ));
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw connections first (so they appear behind nodes)
      connectionsRef.current.forEach(connection => {
        connection.update();
        connection.draw();
      });
      
      // Update and draw nodes
      nodesRef.current.forEach(node => {
        node.update();
        node.draw();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  );
};

export default NetworkBackground;
