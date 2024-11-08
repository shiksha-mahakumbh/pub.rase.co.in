// components/HTMLComponent.js
"use client";
import { useEffect, useState } from "react";
import React from "react";

const Indexing = () => {
  const [htmlContent, setHtmlContent] = useState("");

  const databases = [
    "Academic OneFile",
    "Academic Search Alumni Edition",
    "Academic Search Complete",
    "Academic Search Research and Development",
    "Advanced Technologies Database with Aerospace",
    "Aerospace Database",
    "Aluminium Industry Abstracts",
    "ANTE: Abstracts in New Technologies and Engineering",
    "Cabell’s Directories",
    "CAS PubScholar",
    "Civil Engineering Abstracts",
    "CNKI Scholar",
    "Computer and Information Systems Abstracts",
    "Corrosion Abstracts",
    "Current Abstracts",
    "Current Index to Statistics (CIS)",
    "Directory of Open Access Journals (DOAJ)",
    "EBSCO Discovery Service",
    "EBSCO Engineering Source",
    "EBSCO MainFile",
    "EBSCO MegaFILE",
    "EBSCOhost Connection",
    "EBSCOhost Research Databases",
    "Electronics and Communications Abstracts",
    "Engineered Materials Abstracts",
    "Engineering Research Database",
    "Euclid Prime",
    "Google Scholar",
    "HighBeam Research",
    "InfoTrac Custom journals",
    "J-Gate Portal",
    "Mathematical Reviews (MathSciNet)",
    "Mechanical and Transportation Engineering Abstracts",
    "Open Access Journals Integrated Service System Project (GoOA)",
    "Primo Central Index",
    "ProQuest Advanced Technologies and Aerospace Collection",
    "ProQuest Computer Science Journals",
    "ProQuest Engineering Collection",
    "ProQuest SciTech Premium Collection",
    "ProQuest Technology Collection",
    "Referativnyi Zhurnal (VINITI)",
    "RePEc",
    "Scopus",
    "Statistical Theory and Method Abstracts (STMA-Z)",
    "Technology Research Database",
    "The Electronic Library of Mathematics (EMIS ELibM)",
    "The Summon Service",
    "TOC Premier",
    "WorldCat Discovery Services",
    "Zentralblatt MATH Database (zbMATH)",
    "UGC",
  ];

  return (
    <div className="p-4">
      <h1 className="text-black text-xl font-semibold py-2">
        Abstracting/Indexing
      </h1>
      <ul className="list-disc list-inside">
        {databases.map((database, index) => (
          <li
            key={index}
            className="relative before:content-['\2192'] before:text-xl before:text-black before:mr-2 text-black"
          >
            {database}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Indexing;
