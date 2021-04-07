import StarRatingComponent from "react-star-rating-component";

interface IProps {
  title: string;
  rate: number;
}

const SkillBox = ({ title, rate }: IProps) => (
  <div className="skill-box d-flex align-items-center justify-content-between">
    <h5>{title}</h5>
    <StarRatingComponent name={title} value={rate} />
  </div>
);

export default SkillBox;
