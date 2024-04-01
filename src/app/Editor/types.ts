interface FileTreeProps {
  files: FileItem[];
  onSelectFile: (file: FileItem) => void;
  selectedFile?: FileItem;
}

interface DirectoryProps {
  directory: FileItem;
  onSelectFile: (file: FileItem) => void;
  selectedFile?: FileItem;
}

interface FileItem {
  id: number;
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileItem[];
  extension: string;
}
