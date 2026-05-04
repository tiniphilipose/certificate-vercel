"use client";

import { useState } from "react";
import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Certificate() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");
  const [instructor, setInstructor] = useState("");
  const [certificateNo, setCertificateNo] = useState("BCMC2026000");
  const [hours, setHours] = useState("1 hour");
  const [modeOfTraining, setModeOfTraining] = useState("Online");
  const downloadPDF = async () => {
    const element = document.getElementById("cert");
    if (!element) return;

    const html2canvas = (await import("html2canvas")).default;
    const jsPDF = (await import("jspdf")).default;

    await new Promise((r) => setTimeout(r, 300));

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: null,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 297, 210);
    pdf.save("certificate.pdf");
  };

  const editableStyle = {
    outline: "none",
    //minHeight: "40px",
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>

      <div
        id="cert"
        className={cormorant.className}
        style={{
          width: "1123px",
          height: "794px",
          margin: "auto",
          position: "relative",
          backgroundImage:
            "url('/best-compliance-management-consultancy.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* CENTER BLOCK */}
        <div
          style={{
            position: "absolute",
            top: "46%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            textAlign: "center",
            bottom: 0,
          }}
        >
          <h1
            style={{
              fontSize: "57px",
                  lineHeight: "45px",
              color: "#a27430",
              letterSpacing: "2px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            CERTIFICATE
          </h1>

          <h2
            style={{
              fontSize: "26px",
              textTransform: "uppercase",
              color: "#4d4434",
              lineHeight: "45px",
              marginBottom: "10px",
            }}
          >
            of participation
          </h2>

          <p
            style={{
              fontSize: "13px",
              //marginBottom: "20px",
              textTransform: "uppercase",
              color: "#4d4434",
              fontWeight: "600",
            }}
          >
            This certificate is awarded to
          </p>

          {/* NAME */}
          <div
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Your Name"
            onBlur={(e) => setName(e.target.innerText)}
            style={{
              fontSize: "40px",
              fontWeight: "600",
              textTransform:"uppercase",
              marginBottom: "10px",
              marginTop: "10px",
              ...editableStyle,
            }}
          >
            {name}
          </div>

          <div
            style={{
              border: "1px solid #dcb458",
              width: "400px",
              margin: "0 auto 10px",
            }}
          />


<div
  style={{
    fontSize: "15px",
    marginBottom: "10px",
    display: "inline-block",
    textAlign:"left"
  }}
>
  <span
    style={{
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "#4d4434",
      fontWeight: "600",
      marginRight: "5px",
    }}
  >
    FOR PARTICIPATION IN
  </span>

  <span
    contentEditable
    suppressContentEditableWarning
    data-placeholder="Course Name"
    onBlur={(e) => setCourse(e.target.innerText)}
    style={{
      outline: "none",
      fontWeight: "500",
      borderBottom: "1px solid transparent",
      minWidth: "150px",
      display: "inline-block",
      color: "#4d4434",
      fontWeight: "600",
    }}
  >
    {course}
  </span>
</div>

          {/* ✅ SUMMARY (NEW) */}
          <div
            contentEditable
            suppressContentEditableWarning
            data-placeholder="Course summary / description"
            onBlur={(e) => setSummary(e.target.innerText)}
            style={{
              fontSize: "15px",
              maxWidth: "84%",
              margin: "0 auto",
              lineHeight: "1.6",
              color: "#444",
              fontWeight: "800",
              paddingBottom: "60px",
              ...editableStyle,
            }}
          >
            {summary}
          </div>
        </div>

        {/* ✅ FOOTER (NEW) */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 120px",
            alignItems: "end",
          }}
        >
          {/* DATE */}
          {/* <div style={{ textAlign: "center" }}>
            <div
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Date"
              onBlur={(e) => setDate(e.target.innerText)}
              style={editableStyle}
            >
              {date}
            </div>
            <div style={{ borderTop: "1px solid #000", width: "150px" }} />
            <small>Date</small>
          </div> */}
                  <div
          style={{
            textAlign: "left",
            fontSize: "18px",
            color: "#4d4434",
          }}
        >
          <div>Certificate no:{" "}
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setCertificateNo(e.target.innerText)}
              style={{ ...editableStyle, display: "inline-block", minWidth: "150px" }}
            >
              {certificateNo}
            </span>
          </div>

          <div>Hours: 1 hour
          </div>

          <div>Date of completion:{" "}
            <span
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => setDate(e.target.innerText)}
              style={{ ...editableStyle, display: "inline-block", minWidth: "150px" }}
            >
              {date || "00-00-0000"}
            </span>
          </div>

          <div>Mode of training: Online
          </div>
        </div>

          {/* INSTRUCTOR */}
          <div style={{ textAlign: "center" }}>
            {/* <div
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Instructor"
              onBlur={(e) => setInstructor(e.target.innerText)}
              style={editableStyle}
            >
              {instructor}
            </div> */}
            
            <div style={{ borderTop: "1px solid #000", width: "200px", margin: "0px auto" }} />
            <p style={{fontSize: "20px",fontWeight: "bold", textTransform: "uppercase", margin: "0px"}}>Umamaheswari Sukumar</p>
            <small>Trainer</small>
          </div>
        </div>
      </div>

      <button
        onClick={downloadPDF}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          cursor: "pointer",
              marginTop: "20px",
    backgroundColor: "rgb(37, 99, 235)",
    color: "rgb(255, 255, 255)",
    borderRadius: "6px",
    borderWidth: "medium",
    borderStyle: "none",
    borderColor: "currentcolor",
    borderImage: "initial",
    cursor: "pointer",
    fontWeight: "bold",
        }}
      >
        Download Certificate
      </button>
    </div>
  );
}