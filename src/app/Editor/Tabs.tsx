import { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

interface TabsProps {
  data: string[];
  className: string;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Tabs: React.FC<TabsProps> = ({
  data,
  className,
  activeTab,
  setActiveTab,
}) => {
  return (
    <ul
      className={twMerge(
        "p-1 flex gap-2 w-full text-center bg-darkgunmetal-500 rounded justify-center",
        className
      )}
    >
      {data.map((value: string, index: number) => (
        <li
          className={`${
            activeTab === index
              ? "text-white bg-azure-500  hover:bg-azure-600"
              : "text-darkelectricblue-500  hover:bg-azure-700 hover:text-white"
          } cursor-pointer px-6 py-2 rounded-md xs:text-xs lg:text-sm w-1/2 flex items-center justify-center`}
          onClick={() => setActiveTab(index)}
          key={value}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};
export default Tabs;
