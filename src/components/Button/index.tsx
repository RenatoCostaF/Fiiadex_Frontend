import { Container, CustomButton, IconContainer, TextContainer } from "./style";

interface ButtonProps {
  text: string;
  type: "button" | "submit";
  onClick?: () => void;
  style?: React.CSSProperties | undefined;
  width?: string;
  minWidth?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

function Button({
  text,
  type,
  onClick,
  style,
  width,
  minWidth,
  icon,
  disabled = false,
}: ButtonProps) {
  return (
    <CustomButton
      width={width}
      minwidth={minWidth}
      style={style}
      type={type}
      onClick={onClick}
      className={"btn-inside"}
      disabled={disabled}
    >
      <Container>
        {icon && <IconContainer>{icon}</IconContainer>}
        <TextContainer>{text}</TextContainer>
      </Container>
    </CustomButton>
  );
}

export default Button;
