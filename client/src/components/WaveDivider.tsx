/*
 * WaveDivider — organic nature-inspired SVG divider between sections
 * Matches the color of the section below it
 */
interface WaveDividerProps {
  /** Background color of the NEXT section (the one below) */
  fill?: string;
  /** Flip vertically */
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  fill = "#f9f7f4",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-[30px] md:h-[50px]"
      >
        <path
          d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 L1440,60 L0,60 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
