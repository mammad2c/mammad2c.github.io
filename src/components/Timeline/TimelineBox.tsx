import { ReactNode } from "react";
import ColoredLink from "../ColoredLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
interface IProps {
  iconName: IconProp;
  title: string;
  data: Array<{
    label?: string;
    content?: JSX.Element;
    duration?: {
      from: string;
      to?: string | null;
    };
    url?: string;
  }>;
  children?: ReactNode;
}

const TimelineBox = ({ iconName, title, data }: IProps): JSX.Element => (
  <section className="timeline-box">
    <h4 className="timeline-box__title">
      <span>
        <FontAwesomeIcon icon={iconName} className="timeline-box__icon" />
        {title}
      </span>
    </h4>

    {data.map((item, index) => (
      <div className="timeline-box__data" key={index}>
        {item.duration && (
          <div className="timeline-box__duration">
            {item.duration.from}
            {item.duration.to !== null
              ? item.duration.to
                ? ` - ${item.duration.to}`
                : " - present"
              : null}
          </div>
        )}
        {item.label && <h4 className="timeline-box__label">{item.label}</h4>}
        {item.content && (
          <div className="timeline-box__content">{item.content}</div>
        )}
        {item.url && <ColoredLink href={item.url}>{item.url}</ColoredLink>}
      </div>
    ))}
  </section>
);

export default TimelineBox;
