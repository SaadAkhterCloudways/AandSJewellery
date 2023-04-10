import "./Text.css";
interface TextInterface {
  type?: any;
  weight?: string;
  styles?: string;
  ellipsis?: boolean;
  children: any;
}
const Text = ({
  type = "p",
  weight='',
  styles = "",
  ellipsis,
  children,
  ...rest
}: TextInterface) => {
  const fontWeight = ["light", "normal", "medium", "semibold", "bold"].includes(
    weight
  )
    ? `font-${weight}`
    : "";

  const Ellipsis = ellipsis
    ? " whitespace-nowrap break-all overflow-hidden text-ellipsis"
    : "";
  const Type = type.toLowerCase();

  return (
    <Type className={`${styles} ${Ellipsis} ${fontWeight} ${type}`} {...rest}>
      {children}
    </Type>
  );
};

export default Text;
