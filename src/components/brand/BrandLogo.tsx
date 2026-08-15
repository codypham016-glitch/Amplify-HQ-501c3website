import Image from "next/image";
import { AmplifyMark } from "./AmplifyMark";

type BrandLogoProps = {
  /** Rendered pixel width. */
  width?: number;
  /** Rendered pixel height. Defaults to a 16:10 aspect ratio if omitted. */
  height?: number;
  className?: string;
  priority?: boolean;
};

/**
 * The full Amplify HQ lockup — head + brain + signal waves + wordmark.
 *
 * If /amplify-logo.png exists in public/, this component will show the
 * real designed asset. It's the same file the user placed in public/,
 * so any updates there flow through automatically. Fallback to the
 * hand-drawn AmplifyMark SVG is available via <AmplifyMark />.
 */
export function BrandLogo({
  width = 280,
  height,
  className = "",
  priority = false,
}: BrandLogoProps) {
  const h = height ?? Math.round((width * 10) / 16);
  return (
    <Image
      src="/amplify-logo.png"
      alt="Amplify HQ"
      width={width}
      height={h}
      className={className}
      priority={priority}
    />
  );
}

// Re-export for convenience so callers can pick either.
export { AmplifyMark };
