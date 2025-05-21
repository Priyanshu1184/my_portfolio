import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Priyanshu-Sahoo-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
    console.log("ResumeNew rendered");
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <div className="resume-header">
          <h1 className="resume-title">Resume</h1>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ 
              maxWidth: "250px",
              fontSize: "1.2em",
              padding: "12px 24px",
              backgroundColor: "#10B981",
              borderColor: "#10B981",
              boxShadow: "0 4px 6px rgba(16, 185, 129, 0.2)",
              transition: "all 0.3s ease",
              margin: "20px auto"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#059669";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 6px 8px rgba(16, 185, 129, 0.3)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "#10B981";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 6px rgba(16, 185, 129, 0.2)";
            }}
          >
            <AiOutlineDownload style={{ marginRight: "8px", fontSize: "1.2em" }} />
            Download Resume
          </Button>
        </div>

        <Row className="resume">
          <Document file={pdf} className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.8 : 0.6} />
          </Document>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
