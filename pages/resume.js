import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { name, showResume } from "../data/portfolio.json";
import { resume } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const [pdfUrl, setPdfUrl] = useState('');

  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);
  
  useEffect(() => {
    const importPdf = async () => {
      try {
        const pdfFile = await import('../public/resume.pdf');
        setPdfUrl(pdfFile.default);
      } catch (error) {
        console.error('Error importing PDF file:', error);
      }
    };
  
    importPdf();
  }, []);
  return (
    <>
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        <div>
          {pdfUrl && (
            <embed src={pdfUrl} type="application/pdf" width="100%" height="800px" style={{ border: "none" }} toolbar="false" />

          )}
    </div>
      </div>
    </>
  );
};

export default Resume;
