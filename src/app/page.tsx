"use client";
import dynamic from "next/dynamic";
import React from "react";
// import IndexPage from "./Editor/MonacoEditor";
const IndexPage = dynamic(() => import("./Editor/MonacoEditor"), {
  ssr: false,
});

export default function Homepage() {
  return (
    <div>
      <IndexPage />
    </div>
  );
}
