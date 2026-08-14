import fs from "node:fs";
import path from "node:path";

const EXTENSIONS = [".svg", ".png", ".webp", ".jpg", ".jpeg"] as const;

/**
 * Resolves a school logo from /public/schools/{slug}.{ext}.
 *
 * Drop a real logo file at that path and it renders automatically —
 * no code change needed. Returns null when no file is present, in
 * which case the caller renders a typographic monogram instead.
 *
 * Server-side only (reads the filesystem at build time).
 */
export function resolveSchoolLogo(slug: string): string | null {
  const dir = path.join(process.cwd(), "public", "schools");
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(path.join(dir, `${slug}${ext}`))) {
      return `/schools/${slug}${ext}`;
    }
  }
  return null;
}
