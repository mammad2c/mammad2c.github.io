import { ReactNode } from "react";

interface IProps {
  iconName: string;
  title: string;
  data: Array<{
    label?: string;
    content: JSX.Element;
    duration?: {
      from: string;
      to?: string | null;
    };
    url?: string;
  }>;
  children?: ReactNode;
}

const TimelineBox = ({ iconName, title, data }: IProps) => (
  <section className="timeline-box">
    <h2 className="timeline-box__title">
      <i className={`timeline-box__icon ${iconName}`} />
      {title}
    </h2>

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
        <div className="timeline-box__content">{item.content}</div>
        {item.url && <a href={item.url}>{item.url}</a>}
      </div>
    ))}
  </section>
);

export default TimelineBox;
