"use client";

import { useEffect, useRef } from "react";

export default function FlyingBirdLayout({ children, logoRef }) {
  const canvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const posRef = useRef(null);
  const velRef = useRef({ x: 0, y: 0 });
  const stateRef = useRef("idle");
  const roamTimerRef = useRef(null);
  const particlesRef = useRef([]);
  const videoRef = useRef(null);
  const blobUrlRef = useRef(null);

  const getLogoCenter = () => {
    const el = logoRef?.current ?? document.getElementById("navbar-logo");
    if (el) {
      const rect = el.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    }
    return { x: window.innerWidth / 2, y: 32 };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    if (!canvas || !overlayCanvas) return;

    const isMobile = window.innerWidth < 768;
    const W = isMobile ? 140 : 220;  // increased sizes
    const H = isMobile ? 140 : 220;
    canvas.width = W;
    canvas.height = H;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    const oc = overlayCanvas.getContext("2d");

    let vw = window.innerWidth;
    let vh = window.innerHeight;
    let lastScrollY = window.scrollY;

    const onResize = () => {
      vw = window.innerWidth;
      vh = window.innerHeight;
      overlayCanvas.width = vw;
      overlayCanvas.height = vh;
    };
    overlayCanvas.width = vw;
    overlayCanvas.height = vh;
    window.addEventListener("resize", onResize);

    const onScroll = () => {
      const dy = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;
      if (stateRef.current === "roaming") velRef.current.y += dy * 0.04;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // ── Particles ──
    const spawnParticles = (x, y) => {
      const count = isMobile ? 3 : 6;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = 1.5 + Math.random() * 2.5;
        particlesRef.current.push({
          x: x + W * 0.3 + (Math.random() - 0.5) * 30,
          y: y + H * 0.5 + (Math.random() - 0.5) * 20,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 1,
          life: 1.0,
          decay: 0.025 + Math.random() * 0.025,
          size: isMobile ? 3 + Math.random() * 4 : 4 + Math.random() * 5,
          color: Math.random() > 0.5 ? "220,30,30" : "30,80,220",
        });
      }
    };

    const drawParticles = () => {
      oc.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
      const alive = [];
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.life -= p.decay;
        if (p.life <= 0) continue;
        alive.push(p);
        oc.save();
        oc.globalAlpha = p.life;
        oc.fillStyle = `rgba(${p.color},${p.life})`;
        oc.shadowColor = `rgba(${p.color},1)`;
        oc.shadowBlur = 8;
        oc.beginPath();
        for (let j = 0; j < 8; j++) {
          const a = (j / 8) * Math.PI * 2;
          const r = j % 2 === 0 ? p.size : p.size * 0.4;
          j === 0
            ? oc.moveTo(p.x + Math.cos(a) * r, p.y + Math.sin(a) * r)
            : oc.lineTo(p.x + Math.cos(a) * r, p.y + Math.sin(a) * r);
        }
        oc.closePath();
        oc.fill();
        oc.restore();
      }
      particlesRef.current = alive;
    };

    // ── Flight cycle ──
    // idle (5s at logo) → roaming (7s) → returning → idle (5s) → ...
    const startRoamCycle = () => {
      const logo = getLogoCenter();
      posRef.current = { x: logo.x - W / 2, y: logo.y - H / 2 };
      const angle = Math.PI / 5 + Math.random() * ((Math.PI * 3) / 5);
      const speed = isMobile ? 3 + Math.random() * 1.5 : 4 + Math.random() * 2;
      velRef.current = {
        x: Math.cos(angle) * speed * (Math.random() > 0.5 ? 1 : -1),
        y: Math.sin(angle) * speed,
      };
      stateRef.current = "roaming";
      // Roam for 7s then return
      roamTimerRef.current = setTimeout(() => {
        stateRef.current = "returning";
      }, 7000);
    };

    const arriveAtLogo = () => {
      const logo = getLogoCenter();
      if (posRef.current) {
        posRef.current.x = logo.x - W / 2;
        posRef.current.y = logo.y - H / 2;
      }
      velRef.current = { x: 0, y: 0 };
      stateRef.current = "idle";
      // Wait 5 seconds at logo then fly again
      roamTimerRef.current = setTimeout(startRoamCycle, 7000);
    };

    // ── Draw bird with white removal ──
    const drawBird = (video) => {
      ctx.clearRect(0, 0, W, H);
      if (!video || video.readyState < 2) return;
      try {
        ctx.drawImage(video, 0, 0, W, H);
        const imageData = ctx.getImageData(0, 0, W, H);
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i], g = d[i + 1], b = d[i + 2];
          const brightness = (r + g + b) / 3;
          const saturation = Math.max(r, g, b) - Math.min(r, g, b);
          if (brightness > 230 && saturation < 20) {
            d[i + 3] = 0;
          } else if (brightness > 210 && saturation < 35) {
            d[i + 3] = Math.max(0, 255 - Math.round(((brightness - 210) / 20) * 255));
          }
        }
        ctx.putImageData(imageData, 0, 0);
      } catch (e) {
        canvas.style.mixBlendMode = "multiply";
      }
    };

    // ── Main tick ──
    const tick = () => {
      const pos = posRef.current;
      const vel = velRef.current;
      const state = stateRef.current;

      if (pos) {
        if (state === "roaming") {
          vel.y *= 0.94;
          vel.y += Math.sin(Date.now() / 800) * 0.22;
          vel.x += (Math.random() - 0.495) * 0.15;
          vel.x = Math.max(-5, Math.min(5, vel.x));
          pos.x += vel.x;
          pos.y += vel.y;

          if (pos.x < -W * 0.4)     { pos.x = -W * 0.4;     vel.x =  Math.abs(vel.x); }
          if (pos.x > vw - W * 0.6) { pos.x = vw - W * 0.6; vel.x = -Math.abs(vel.x); }
          if (pos.y < 20)            { pos.y = 20;            vel.y =  Math.abs(vel.y) * 0.6; }
          if (pos.y > vh - H)        { pos.y = vh - H;        vel.y = -Math.abs(vel.y) * 0.6; }

          if (Math.random() < 0.5) spawnParticles(pos.x, pos.y);

        } else if (state === "returning") {
          const logo = getLogoCenter();
          const tx = logo.x - W / 2;
          const ty = logo.y - H / 2;
          const dx = tx - pos.x;
          const dy = ty - pos.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 6) {
            arriveAtLogo(); // snap + wait 5s
          } else {
            const ease = Math.min(0.1, 8 / dist);
            vel.x = vel.x * 0.75 + dx * ease;
            vel.y = vel.y * 0.75 + dy * ease;
            pos.x += vel.x;
            pos.y += vel.y;
            if (Math.random() < 0.3) spawnParticles(pos.x, pos.y);
          }
        }
        // idle: bird stays put at logo, no movement

        canvas.style.transform = `translate(${Math.round(pos.x)}px, ${Math.round(pos.y)}px)`;
      }

      drawBird(videoRef.current);
      drawParticles();
      animFrameRef.current = requestAnimationFrame(tick);
    };

    // ── Fetch video as blob → same-origin canvas (fixes mobile getImageData) ──
    const initVideo = async () => {
      try {
        const res = await fetch("/flyingbird.webm");
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        blobUrlRef.current = url;

        const video = document.createElement("video");
        video.src = url;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        video.setAttribute("webkit-playsinline", "");
        videoRef.current = video;

        const startPlayback = () => {
          video.play().catch(() => {
            const onInteract = () => {
              video.play().catch(() => {});
              window.removeEventListener("touchstart", onInteract);
              window.removeEventListener("click", onInteract);
            };
            window.addEventListener("touchstart", onInteract, { once: true });
            window.addEventListener("click", onInteract, { once: true });
          });
        };

        if (video.readyState >= 2) {
          startPlayback();
        } else {
          video.addEventListener("canplay", startPlayback, { once: true });
          video.addEventListener("loadeddata", startPlayback, { once: true });
        }
        video.load();
      } catch (e) {
        const video = document.createElement("video");
        video.src = "/flyingbird.webm";
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        videoRef.current = video;
        video.play().catch(() => {});
        video.load();
      }
    };

    // Set initial position at logo
    const logo = getLogoCenter();
    posRef.current = { x: logo.x - W / 2, y: logo.y - H / 2 };
    canvas.style.transform = `translate(${Math.round(posRef.current.x)}px, ${Math.round(posRef.current.y)}px)`;

    // Wait 5s at logo on first load, then start flying
    const initTimer = setTimeout(startRoamCycle, 7000);

    animFrameRef.current = requestAnimationFrame(tick);
    initVideo();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
      clearTimeout(roamTimerRef.current);
      clearTimeout(initTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = "";
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {children}
      <div
        className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
        aria-hidden="true"
      >
        <canvas
          ref={canvasRef}
          style={{ position: "absolute", top: 0, left: 0, willChange: "transform" }}
        />
        <canvas
          ref={overlayCanvasRef}
          style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        />
      </div>
    </div>
  );
}