import { cn } from "@/lib/utils";
import { ImageProps } from "next/image";

import React from "react";

interface IconProps extends Partial<ImageProps> {}
export function IconFile({ className }: IconProps) {
  return (
    <img
      src="https://cdn-icons-png.freepik.com/512/753/753244.png"
      height={15}
      width={15}
      alt="file icon"
      className={cn("object-contain", className)}
    />
  );
}
export function IconFolder({ className }: IconProps) {
  return (
    <img
      src="https://cdn-icons-png.freepik.com/512/12075/12075589.png"
      height={15}
      width={15}
      alt="folder icon"
      className={cn("object-contain", className)}
    />
  );
}
export function IconReact({ className }: IconProps) {
  return (
    <img
      src="https://cdn-icons-png.freepik.com/256/5333/5333095.png"
      height={15}
      width={15}
      alt="folder icon"
      className={cn("object-contain", className)}
    />
  );
}
export function IconForwardArrow({ className }: IconProps) {
  return (
    <img
      src="/forward_arrow.png"
      height={14}
      width={7}
      alt="IconForwardArrow icon"
      className={cn("object-contain", className)}
    />
  );
}
