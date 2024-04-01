import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { IconFile, IconFolder } from "./Icons";

const File: React.FC<FileProps> = ({ file, onSelectFile, isActive }) => {
  const handleClick = () => {
    onSelectFile(file);
  };

  return (
    <div
      className={cn(
        isActive ? "text-lightblue-500" : "",
        "flex flex-row flex-nowrap gap-2 items-center ml-6 hover:underline"
      )}
      onClick={handleClick}
    >
      <IconFile fill={isActive} />
      <p className="cursor-pointer whitespace-nowrap text-[16px] ">
        {file.name}
        {file.extension}
      </p>
    </div>
  );
};

const Directory: React.FC<DirectoryProps> = ({
  directory,
  onSelectFile,
  selectedFile,
}) => {
  return (
    <Accordion type="single" collapsible className="w-full p-0">
      <AccordionItem value="item-1">
        <AccordionTrigger className="py-1.5 aria-expanded:text-lightblue-500">
          <div className="flex flex-row flex-nowrap gap-2 items-center ">
            <IconFolder fill />
            <p className="text-[16px]">{directory.name}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-5  rounded-lg pr-4 py-1 flex flex-col gap-2">
          {directory.children?.map((child) => (
            <li key={child.id} className="list-none ">
              <DirectoryOrFile
                item={child}
                onSelectFile={onSelectFile}
                selectedFile={selectedFile}
              />
            </li>
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

interface FileProps {
  file: FileItem;
  onSelectFile: (file: FileItem) => void;
  isActive: boolean;
}

interface DirectoryOrFileProps {
  item: FileItem;
  onSelectFile: (file: FileItem) => void;
  selectedFile?: FileItem;
}

const DirectoryOrFile: React.FC<DirectoryOrFileProps> = ({
  item,
  onSelectFile,
  selectedFile,
}) => {
  if (item.type === "directory") {
    return (
      <Directory
        directory={item}
        onSelectFile={onSelectFile}
        selectedFile={selectedFile}
      />
    );
  } else {
    // console.log("selectedFile", selectedFile);
    return (
      <File
        file={item}
        onSelectFile={onSelectFile}
        isActive={selectedFile?.name == item.name ? true : false}
      />
    );
  }
};

export const FileTree: React.FC<FileTreeProps> = ({
  files,
  onSelectFile,
  selectedFile,
}) => {
  const renderFile = (file: FileItem) => {
    if (file.type === "directory") {
      return (
        <Directory
          key={file.id}
          directory={file}
          onSelectFile={onSelectFile}
          selectedFile={selectedFile}
        />
      );
    } else {
      return (
        <File
          key={file.id}
          file={file}
          onSelectFile={onSelectFile}
          isActive={selectedFile?.name == file.name ? true : false}
        />
      );
    }
  };

  return <div>{files.map((file) => renderFile(file))}</div>;
};
