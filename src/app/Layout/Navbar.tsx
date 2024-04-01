"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface Path {
  name: string;
  path: string;
}

const Navbar = ({ data }: { data: Path[] }) => {
  return (
    <nav className="flex gap-4 text-[#5D677D]">
      {data.map((value: Path, idx: number) => {
        return (
          <Link
            href={"#"}
            className={cn(
              idx == 0 ? "text-azure-600 border-b-2" : " ",
              "hover:border-b-2 border-azure-600 font-medium border-spacing-4 hover:text-azure-600 xs:text-xs lg:text-base"
            )}
            key={value.name}
          >
            {value.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
