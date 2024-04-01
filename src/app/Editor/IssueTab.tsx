import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import Separator from "@/components/ui/separator";
export interface IssueDetail {
  id: string;
  issueTitle: string;
  description: string;
  remediation: string;
}

export interface Issue {
  name: string;
  count: number;
  type: string;
  issues: IssueDetail[];
}
interface dataProps {
  count: number;
  name: string;
  type: string;
  issues: IssueDetail[];
}

interface IssueTabProps {
  data: dataProps;
  setSelectedIssue?: Dispatch<SetStateAction<Issue>>;
  step?: number;
  className?: string;
}

const ISSUECOLORS: { [key: string]: string } = {
  total: "bg-blueberry-500",
  high: "bg-scarletred-500",
  medium: "bg-crayola-500",
  low: "bg-caribbeangreen-500",
  informational: "bg-heliotrope-500",
  optimisation: "bg-skyblue-500",
};

const IssueTab: React.FC<IssueTabProps> = ({
  data,
  setSelectedIssue,
  step,
  className,
}) => {
  return (
    <div
      className={twMerge(
        `flex gap-3 px-5 py-4 bg-darkgreen-500 rounded ${
          step !== 1 ? "hover:bg-azure-600 cursor-pointer" : ""
        }`,
        className
      )}
      onClick={() => {
        if (step !== 1 && setSelectedIssue) {
          setSelectedIssue({
            name: data.name,
            type: data.type,
            count: data.count,
            issues: data.issues,
          });
        }
      }}
    >
      <div className="flex w-1/2 items-center gap-3">
        <p
          className={`rounded-full min-h-3 min-w-3 ${ISSUECOLORS[data?.type]}`}
        />
        <p className="text-2xl font-semibold text-brightgray-500">
          {data.count.toString().padStart(2, "0")}
        </p>
      </div>
      <Separator />
      {step === 1 ? (
        <p className="text-darkgray-500 w-1/2 text-sm text-center flex items-center justify-center">
          {data.name}
        </p>
      ) : (
        <div className="flex justify-between w-full items-center">
          <p className="text-darkgray-500">{data.name}</p>
          <img src={"/arrow.svg"} alt="issue tab icon" />
        </div>
      )}
    </div>
  );
};
export default IssueTab;
