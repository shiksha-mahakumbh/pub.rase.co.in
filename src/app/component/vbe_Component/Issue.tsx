"use client";
import React from "react";
import { IssuePage } from "./IssuePage";

const Issue: React.FC = () => {
  const a = IssuePage.staticVariable;
  const srcList = "Paper " + a + ".html";
  console.log(srcList);
  return (
    <div>
      <iframe
        className="w-full"
        src={srcList}
        width="100%"
        style={{ height: "100vh" }}
      ></iframe>
    </div>
  );
};

export default Issue;
