interface FileTreeProps {
  files: FileItem[];
  onSelectFile: (file: FileItem) => void;
}

interface DirectoryProps {
  directory: FileItem;
  onSelectFile: (file: FileItem) => void;
}

interface FileItem {
  id: number;
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileItem[];
}
