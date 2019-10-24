import React from "react";

interface IProps {
  title: string;
  rate: number;
}

const SkillBox = ({ title }: IProps) => {
  return (
    <div className="skill-box d-flex align-items-center justify-content-between">
      <h4>{title}</h4>
    </div>
  );
};

export default SkillBox;
