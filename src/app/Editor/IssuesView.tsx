import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { IconForwardArrow } from "./Icons";

export default function IssuesView() {
  return (
    <aside className="bg-[#13161A]  p-4 mx-3 rounded-sm h-screen overflow-auto">
      <div className="border-b py-3 border-b-gray-500 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>Count of Issues</BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem className="text-white">
              High Severity Issues{" "}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="w-full flex items-center px-2 p-2 mt-5 rounded-lg  bg-[#191d23]">
        <div className="w-[45%] p-3 pl-4  flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-700 rounded-xl"></div>
          <span className="text-3xl font-bold"> 108</span>
        </div>
        <div className="w-1/2 p-3 pr-0 pl-6 border-l border-gray-500">
          <span className=" text-[#AAAAAA]">High Severity Issues</span>
        </div>
      </div>
      <div className="w-full mt-3 py-2 border-b border-gray-500">
        <span>List of Issues</span>
      </div>
      <div className="flex gap-0 flex-col">
        {new Array(7).fill("_").map((issue, idx) => (
          <div
            key={idx}
            className="w-full m-2 bg-[#191d23] flex items-center justify-between p-3 rounded-sm"
          >
            <h1> #1. Lorem ipsum dolor sit ame</h1>
            <IconForwardArrow />
          </div>
        ))}
      </div>
    </aside>
  );
}
