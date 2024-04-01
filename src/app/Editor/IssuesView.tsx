import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Separator from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction, useState } from "react";
import { twMerge } from "tailwind-merge";
import IssueTab, { Issue } from "./IssueTab";
import Tabs from "./Tabs";
import { ISSUECOLORS, ISSUES } from "./issueContent";

interface IssueDetailsType {
  id: string;
  issueTitle: string;
  description: string;
  remediation: string;
}

// interface IssueDetailData extends IssueDetailsType {
//   index: number;
// }

interface ActiveIndexStep {
  index: number | undefined;
  step: number;
}

interface IssueDetailProps {
  data: any;
  setActiveIndexStep: Dispatch<SetStateAction<ActiveIndexStep>>;
}

export const IssueDetail: React.FC<IssueDetailProps> = ({
  data,
  setActiveIndexStep,
}) => {
  return (
    <li
      className="flex gap-3 px-5 py-4 bg-darkgreen-500 text-silver-500 hover:bg-azure-500 hover:bg-opacity-70 cursor-pointer rounded"
      onClick={() => {
        setActiveIndexStep({
          index: data.index,
          step: 2,
        });
      }}
    >
      <div className="flex w-11/12 items-center gap-3">
        <p className="text-lightgray-500">
          #{data.index + 1}. {data.issueTitle}
        </p>
      </div>
      <Separator />
      <div className="w-1/12 flex items-center justify-end">
        <img src={"/arrow.svg"} alt="issue tab icon" />
      </div>
    </li>
  );
};

const initialIssue = {
  issues: [
    {
      id: "",
      description: "",
      remediation: "",
      issueTitle: "",
    },
  ],
  type: "",
  name: "",
  count: 0,
};

const Issues: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedIssue, setSelectedIssue] = useState(initialIssue);

  const [activeIndexStep, setActiveIndexStep] = useState<ActiveIndexStep>({
    index: undefined,
    step: 1,
  });

  return (
    <div
      className={twMerge(`bg-darkgreen p-3 h-[90dvh] rounded-md text-white`)}
    >
      <div className="flex items-center gap-2 mb-2 text-sm">
        <p
          className={cn(
            `${
              selectedIssue.name.length <= 0
                ? " text-silver-500"
                : " hover:opacity-80 text-gray-500 cursor-pointer"
            }`
          )}
          onClick={() => {
            if (selectedIssue.name.length !== 0) {
              setSelectedIssue(initialIssue);
              setActiveIndexStep({
                step: 1,
                index: undefined,
              });
            }
          }}
        >
          Count of Issues
        </p>
        {selectedIssue?.name ? (
          <>
            /{" "}
            <p
              className={`${
                activeIndexStep.step === 1
                  ? "text-lightgray-500"
                  : "text-gray-500 cursor-pointer hover:opacity-80"
              }  text-center`}
              onClick={() => {
                if (activeIndexStep.step === 2) {
                  setActiveIndexStep({
                    step: 1,
                    index: undefined,
                  });
                }
              }}
            >
              {selectedIssue?.name.substring(
                0,
                selectedIssue?.name.indexOf("Issues") + "Issues".length
              )}
            </p>
            {activeIndexStep?.step === 2 && <>/ </>}
            {activeIndexStep.index !== undefined && (
              <p
                className={
                  activeIndexStep.step === 2 ? "text-lightgray-500" : ""
                }
              >
                {activeIndexStep?.step === 2
                  ? `Issue #${activeIndexStep.index + 1}`
                  : ""}
              </p>
            )}
          </>
        ) : (
          ""
        )}
      </div>
      <Separator />
      {selectedIssue?.name.length === 0 && (
        <>
          <Tabs
            data={["Current File", "Full Project"]}
            className="my-4"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <ul className="flex flex-col gap-2 overflow-auto scrollbar max-h-[43vh]">
            {ISSUES?.map((value: Issue) => {
              return (
                <IssueTab
                  key={value.name}
                  data={value}
                  setSelectedIssue={setSelectedIssue}
                />
              );
            })}
          </ul>
        </>
      )}

      {selectedIssue?.name.length > 0 && activeIndexStep.step === 1 && (
        <>
          <IssueTab data={selectedIssue} step={1} className="my-3" />
          {selectedIssue?.issues?.length > 0 ? (
            <ul className="flex gap-2 flex-col h-[43vh] overflow-auto scrollbar">
              {selectedIssue?.issues?.map(
                (issueDetail: IssueDetailsType, index: number) => {
                  return (
                    <IssueDetail
                      key={issueDetail.id}
                      data={{ ...issueDetail, index: index }}
                      setActiveIndexStep={setActiveIndexStep}
                    />
                  );
                }
              )}
            </ul>
          ) : (
            <p className="text-center text-silver-500 text-xl">
              No Issues Found
            </p>
          )}
        </>
      )}

      {activeIndexStep?.step === 2 && (
        <div className="flex flex-col gap-3 my-3">
          <div className="flex gap-3 items-center justify-start rounded px-5 py-4 bg-darkgreen-500">
            <p
              className={`rounded-full min-h-3 min-w-3 max-h-3 max-w-3 ${
                ISSUECOLORS[selectedIssue.type]
              }`}
            />
            {activeIndexStep.index !== undefined && (
              <p>
                #{activeIndexStep.index + 1}.{" "}
                {
                  selectedIssue?.issues[activeIndexStep.index as number]
                    ?.issueTitle
                }
              </p>
            )}
          </div>

          <div className="bg-darkgreen-500 p-3 rounded">
            <div className="overflow-auto scrollbar h-[35vh]">
              <p className="text-brandeisblue-500 font-medium">Description:</p>
              <p className="text-silver-500">
                {
                  selectedIssue?.issues[activeIndexStep.index as number]
                    ?.description
                }
              </p>
              <p className="mt-4 text-brandeisblue-500 font-medium">
                Remediation:
              </p>
              <p className="text-silver-500">
                {
                  selectedIssue?.issues[activeIndexStep.index as number]
                    ?.remediation
                }
              </p>
            </div>
            <Separator />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 justify-end mt-3">
                <Button className="px-8">Auto Fix Code</Button>
                <Button className="bg-transparent border rounded-md p-4 py-3 border-scarletred-500 hover:bg-transparent hover:opacity-80">
                  <img src={"/flag.svg"} alt="flag" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeIndexStep.step === 2 && (
        <div className="flex gap-1 items-center text-xs mt-1">
          <img src={"/info.svg"} alt="info icon" />
          <p>Changes done in the code can be undone</p>
        </div>
      )}

      {activeIndexStep?.step !== 2 && (
        <>
          <Separator className="mt-3" />
          <div className="flex gap-2 items-center mt-4">
            <Input type="checkbox" className="size-4 cursor-pointer" />
            <p className="text-lightgray-500">Exclude Dependencies</p>
          </div>
        </>
      )}
    </div>
  );
};
export default Issues;
