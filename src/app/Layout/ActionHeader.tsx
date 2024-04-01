import { Button } from "@/components/ui/button";
import { IconSampleProject } from "../Editor/Icons";

export default function ActionHeader() {
  return (
    <header className="bg-darkgreen-500 text-white p-2 flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <IconSampleProject className="h-10 w-10" />
        <h3 className="text-xl">Sample Project</h3>
      </div>
      <div className="flex gap-3">
        <Button size={"lg"} className=" rounded-sm">
          Audit Now
        </Button>
        <Button
          size={"lg"}
          className="bg-[#152C46] hover:text-white text-primary rounded-sm relative"
        >
          Options
          <div className="absolute top-0 right-0 bg-red-600 w-2.5 h-2.5 rounded-xl" />
        </Button>
      </div>
    </header>
  );
}
