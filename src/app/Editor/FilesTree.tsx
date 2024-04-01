import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IconFile, IconFolder } from "./Icons";

const File: React.FC<FileProps> = ({ file, onSelectFile }) => {
  const handleClick = () => {
    onSelectFile(file);
  };

  return (
    <div
      className="flex flex-row flex-nowrap gap-2 ml-5 hover:underline"
      onClick={handleClick}
    >
      <IconFile />
      <p className="cursor-pointer whitespace-nowrap ">{file.name}</p>
    </div>
  );
};

const Directory: React.FC<DirectoryProps> = ({ directory, onSelectFile }) => {
  return (
    <Accordion type="single" collapsible className="w-full p-0">
      <AccordionItem value="item-1">
        <AccordionTrigger className="py-2">
          <div className="flex flex-row flex-nowrap gap-2 ">
            <IconFolder />
            <p className=" ">{directory.name}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="pl-5  rounded-lg pr-4 py-2 flex flex-col gap-2">
          {directory.children?.map((child) => (
            <li key={child.id} className="list-none ">
              <DirectoryOrFile item={child} onSelectFile={onSelectFile} />
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
}

interface DirectoryOrFileProps {
  item: FileItem;
  onSelectFile: (file: FileItem) => void;
}

const DirectoryOrFile: React.FC<DirectoryOrFileProps> = ({
  item,
  onSelectFile,
}) => {
  if (item.type === "directory") {
    return <Directory directory={item} onSelectFile={onSelectFile} />;
  } else {
    return <File file={item} onSelectFile={onSelectFile} />;
  }
};

export const FileTree: React.FC<FileTreeProps> = ({ files, onSelectFile }) => {
  const renderFile = (file: FileItem) => {
    if (file.type === "directory") {
      return (
        <Directory key={file.id} directory={file} onSelectFile={onSelectFile} />
      );
    } else {
      return <File key={file.id} file={file} onSelectFile={onSelectFile} />;
    }
  };

  return <div>{files.map((file) => renderFile(file))}</div>;
};
