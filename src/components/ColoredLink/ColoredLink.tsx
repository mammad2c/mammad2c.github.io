import { BootstrapColors } from "../../types";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  color?: BootstrapColors;
}

const ColoredLink = ({
  children,
  className,
  target = "_blank",
  color = "primary",
  rel = "noopener noreferrer",
  ...props
}: Props): JSX.Element => (
  <a
    target={target}
    className={`link-${color} ${className || ""}`}
    rel={rel}
    {...props}
  >
    {children}
  </a>
);

export default ColoredLink;
