import React from "react";
import SkillBox from "./SkillBox";

const skills = [
  {
    title: "ReactJs",
    rate: 5
  },
  {
    title: "Redux",
    rate: 5
  },
  {
    title: "MobX",
    rate: 3
  },
  {
    title: "VueJs",
    rate: 5
  },
  {
    title: "Vuex",
    rate: 5
  },
  {
    title: "Server Side Rendering",
    rate: 4
  },
  {
    title: "Typescript",
    rate: 4
  },
  {
    title: "GulpJs",
    rate: 4
  },
  {
    title: "Webpack",
    rate: 4
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
    rate: 3
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

const Skills: React.FC = () => {
  return (
    <div className="skills">
      <div className="skills__item">
        <h2>Skills:</h2>
        {skills.map((item, index) => (
          <SkillBox key={index} title={item.title} rate={item.rate} />
        ))}
      </div>
      <div className="skills__item">
        <h2>Languages:</h2>
        {languages.map((item, index) => (
          <SkillBox key={index} title={item.title} rate={item.rate} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
