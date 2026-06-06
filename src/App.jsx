import React, { useState, useRef } from "react";

function App() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    tenth: "",
    inter: "",
    degree: "",
    skills: "",
    technicalSkills: "",
    projects: "",
    certifications: "",
    personalDetails: "",
  });

  // Create a reference to the preview section for PDF extraction
  const previewRef = useRef();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  // Function to handle PDF generation and download
  const handleDownloadPDF = () => {
    const element = previewRef.current;
    
    const options = {
      margin: [10, 10, 10, 10],
      filename: `${data.name || "Resume"}_Resume.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true }, 
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <div className="app">
      <h1 className="title"><em>🌈 Resume Builder With PDF Export</em></h1>

      <div className="container">

        {/* Left Side Form */}
        <div className="form-section">
          <h2><em>Resume Details</em></h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
          />

          <textarea
            name="summary"
            placeholder="Career Objective"
            onChange={handleChange}
          />

          <input
            type="text"
            name="tenth"
            placeholder="SSC Education"
            onChange={handleChange}
          />

          <input
            type="text"
            name="inter"
            placeholder="Intermediate Education"
            onChange={handleChange}
          />

          <input
            type="text"
            name="degree"
            placeholder="Degree Education"
            onChange={handleChange}
          />

          <textarea
            name="skills"
            placeholder="Skills"
            onChange={handleChange}
          />

          <textarea
            name="technicalSkills"
            placeholder="Technical Skills"
            onChange={handleChange}
          />

          <textarea
            name="projects"
            placeholder="Projects"
            onChange={handleChange}
          />

          <textarea
            name="certifications"
            placeholder="Certifications"
            onChange={handleChange}
          />

          <textarea
            name="personalDetails"
            placeholder="Personal Details"
            onChange={handleChange}
          />
          
          {/* Action button added to the bottom of the form side */}
          <button className="download-btn" onClick={handleDownloadPDF}>
            Download PDF
          </button>
        </div>

        {/* Right Side Preview */}
        <div className="preview-section" ref={previewRef}>

          <h1 className="resume-name"><em>
            {data.name || "Your Full Name"}</em>
          </h1>

          <p><strong>Email:</strong> {data.email}</p>
          <p><strong>Phone:</strong> {data.phone}</p>

          <h3>Career Objective</h3>
          <p>{data.summary}</p>

          <h3>Education</h3>
          <p><strong>SSC:</strong> {data.tenth}</p>
          <p><strong>Intermediate:</strong> {data.inter}</p>
          <p><strong>Degree:</strong> {data.degree}</p>

          <h3>Skills</h3>
          <p>{data.skills}</p>

          <h3>Technical Skills</h3>
          <p>{data.technicalSkills}</p>

          <h3>Projects</h3>
          <p>{data.projects}</p>

          <h3>Certifications</h3>
          <p>{data.certifications}</p>

          <h3>Personal Details</h3>
          <p>{data.personalDetails}</p>
          
        </div>
      </div>

      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:Poppins,sans-serif;
        }

        .app{
          min-height:100vh;
          padding:30px;
          background:linear-gradient(
            135deg,
            #ee8185,
            #fad0c4,
            #a18cd1,
            #84fab0
          );
          
          background-size:400% 400%;
          animation:bgMove 20s ease infinite;
        }
        @keyframes bgMove{
          0%{background-position:0% 50%;}
          50%{background-position:100% 50%;}
          100%{background-position:0% 50%;}
        }

        .title{
          text-align:center;
          color:black;
          font-size:60px;
          margin-bottom:30px;
        }

        .container{
          display:flex;
          gap:25px;
          flex-wrap:wrap;
        }

        .form-section,
        .preview-section{
          flex:1;
          min-width:400px;
          padding:25px;
          border-radius:20px;
          background:rgba(255,255,255,0.2);
          backdrop-filter:blur(10px);
          box-shadow:0 8px 20px rgba(0,0,0,0.2);
        }

        .form-section h2{
          text-align:center;
          color:black;
          margin-bottom:20px;
        }

        input,
        textarea{
          width:100%;
          padding:12px;
          margin-bottom:12px;
          border:none;
          border-radius:10px;
          outline:none;
        }

        textarea{
          height:90px;
          resize:none;
        }

        .download-btn {
          width: 100%;
          padding: 15px;
          background: linear-gradient(90deg, #c262b1, #ce6997);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          margin-top: 10px;
        }

        .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(221, 36, 118, 0.4);
        }

        .download-btn:active {
          transform: translateY(0);
        }

        .resume-name{
          text-align:center;
          font-size:clamp(30px,5vw,50px);
          margin-bottom:20px;
          line-height:1.2;
          word-break:break-word;

          background:linear-gradient(
            90deg,
            #aa5b4b,
            #dd2476,
            #6c5ce7
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .preview-section p{
          color:black;
          margin:8px 0;
          line-height:1.6;
        }

        .preview-section h3{
          margin-top:15px;
          margin-bottom:10px;
          text-align:center;
          padding:10px;
          border-radius:10px;
          color:white;

          background:linear-gradient(
            90deg,
            #00c9ff,
            #92fe9d
          );
        }
      `}</style>
    </div>
  );
}

export default App;