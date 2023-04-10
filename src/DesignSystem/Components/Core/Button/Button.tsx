import { Button } from "antd";
import { useState } from "react";
import "./Button.css";

const Btn = ({
  id,
  children,
  type = "primary",
  size = "default",
  icon,
  shape,
  disabled = false,
  isLoading = false,
  outlined,
  block,
  danger,
  onClick,
  styles,
  ...rest
}: any) => {
  const [uniqueId] = useState(() => "btn_" + Math.random().toFixed(5).slice(2));
  const colorStyles =
    type === "primary"
      ? "glbBtnPrimary"
      : type === "danger"
      ? "glbBtnDanger _disabled"
      : "";
  return (
    <Button
      id={id ? id : uniqueId}
      type={type}
      size={size}
      icon={icon}
      shape={shape}
      disabled={disabled}
      loading={isLoading}
      ghost={outlined}
      block={block}
      danger={danger}
      onClick={onClick}
      className={`${styles} ${colorStyles}`}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default Btn;
