// pages/index.tsx
import { useEffect, useState } from "react";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import MonacoEditor from "react-monaco-editor";
import ActionHeader from "../Layout/ActionHeader";
import { FileTree } from "./FilesTree";
import IssuesView from "./IssuesView";
import { editorOptions } from "./options";

const IndexPage: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<FileItem[]>([]);
  const [target_file, setTarget_file] = useState<FileItem | null>(null);

  const [files, setFiles] = useState<FileItem[]>([]);

  const handleFileSelect = (file: FileItem) => {
    setTarget_file(file);
    setSelectedFiles((prevSelectedFiles) => {
      if (
        prevSelectedFiles.find(
          (selectedFile) => selectedFile.name === file.name
        )
      ) {
        return prevSelectedFiles;
      } else {
        return [...prevSelectedFiles, file];
      }
    });
  };

  const handleCloseFile = (file: FileItem) => {
    setSelectedFiles((prevSelectedFiles) =>
      prevSelectedFiles.filter(
        (selectedFile) => selectedFile.name !== file.name
      )
    );
    if (target_file?.name == file.name) {
      setTarget_file(selectedFiles[1]);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const res = await fetch("/api/files");
      const data = await res.json();
      setFiles(data);
    } catch (error) {
      console.error("Error fetching files:", error);
    }
  };
  return (
    <div className="flex flex-col h-screen  overflow-hidden  ">
      <ActionHeader />
      <div className="w-full flex justify-center border-t border-gray-600 pt-3">
        <ResizablePanelGroup direction="horizontal" className="h-screen   ">
          <ResizablePanel defaultSize={20} className="px-2">
            <aside className="bg-[#13161A]  p-2 rounded-sm h-screen overflow-auto overflow-y-scroll pb-40 text-silver-500 text-[16px]">
              <p className=" pb-2 border-b border-gray-500">Folders & Files</p>
              <FileTree
                files={files}
                onSelectFile={handleFileSelect}
                selectedFile={target_file || undefined}
              />
            </aside>
          </ResizablePanel>

          <ResizableHandle withHandle />

          <ResizablePanel defaultSize={80}>
            <main className="flex-grow   h-[calc(100dvh-90px)]">
              <div
                className="flex flex-row items-center overflow-scroll "
                style={{
                  scrollbarWidth: "none",
                }}
              >
                {selectedFiles.toReversed()?.map((selectedFile) => (
                  <div
                    className="flex justify-start border-r border-black"
                    key={selectedFile?.name}
                  >
                    {selectedFile?.name ? (
                      <div
                        className={cn(
                          target_file?.name == selectedFile.name
                            ? "bg-[#007aff] text-white rounded-[6px_6px_0px_0px]"
                            : "bg-inherit text-[#5D677D]",
                          "w-auto  px-2 py-1.5 flex items-center cursor-pointer"
                        )}
                      >
                        <div
                          className="w-full h-auto text-sm pl-2 whitespace-nowrap"
                          onClick={() => handleFileSelect(selectedFile)}
                        >
                          {selectedFile?.name}
                        </div>
                        <button
                          className="p-1.5 ml-4 "
                          onClick={() => handleCloseFile(selectedFile)}
                        >
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 512 512"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"></path>
                          </svg>{" "}
                        </button>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              {selectedFiles.length > 0 && target_file?.name ? (
                <MonacoEditor
                  key={target_file?.name}
                  width="100%"
                  height="90dvh"
                  language={getFileLanguage(target_file?.name ?? "")}
                  theme="vs-dark"
                  className="pt-3 0"
                  value={target_file?.content || ""}
                  options={editorOptions as any}
                />
              ) : (
                // ))
                <div className="flex items-center gap-8 justify-center h-full">
                  <div className="flex justify-center flex-col items-center border rounded-xl shadow-[0px_0px_12px_black] p-4 hover:shadow-white duration-200">
                    <img
                      src="https://cdn-icons-png.freepik.com/512/12075/12075589.png"
                      height={50}
                      width={90}
                      className="object-contain"
                    />
                    <p className="text-white">Select folder to edit</p>
                  </div>
                  <div className="flex justify-center flex-col items-center border rounded-xl shadow-[0px_0px_12px_black] p-4 hover:shadow-white duration-200">
                    <img
                      src="https://cdn-icons-png.freepik.com/256/887/887997.png"
                      height={50}
                      width={90}
                      className="object-contain"
                    />
                    <p className="text-white">Select a file to edit</p>
                  </div>
                </div>
              )}
            </main>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultValue={0}>
            <IssuesView />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default IndexPage;

const getFileLanguage = (fileName: string): string => {
  const ext = fileName.split(".").pop();
  switch (ext) {
    case "js":
      return "javascript";
    case "ts":
      return "typescript";
    case "html":
      return "html";
    case "css":
      return "css";
    case "json":
      return "json";
    default:
      return "";
  }
};
