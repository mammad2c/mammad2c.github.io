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
  color = "primary",
  ...props
}: Props): JSX.Element => (
  <a className={`link-${color} ${className || ""}`} {...props}>
    {children}
  </a>
);

export default ColoredLink;
