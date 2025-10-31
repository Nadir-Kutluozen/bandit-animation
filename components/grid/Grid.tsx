// components/Grid.tsx
"use client";

export default function Grid({
  cell = 24,
  stroke = "#ffffffff",
  opacity = 0.20,
}: {
  cell?: number;
  stroke?: string;
  opacity?: number;
}) {
  return (
    <svg
      className="d-block"
      width="100%"
      height="100%"    // fills the parent div
      /* no viewBox on purpose */
    >
      <defs>
        <pattern id="grid" width={cell} height={cell} patternUnits="userSpaceOnUse">
          <path d={`M ${cell} 0 L 0 0 0 ${cell}`} fill="none" stroke={stroke} strokeOpacity={opacity} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}
