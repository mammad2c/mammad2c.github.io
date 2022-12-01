interface IProps {
  title: string;
  rate: number;
}

const SkillBox = ({ title, rate }: IProps): JSX.Element => (
  <div className="skill-box d-flex align-items-center justify-content-between">
    <h5>{title}</h5>
  </div>
);

export default SkillBox;
