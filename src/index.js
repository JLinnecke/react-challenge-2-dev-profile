import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    name: "HTML",
    level: "advanced",
    color: "#DD4B25",
  },
  {
    name: "CSS",
    level: "advanced",
    color: "#3595CF",
  },
  {
    name: "JS",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    name: "React",
    level: "beginner",
    color: "#5ED3F3",
  },
  {
    name: "GitHub",
    level: "intermediate",
    color: "#5968BA",
  },
  {
    name: "REST API",
    level: "intermediate",
    color: "#F77F00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <Skilllist />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="img/johannes.jpg"
      alt="Johannes Linnecke"
    ></img>
  );
}

function Intro() {
  return (
    <div>
      <h1>Johannes Linnecke</h1>
      <p>
        I am a certified Junior Frontend Developer currently focusing on HTML,
        CSS, and JavaScript. I am currently continuing my education in React,
        and I really enjoy working with it. My projects can be found on GitHub.
        In my free time, I enjoy playing video games, cooking, and baking.
      </p>
    </div>
  );
}

function Skilllist() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        // <Skill skill={skill.name} color={skill.color} level={skill.level} key={skill.name}/>
        <Skill skill={skill} key={skill.name} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    // <div className="skill" style={{ backgroundColor: color }}>
    <div className="skill" style={{ backgroundColor: skill.color }}>
      <span>
        {skill.name +
          `${skill.level === "advanced" ? "💪" : skill.level === "intermediate" ? "👍" : "👶"}`}
      </span>
      {/* <span>{skill}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "👍"}</span>
      <span>{level === "advanced" && "💪"}</span> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
