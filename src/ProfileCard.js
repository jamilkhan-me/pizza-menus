import React from "react";

const ProfileCard = () => {
  return (
    <div className="card">
      <Avater />
      <div className="data">
        <Intro />
        <Skillsets />
      </div>
    </div>
  );
};

export default ProfileCard;

function Avater() {
  return (
    <div>
      <img src="./profile.jpg" alt="profile" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h2>Jonas Schmedtmann</h2>
      <p>
        Full-stack web developer and teacher at udemy. When not coding or
        preparing a course, I like to play board games, to cood (and eat), or to
        just enjoy the sunset at the beach
      </p>
    </div>
  );
}

function Skillsets() {
  return (
    <div className="skill-list">
      <Skills skill="HTML+CSS 💪" color="blue" />
      <Skills skill="Javascript 💪" color="red" />
      <Skills skill="Web design 💪" color="yellow" />
      <Skills skill="ReactJS 💪" color="orange" />
    </div>
  );
}

function Skills({ skill, color }) {
  return (
    <div className="skill" style={{ background: color }}>
      <p>{skill}</p>
    </div>
  );
}
