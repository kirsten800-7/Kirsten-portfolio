import { useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "./data";

/**
 * The site icon: the PNG logo on a white tile, matching the header pill.
 * If the PNG is missing or fails to load we fall back to the letterform, so a
 * missing file never renders a broken image.
 */
export function LogoMark({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white text-neutral-900 shadow-[0_10px_24px_-14px_rgba(0,0,0,0.9)]",
        className,
      )}
      style={{ width: size, height: size }}
    >
      {failed ? (
        <span className="font-bold" style={{ fontSize: Math.round(size * 0.42) }}>
          {profile.shortName.charAt(0)}
        </span>
      ) : (
        <img
          src={profile.logoUrl}
          alt=""
          width={size}
          height={size}
          className="size-full object-contain"
          onError={() => setFailed(true)}
        />
      )}
    </span>
  );
}
