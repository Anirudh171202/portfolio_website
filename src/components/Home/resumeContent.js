import React from "react";

function ResumeContent(props) {
  return (
    <div className="resume-item">
      <h5 className={props.title ? "resume-title" : "resume-no-title"}>
        {props.title}
      </h5>
      <p>
        <em>{props.date}</em>
      </p>
      <div className="resume-text">
      <ul>
        {props.content.map((value, index) => (
          <li key={index} style={{fontsize:"2em"}}> ‣ {value}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ResumeContent;