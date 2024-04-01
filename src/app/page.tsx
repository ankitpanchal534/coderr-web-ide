"use client";
import dynamic from "next/dynamic";
import Layout from "./Editor/Layout";
const IndexPage = dynamic(() => import("./Editor/MonacoEditor"), {
  ssr: false,
});

export default function Homepage() {
  return (
    <Layout>
      <IndexPage />
    </Layout>
  );
}
