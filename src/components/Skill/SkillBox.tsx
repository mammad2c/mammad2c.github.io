import React from "react";
import StarRatingComponent from "react-star-rating-component";

interface IProps {
    title: string;
    rate: number;
}

const SkillBox = ({ title, rate }: IProps) => {
    return (
        <div className="skill-box d-flex align-items-center justify-content-between">
            <h4>{title}</h4>
            <StarRatingComponent name={title} value={rate} />
        </div>
    );
};

export default SkillBox;
