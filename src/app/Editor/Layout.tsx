import React from "react";
import Header from "../Layout/Header";
import CustomBreadcrumb from "@/components/ui/custom_breadcrumb";

interface LayoutProps {
  children: React.ReactNode;
}
const routes = [
  {
    name: "AI Audit",
    path: "/#",
  },
  {
    name: "My Projects",
    path: "/#",
  },
  {
    name: "Code Editor",
    path: "/#",
  },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="p-3">
      <Header />
      <CustomBreadcrumb data={routes} />
      {children}
      <footer className="bg-gray-800 flex items-center justify-between text-white p-1 fixed bottom-0 left-0 w-full">
        <p>
          Made with ❤️ by{" "}
          <a href="https://linkedin.com/in/ankit-panchal534" target="_blank">
            {" "}
            Ankit Kumar
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Tech Stack- Next.js 14, Tailwind CSS , shadcn/ui, React Monaco Editor
        </p>
        <p>Online</p>
      </footer>
    </div>
  );
};
export default Layout;
