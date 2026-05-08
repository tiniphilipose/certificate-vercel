"use client";

import { useState } from "react";
import { Cormorant_Garamond, Gilda_Display } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
const gilda = Gilda_Display({
  subsets: ["latin"],
  weight: ["400"], // Gilda only supports 400
});
export default function Certificate() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");
  const [instructor, setInstructor] = useState("");
  const [certificateNo, setCertificateNo] = useState("");
  const [hours, setHours] = useState("");
  const [modeOfTraining, setModeOfTraining] = useState("");
  const [isExporting, setIsExporting] = useState(false);
 const downloadPDF = async () => {
    setIsExporting(true);

    const element = document.getElementById("cert");
    const html2canvas = (await import("html2canvas")).default;
    const jsPDF = (await import("jspdf")).default;

    await new Promise((r) => setTimeout(r, 300));

    const canvas = await html2canvas(element, {
      scale: 3,
      useCORS: true,
      backgroundColor: "#ffffff",
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "mm", "a4");
    pdf.addImage(imgData, "PNG", 0, 0, 297, 210);

    pdf.save(`certificate-${name || "name"}.pdf`);

    setIsExporting(false);
  };

  const editableStyle = {
    outline: "none",
    //minHeight: "40px",
  };

  return (
    <div className={"flex flex-col items-center p-4"}>

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
              fontSize: "57.3px",
              lineHeight: "45px",
              color: "#a27430",
              letterSpacing: "3px",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            CERTIFICATE
          </h1>

          <h2
            style={{
              fontSize: "26.6px",
              textTransform: "uppercase",
              letterSpacing: "2px",
              color: "#4d4434",
              lineHeight: "45px",
              marginBottom: "10px",
              fontWeight: "500",
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
            className={gilda.className}
            style={{
              fontSize: "40px",
              fontWeight: "600",
              textTransform: "uppercase",
              marginBottom: "10px",
              marginTop: "10px",
              color: "#343434",
              display: "inline-block",
              ...editableStyle,
            }}
          >
            {name}
          </div>

          <div
            style={{
              border: "2px solid #dcb458",
              width: "400px",
              margin: "0 auto 10px",
            }}
          />


          <div
            style={{
              fontSize: "15px",
              marginBottom: "10px",
              display: "inline-block",
              textAlign: "left"
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
                display: "inline-block",
                color: "#4d4434",
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              {course}
            </span>
          </div>
<br></br>
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
              color: "#000000",
              fontWeight: "800",
              fontStyle: "italic",
              paddingBottom: "60px",
              display: "inline-block",
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
          <div
            className={gilda.className}
            style={{
              textAlign: "left",
              fontSize: "13px",
              color: "#000000",
            }}
          >
            <div>
              Certificate no:{" "}

              {/* STATIC PREFIX */}
              <span>
                BCMC
              </span>

              {/* EDITABLE NUMBER */}
              <span
                contentEditable
                suppressContentEditableWarning
                data-placeholder="0000000"
                onBlur={(e) => {
                  const value = e.target.innerText.replace(/\D/g, "");
                  setCertificateNo(value);
                }}
                style={{
                  ...editableStyle,
                  display: "inline-block",
                  minWidth: "90px",
                  outline: "none",
                  position: "relative",
                }}
              >
                {certificateNo}
              </span>
            </div>
            <div>
              Hours:{" "}
              <span
                contentEditable
                suppressContentEditableWarning
                data-placeholder="0"
                onBlur={(e) => {
                  const value = e.target.innerText;
                  setHours(value);
                }}
                    style={{
                  ...editableStyle,
                  display: "inline-block",
                }}
              >
                {hours}
              </span>
              {" "}
              <span>
                hour
              </span>
            </div>

            <div>
              Date of completion:{" "}

              <span
                contentEditable
                suppressContentEditableWarning
                data-placeholder="dd-mm-yyyy"
                onInput={(e) => {
                  let value = e.currentTarget.innerText.replace(/\D/g, "");

                  // Auto format dd-mm-yyyy
                  if (value.length > 2) {
                    value = value.slice(0, 2) + "-" + value.slice(2);
                  }

                  if (value.length > 5) {
                    value = value.slice(0, 5) + "-" + value.slice(5, 9);
                  }

                  e.currentTarget.innerText = value;

                  // Move cursor to end
                  const range = document.createRange();
                  const sel = window.getSelection();

                  range.selectNodeContents(e.currentTarget);
                  range.collapse(false);

                  sel.removeAllRanges();
                  sel.addRange(range);

                  setDate(value);
                }}
                style={{
                  ...editableStyle,
                  minWidth: "110px",
                  display: "inline-block",
                  outline: "none",
                }}
              >
                {date}
              </span>
            </div>

<div style={{ display: "flex", alignItems: "center" }}>
  <span>Mode of training:</span>

  {/* SHOW ONLY WHEN EXPORTING (PDF SAFE TEXT) */}
  {isExporting ? (
    <span
      style={{
        fontSize: "13px",
        color: "#000",
        minWidth: "140px",
        display: "inline-block",
            padding: "4px",
      }}
    >
     {modeOfTraining || "Select Mode"}
    </span>
  ) : (
    /* UI ONLY SELECT */
    <select
      value={modeOfTraining}
      onChange={(e) => setModeOfTraining(e.target.value)}
      style={{
        border: "none",
        outline: "none",
        background: "transparent",
        fontSize: "13px",
        fontFamily: "inherit",
        cursor: "pointer",
        padding:"4px",
        appearance: "none",
      }}
    >
      <option value="">Select Mode</option>
      <option value="Online">Online</option>
      <option value="Face To Face">Face To Face</option>
      <option value="In Office">In Office</option>
      <option value="In House">In House</option>
    </select>
  )}
</div>
          </div>

          {/* INSTRUCTOR */}
          <div style={{ textAlign: "center", position: "relative" }}>
            {/* <div
              contentEditable
              suppressContentEditableWarning
              data-placeholder="Instructor"
              onBlur={(e) => setInstructor(e.target.innerText)}
              style={editableStyle}
            >
              {instructor}
            </div> */}


            {/* <img alt="Seal" src="/seal.png" style={{ width: "100px", position: "absolute", bottom: "55px", right: "55px", zIndex: "1" }}></img> */}
            <img alt="Signature" src="/signature.png" style={{ width: "200px", position: "relative", zIndex: "2", margin: "0 auto", bottom: "24px" }}></img>
            <div style={{ borderTop: "1px solid #000", width: "172px", margin: "0px auto", color: "#4d4434" }} />
            <p style={{ fontSize: "16px", fontWeight: "bold", textTransform: "uppercase", margin: "0px", color: "#4d4434" }}>Umamaheswari Sukumar</p>
            <small style={{ fontSize: "14px", color: "#4d4434", fontWeight: "bold", }}>Trainer</small>
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
          backgroundColor: "#dcb458",
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
        {isExporting ? "Generating..." : "Download Certificate"}
      </button>
    </div>
  );
}
