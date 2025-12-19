import React from "react";

export default function Skills() {
  const skills = [
    { name: "HTML", level: 95 },
    { name: "CSS / Bootstrap", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 70 },
    { name: "Git / GitHub", level: 90 },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Compétences</h2>

      {skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <label className="fw-bold">{skill.name}</label>
          <div className="progress">
            <div
              className="progress-bar progress-bar-striped bg-primary"
              role="progressbar"
              style={{ width: `${skill.level}%` }}
            >
              {skill.level}%
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
