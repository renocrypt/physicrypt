import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>PhysiCrypt</h1>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  feedback: {
    content: "",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "PhysiCrypt - Powered by RenoCrypt",
  },
};

export default config;
