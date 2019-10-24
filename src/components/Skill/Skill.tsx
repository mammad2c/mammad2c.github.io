import React from "react";
import SkillBox from "./SkillBox";

const skills = [
  {
    title: "ReactJs",
    rate: 4
  },
  {
    title: "React Native",
    rate: 4
  },
  {
    title: "React Redux",
    rate: 5
  },
  {
    title: "Redux Saga",
    rate: 4
  },
  {
    title: "Redux Thunk",
    rate: 3
  },
  {
    title: "Redux Persist",
    rate: 2
  },
  {
    title: "Immutable Js",
    rate: 4
  },
  {
    title: "VueJs",
    rate: 3
  },
  {
    title: "Vuex",
    rate: 2
  },
  {
    title: "Ruby on Rails",
    rate: 2
  },
  {
    title: "Typescript",
    rate: 4
  },
  {
    title: "Gulp Js",
    rate: 5
  },
  {
    title: "Webpack",
    rate: 3
  },
  {
    title: "Bootstrap",
    rate: 5
  },
  {
    title: "SASS/LESS",
    rate: 5
  },
  {
    title: "Node Js",
    rate: 3
  },
  {
    title: "CSS/CSS3",
    rate: 5
  },
  {
    title: "HTML/HTML5",
    rate: 5
  },
  {
    title: "Git",
    rate: 4
  },
  {
    title: "Express Js",
    rate: 3
  },
  {
    title: "Adobe Photoshop",
    rate: 3
  },
  {
    title: "Adobe Illustrator",
    rate: 2
  },
  {
    title: "Adobe XD",
    rate: 3
  }
];

const languages = [
  {
    title: "Persian",
    rate: 5
  },
  {
    title: "English",
    rate: 3
  }
];

const Skill: React.FC = () => {
  return (
    <div className="skill">
      <div className="skill__item">
        <h2>Skills:</h2>
        {skills.map((item, index) => (
          <SkillBox key={index} title={item.title} rate={item.rate} />
        ))}
      </div>
      <div className="skill__item">
        <h2>Languages:</h2>
        {languages.map((item, index) => (
          <SkillBox key={index} title={item.title} rate={item.rate} />
        ))}
      </div>
    </div>
  );
};

export default Skill;
