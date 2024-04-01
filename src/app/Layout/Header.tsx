import Separator from "@/components/ui/separator";
import Navbar from "./Navbar";

const TABS = [
  {
    name: "AI Audit",
    path: "/ai-audit",
  },
  {
    name: "Manual Audit",
    path: "/manual-audit",
  },

  {
    name: "RedTeam",
    path: "/red-team",
  },
  {
    name: "Monitor",
    path: "/monitor",
  },
  {
    name: "Incident Response",
    path: "/incident-response",
  },
];

const Header = () => {
  return (
    <div className=" w-full bg-darkgreen-500 px-6 py-3 flex justify-between rounded-md ">
      <div className="flex gap-6">
        <img src="/logo.svg" alt="logo" />
        <Separator className="-my-3" />
      </div>
      <div className="flex gap-3">
        <Navbar data={TABS} />
        <Separator className="-my-3" />
        <div tabIndex={0} className="relative px-2 cursor-pointer">
          <div className="flex gap-4 items-center text-silver-500">
            <img className="" src={"/profile.svg"} alt="user icon" />
            <p>Ankit Panchal</p>
            <img
              className={`rotate-90 hover:-rotate-90 transition-all duration-150`}
              src={"/arrow.svg"}
              alt="down icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
