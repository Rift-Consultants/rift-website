'use client';

import { useEffect, useMemo, useRef } from 'react';

type LearnBullet = {
  title: string;
  body: string;
};

type InteractiveLearnSectionProps = {
  eyebrow?: string;
  title?: string;
  bullets?: LearnBullet[];
  visualLabel?: string;
  asciiChars?: string;
  ditherStrength?: number;
  voxelResolution?: number;
  mode?: 'canvas2d' | 'static';
};

const DEFAULT_BULLETS: LearnBullet[] = [
  {
    title: 'Identify your highest-value agentic AI use case',
    body: 'Map the pain points, workflows, and strategic opportunities where AI agents can create the biggest operational impact for your organization.',
  },
  {
    title: 'Design an agent-first workflow',
    body: 'Apply the AGENT framework to redesign a workflow for autonomous operation, human-agent collaboration, governance checkpoints, and technical handoff.',
  },
  {
    title: 'Prepare an implementation brief for your team',
    body: 'Leave with a practical roadmap covering build-vs-buy recommendations, vendor evaluation criteria, risk controls, resource requirements, and success metrics.',
  },
];

const BAYER_4 = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
];

export default function InteractiveLearnSection({
  eyebrow,
  title = 'What you’ll learn',
  bullets = DEFAULT_BULLETS,
  visualLabel = 'Animated ASCII and dithered voxel workflow visualization',
  asciiChars = ' .:-=+*#%@',
  ditherStrength = 0.58,
  voxelResolution = 6,
  mode = 'canvas2d',
}: InteractiveLearnSectionProps) {
  const normalizedBullets = useMemo(() => bullets, [bullets]);

  return (
    <section className="featured learn-section" data-screen-label="What you'll learn">
      <div className="shell learn-shell">
        <div className="featured-copy learn-copy">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
          <div className="learn-list">
            {normalizedBullets.map((bullet) => (
              <div className="learn-item" key={bullet.title}>
                <span className="learn-check" aria-hidden="true">✓</span>
                <div>
                  <h3>{bullet.title}</h3>
                  <p>{bullet.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <AsciiVoxelVisual
          ariaLabel={visualLabel}
          asciiChars={asciiChars}
          ditherStrength={ditherStrength}
          voxelResolution={voxelResolution}
          mode={mode}
        />
      </div>
    </section>
  );
}

function AsciiVoxelVisual({
  ariaLabel,
  asciiChars,
  ditherStrength,
  voxelResolution,
  mode,
}: {
  ariaLabel: string;
  asciiChars: string;
  ditherStrength: number;
  voxelResolution: number;
  mode: 'canvas2d' | 'static';
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const asciiRef = useRef<HTMLPreElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ascii = asciiRef.current;
    if (!canvas || !ascii) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const sampleCanvas = document.createElement('canvas');
    const sampleContext = sampleCanvas.getContext('2d', { willReadFrequently: true });
    if (!sampleContext) return;

    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 760px)');
    let reducedMotion = reducedMotionQuery.matches || mode === 'static';
    let mobile = mobileQuery.matches;
    let animationFrame = 0;
    let frame = 0;

    const syncCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(rect.width * pixelRatio));
      canvas.height = Math.max(1, Math.floor(rect.height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      // Tweak ASCII resolution here. Lower values are faster/chunkier.
      sampleCanvas.width = mobile ? 74 : 104;
      sampleCanvas.height = mobile ? 42 : 58;
    };

    const onMotionChange = () => {
      reducedMotion = reducedMotionQuery.matches || mode === 'static';
    };

    const onMobileChange = () => {
      mobile = mobileQuery.matches;
      syncCanvasSize();
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const t = frame * 0.016;
      const motionScale = reducedMotion ? 0 : 1;
      const parallaxX = pointerRef.current.x * 22;
      const parallaxY = pointerRef.current.y * 16;

      context.clearRect(0, 0, width, height);
      drawBackdrop(context, width, height, t);

      const centerY = height * 0.52 + parallaxY;
      const nodes = [
        { x: width * 0.24 + parallaxX * 0.35, y: centerY + 8, color: '#C65F50', label: 'DISCOVER' },
        { x: width * 0.5 + parallaxX * 0.1, y: centerY - 44, color: '#EDEEE9', label: 'AGENT' },
        { x: width * 0.76 - parallaxX * 0.25, y: centerY + 8, color: '#AF7A62', label: 'DEPLOY' },
      ];

      drawConnections(context, nodes, t, motionScale);
      nodes.forEach((node, nodeIndex) => {
        drawVoxelNode(context, node.x, node.y, node.color, node.label, {
          t,
          nodeIndex,
          resolution: voxelResolution,
          motionScale,
        });
      });
      drawParticles(context, nodes, t, motionScale);

      sampleContext.drawImage(canvas, 0, 0, sampleCanvas.width, sampleCanvas.height);
      const imageData = sampleContext.getImageData(0, 0, sampleCanvas.width, sampleCanvas.height);
      ascii.textContent = toDitheredAscii(
        imageData,
        sampleCanvas.width,
        sampleCanvas.height,
        asciiChars,
        ditherStrength,
      );

      if (!reducedMotion) {
        frame += 1;
        animationFrame = requestAnimationFrame(draw);
      }
    };

    syncCanvasSize();
    draw();

    window.addEventListener('resize', syncCanvasSize);
    reducedMotionQuery.addEventListener('change', onMotionChange);
    mobileQuery.addEventListener('change', onMobileChange);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('resize', syncCanvasSize);
      reducedMotionQuery.removeEventListener('change', onMotionChange);
      mobileQuery.removeEventListener('change', onMobileChange);
    };
  }, [asciiChars, ditherStrength, mode, voxelResolution]);

  return (
    <div
      className="learn-visual ascii-voxel-shell"
      role="img"
      aria-label={ariaLabel}
      onPointerMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerRef.current = {
          x: (event.clientX - bounds.left) / bounds.width - 0.5,
          y: (event.clientY - bounds.top) / bounds.height - 0.5,
        };
      }}
      onPointerLeave={() => {
        pointerRef.current = { x: 0, y: 0 };
      }}
    >
      <canvas ref={canvasRef} className="ascii-voxel-canvas" aria-hidden="true" />
      <pre ref={asciiRef} className="ascii-voxel-output" aria-hidden="true" />
      <div className="ascii-voxel-scanlines" aria-hidden="true" />
    </div>
  );
}

