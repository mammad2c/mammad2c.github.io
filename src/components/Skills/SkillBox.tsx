import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactRating from "react-rating";

interface IProps {
  title: string;
  rate: number;
}

const SkillBox = ({ title, rate }: IProps) => (
  <div className="skill-box d-flex align-items-center justify-content-between">
    <h5>{title}</h5>
    <ReactRating
      readonly
      initialRating={rate}
      className="skill-box__rate"
      fullSymbol={
        <FontAwesomeIcon
          className="skill-box__rate-full"
          icon={["fas", "star"]}
        />
      }
      emptySymbol={<FontAwesomeIcon icon={["far", "star"]} />}
    />
  </div>
);

export default SkillBox;
