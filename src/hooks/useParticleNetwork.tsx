import React, { useRef, useEffect } from 'react';

// Configuration for the particle network
const PARTICLE_CONFIG = {
  particleColor: 'hsl(160, 100%, 47%)', // Neon Green from your theme
  lineColor: 'hsla(160, 100%, 47%, 0.3)',
  particleAmount: 50,
  defaultRadius: 2,
  variantRadius: 2,
  defaultSpeed: 0.1,
  variantSpeed: 0.2,
  linkRadius: 200,
};

const useParticleNetwork = (canvasRef: React.RefObject<HTMLCanvasElement>) => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const particles = useRef<any[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      directionAngle: number;
      vector: { x: number; y: number };

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = PARTICLE_CONFIG.defaultRadius + Math.random() * PARTICLE_CONFIG.variantRadius;
        this.speed = PARTICLE_CONFIG.defaultSpeed + Math.random() * PARTICLE_CONFIG.variantSpeed;
        this.directionAngle = Math.floor(Math.random() * 360);
        this.vector = {
          x: Math.cos(this.directionAngle) * this.speed,
          y: Math.sin(this.directionAngle) * this.speed,
        };
      }

      draw() {
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx!.closePath();
        ctx!.fillStyle = PARTICLE_CONFIG.particleColor;
        ctx!.fill();
      }

      update() {
        this.border();
        this.x += this.vector.x;
        this.y += this.vector.y;
      }

      border() {
        if (this.x >= canvas.width || this.x <= 0) this.vector.x *= -1;
        if (this.y >= canvas.height || this.y <= 0) this.vector.y *= -1;
        if (this.x > canvas.width) this.x = canvas.width;
        if (this.y > canvas.height) this.y = canvas.height;
        if (this.x < 0) this.x = 0;
        if (this.y < 0) this.y = 0;
      }
    }
    
    const initParticles = () => {
        particles.current = [];
        for (let i = 0; i < PARTICLE_CONFIG.particleAmount; i++) {
            particles.current.push(new Particle());
        }
    };


    const linkParticles = (point: any, hubs: any[]) => {
      for (const hub of hubs) {
        const distance = Math.sqrt((point.x - hub.x) ** 2 + (point.y - hub.y) ** 2);
        if (distance < PARTICLE_CONFIG.linkRadius) {
          const opacity = 1 - distance / PARTICLE_CONFIG.linkRadius;
          ctx!.lineWidth = 0.5;
          ctx!.strokeStyle = `rgba(0, 241, 160, ${opacity})`;
          ctx!.beginPath();
          ctx!.moveTo(point.x, point.y);
          ctx!.lineTo(hub.x, hub.y);
          ctx!.closePath();
          ctx!.stroke();
        }
      }
    };

    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height);
      for (const particle of particles.current) {
        particle.update();
        particle.draw();
      }

      for (const particle of particles.current) {
        linkParticles(particle, particles.current);
        linkParticles(particle, [mousePosition.current]);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.pageX;
      mousePosition.current.y = e.pageY;
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [canvasRef]);
};

export default useParticleNetwork;