function drawBackdrop(context: CanvasRenderingContext2D, width: number, height: number, t: number) {
  const gradient = context.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#080A09');
  gradient.addColorStop(0.48, '#18191A');
  gradient.addColorStop(1, '#2A2C2E');
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  context.save();
  context.globalAlpha = 0.32;
  context.strokeStyle = '#C65F50';
  context.lineWidth = 1;
  for (let i = 0; i < 8; i += 1) {
    const y = height * 0.2 + i * 42 + Math.sin(t + i) * 5;
    context.beginPath();
    context.moveTo(width * 0.08, y);
    context.bezierCurveTo(width * 0.35, y - 30, width * 0.62, y + 30, width * 0.92, y - 12);
    context.stroke();
  }
  context.restore();
}

function drawConnections(
  context: CanvasRenderingContext2D,
  nodes: Array<{ x: number; y: number }>,
  t: number,
  motionScale: number,
) {
  context.save();
  context.lineWidth = 2;
  context.strokeStyle = 'rgba(198,95,80,.58)';
  context.shadowColor = '#C65F50';
  context.shadowBlur = 18;

  for (let i = 0; i < nodes.length - 1; i += 1) {
    const start = nodes[i];
    const end = nodes[i + 1];
    context.beginPath();
    context.moveTo(start.x, start.y);
    context.quadraticCurveTo((start.x + end.x) / 2, start.y - 74, end.x, end.y);
    context.stroke();

    const pulse = (Math.sin(t * 2.2 + i) * 0.5 + 0.5) * motionScale;
    context.fillStyle = `rgba(237,238,233,${0.35 + pulse * 0.5})`;
    const x = start.x + (end.x - start.x) * pulse;
    const y = start.y + (end.y - start.y) * pulse - Math.sin(pulse * Math.PI) * 74;
    context.fillRect(x - 3, y - 3, 6, 6);
  }
  context.restore();
}

