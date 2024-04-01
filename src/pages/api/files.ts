// pages/api/files.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import { fake_files } from "./fake_files";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const files = readDirectory("src"); // Adjust the path as needed
  res.status(200).json(fake_files);
};

interface FileItem {
  id: number;
  name: string;
  type: "file" | "directory";
  content?: string;
  children?: FileItem[];
}

const readDirectory = (path: string): FileItem[] => {
  const items: FileItem[] = [];
  const files = fs.readdirSync(path);
  let id = 1;

  files.forEach((file) => {
    const filePath = `${path}/${file}`;
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      const children = readDirectory(filePath);
      items.push({
        id: id++,
        name: file,
        type: "directory",
        children,
      });
    } else {
      const content = fs.readFileSync(filePath, "utf-8");
      items.push({
        id: id++,
        name: file,
        type: "file",
        content,
      });
    }
  });

  return items;
};
