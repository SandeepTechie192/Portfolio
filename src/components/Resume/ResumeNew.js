import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
// Import your resume PDF here
// import pdf from "../../Assets/Your-Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Placeholder - replace with your actual resume PDF
  const pdf = null;

return (
	<div>
		<Container fluid className="resume-section">
			<Particle />
			<Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
				<h1 className="project-heading" style={{ textAlign: "center" }}>
					My <strong className="purple">Resume</strong>
				</h1>
			</Row>
			
			{pdf ? (
				<>
					<Row style={{ justifyContent: "center", position: "relative" }}>
						<Button
							variant="primary"
							href={pdf}
							target="_blank"
							style={{ maxWidth: "250px" }}
						>
							<AiOutlineDownload />
							&nbsp;Download CV
						</Button>
					</Row>

					<Row className="resume">
						<Document file={pdf} className="d-flex flex-column align-items-center">
							<Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
							<Page pageNumber={2} scale={width > 786 ? 1.7 : 0.6} />
						</Document>
					</Row>
				</>
			) : (
				<Row style={{ justifyContent: "center", position: "relative", flexDirection: "column", alignItems: "center", minHeight: "50vh" }}>
					<div style={{ 
						textAlign: "center", 
						padding: "60px 40px",
						background: "rgba(26, 26, 46, 0.7)",
						borderRadius: "20px",
						border: "2px dashed rgba(212, 175, 55, 0.4)",
						maxWidth: "600px",
						boxShadow: "0 0 30px rgba(212, 175, 55, 0.1)"
					}}>
						<h3 style={{ color: "#D4AF37", marginBottom: "20px" }}>📄 Resume Coming Soon</h3>
						<p style={{ color: "#ccc", marginBottom: "25px" }}>
							Upload your resume PDF to display it here.<br/>
							Import your PDF file in ResumeNew.js
						</p>
						<Button
							variant="primary"
							href="#"
							style={{ maxWidth: "250px" }}
							disabled
						>
							<AiOutlineDownload />
							&nbsp;Download CV
						</Button>
					</div>
				</Row>
			)}
		</Container>
	</div>
);
}

export default ResumeNew;