function drawVoxelNode(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  color: string,
  label: string,
  options: { t: number; nodeIndex: number; resolution: number; motionScale: number },
) {
  const { t, nodeIndex, resolution, motionScale } = options;
  const size = nodeIndex === 1 ? 13 : 10;
  const spread = nodeIndex === 1 ? 6 : 5;
  const rotation = t * 0.6 * motionScale + nodeIndex * 1.7;

  context.save();
  context.translate(x, y);
  context.rotate(Math.sin(rotation) * 0.12);

  for (let ix = -spread; ix <= spread; ix += 1) {
    for (let iy = -spread; iy <= spread; iy += 1) {
      const distance = Math.sqrt(ix * ix + iy * iy);
      const edge = distance > spread - 2 && distance < spread + 0.8;
      const sparse = (ix + iy + nodeIndex) % Math.max(2, resolution) === 0;
      if (!edge || sparse) continue;

      const pulse = Math.sin(t * 2.3 + ix * 0.7 + iy * 0.4 + nodeIndex) * 0.18 * motionScale;
      const px = ix * size * 0.82;
      const py = iy * size * 0.52 + pulse * 8;
      drawIsoCube(context, px, py, size, color, 0.72 + Math.max(0, pulse));
    }
  }

  context.font = '700 11px Hanken Grotesk, Arial, sans-serif';
  context.textAlign = 'center';
  context.fillStyle = 'rgba(237,238,233,.76)';
  context.fillText(label, 0, spread * size * 0.74 + 32);
  context.restore();
}

function drawIsoCube(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  size: number,
  color: string,
  alpha: number,
) {
  const half = size / 2;
  context.save();
  context.globalAlpha = alpha;
  context.shadowColor = color;
  context.shadowBlur = 10;

  context.fillStyle = color;
  context.beginPath();
  context.moveTo(x, y - half);
  context.lineTo(x + half, y - half * 0.2);
  context.lineTo(x, y + half * 0.6);
  context.lineTo(x - half, y - half * 0.2);
  context.closePath();
  context.fill();

  context.fillStyle = 'rgba(237,238,233,.28)';
  context.beginPath();
  context.moveTo(x, y + half * 0.6);
  context.lineTo(x + half, y - half * 0.2);
  context.lineTo(x + half, y + half * 0.55);
  context.lineTo(x, y + size);
  context.closePath();
  context.fill();

  context.fillStyle = 'rgba(0,0,0,.28)';
  context.beginPath();
  context.moveTo(x, y + half * 0.6);
  context.lineTo(x - half, y - half * 0.2);
  context.lineTo(x - half, y + half * 0.55);
  context.lineTo(x, y + size);
  context.closePath();
  context.fill();

  context.restore();
}

function drawParticles(
  context: CanvasRenderingContext2D,
  nodes: Array<{ x: number; y: number }>,
  t: number,
  motionScale: number,
) {
  context.save();
  context.fillStyle = 'rgba(237,238,233,.86)';
  for (let i = 0; i < 26; i += 1) {
    const lane = i % 2;
    const start = nodes[lane];
    const end = nodes[lane + 1];
    const progress = (i / 26 + t * 0.12 * motionScale) % 1;
    const x = start.x + (end.x - start.x) * progress;
    const y = start.y + (end.y - start.y) * progress - Math.sin(progress * Math.PI) * 72;
    context.globalAlpha = 0.2 + Math.sin(progress * Math.PI) * 0.7;
    context.fillRect(x - 1.5, y - 1.5, 3, 3);
  }
  context.restore();
}

function toDitheredAscii(
  imageData: ImageData,
  width: number,
  height: number,
  asciiChars: string,
  ditherStrength: number,
) {
  let output = '';

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const index = (y * width + x) * 4;
      const r = imageData.data[index];
      const g = imageData.data[index + 1];
      const b = imageData.data[index + 2];
      const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
      const threshold = (BAYER_4[y % 4][x % 4] / 15 - 0.5) * ditherStrength;
      const value = Math.max(0, Math.min(1, luminance + threshold));
      output += asciiChars[Math.round(value * (asciiChars.length - 1))];
    }
    output += '\n';
  }

  return output;
}
