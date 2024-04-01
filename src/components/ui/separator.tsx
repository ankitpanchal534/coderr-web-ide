import { twMerge } from "tailwind-merge";

interface SepratorPropsInterface {
  className?: string;
}
const Separator: React.FC<SepratorPropsInterface> = ({ className }) => {
  return <div className={twMerge("border border-gray-500", className)} />;
};

export default Separator;
