"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  radius: number;
  phase: number;
};

const COLORS = ["#F26B4F", "#B9A7E8", "#8299D6", "#17233C"];

/**
 * Animated neural-network canvas: colored nodes drift gently, lines
 * connect nearby nodes, and each node pulses on its own phase. The
 * cursor gently attracts nodes when it's over the canvas.
 *
 * Uses <canvas> so we don't create thousands of DOM nodes. Honors
 * prefers-reduced-motion by rendering a single static frame.
 */
export function NeuralPulse({
  nodeCount = 22,
  className = "",
  height = 380,
}: {
  nodeCount?: number;
  className?: string;
  height?: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef(0);
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });
  const dprRef = useRef(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      dprRef.current = dpr;
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      // seed nodes on first resize
      if (nodesRef.current.length === 0) {
        nodesRef.current = Array.from({ length: nodeCount }, () => ({
          x: Math.random() * rect.width,
          y: Math.random() * rect.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          radius: 2 + Math.random() * 3,
          phase: Math.random() * Math.PI * 2,
        }));
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };

    resize();
    window.addEventListener("resize", resize);
    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);

    const draw = () => {
      const dpr = dprRef.current;
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const nodes = nodesRef.current;
      const now = performance.now() / 1000;

      // update positions
      for (const n of nodes) {
        if (!reduced) {
          n.x += n.vx;
          n.y += n.vy;

          // cursor attraction
          if (mouseRef.current.active) {
            const dx = mouseRef.current.x - n.x;
            const dy = mouseRef.current.y - n.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 140 * 140 && d2 > 1) {
              const d = Math.sqrt(d2);
              const f = (140 - d) / 140;
              n.x += (dx / d) * f * 0.6;
              n.y += (dy / d) * f * 0.6;
            }
          }

          // wrap around edges softly
          if (n.x < -10) n.x = w + 10;
          if (n.x > w + 10) n.x = -10;
          if (n.y < -10) n.y = h + 10;
          if (n.y > h + 10) n.y = -10;
        }
      }

      // draw connecting lines
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          const max = 130;
          if (d2 < max * max) {
            const d = Math.sqrt(d2);
            const alpha = (1 - d / max) * 0.35;
            ctx.strokeStyle = `rgba(23, 35, 60, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // draw nodes with pulse
      for (const n of nodes) {
        const pulse = reduced ? 1 : 0.75 + 0.25 * Math.sin(now * 1.8 + n.phase);
        const r = n.radius * pulse;

        // outer halo
        ctx.fillStyle = n.color + "22";
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 3.2, 0, Math.PI * 2);
        ctx.fill();

        // solid node
        ctx.fillStyle = n.color;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduced) {
        rafRef.current = requestAnimationFrame(draw);
      }
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [nodeCount]);

  return (
    <div
      ref={wrapRef}
      className={`relative w-full ${className}`}
      style={{ height }}
      aria-hidden
    >
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
