import React from "react";
import { IconReact } from "../Editor/Icons";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-2 flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <IconReact className="h-10 w-10" />
        <h3>Sample Project</h3>
      </div>
      <div className="flex gap-3">
        <Button size={"lg"} className=" rounded-sm">
          Audit Now
        </Button>
        <Button
          size={"lg"}
          className="bg-[#152C46] text-[#007aff] rounded-sm relative"
        >
          Options
          <div className="absolute top-0 right-0 bg-red-600 w-2.5 h-2.5 rounded-xl" />
        </Button>
      </div>
    </header>
  );
}
