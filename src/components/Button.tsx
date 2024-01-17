import { ButtonHTMLAttributes } from "react";
import { styled } from "../styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "icon"
  children: React.ReactNode
};

export const Button = ({ variant, children, ...props }: ButtonProps) => {
  return (
    <Container variant={variant} {...props}>
      {children}
    </Container>
  );
};

const Container = styled("button", {
  fontFamily: "Roboto",
  border: "none",
  cursor: "pointer",
  borderRadius: "0.375rem",
  variants: {
    variant: {
      primary: {
        display: "flex",
        width: "8.25rem",
        padding: "0.75rem 0.5rem",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "$yellow",
        color: "$white",
        "&:hover": {
          backgroundColor: "$yellow-dark",
        },
      },
      secondary: {
        display: "inline-flex",
        padding: "0rem 0.5rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.25rem",
        background: "$base-button",
        color: "$base-text",
        "&:hover": {
          backgroundColor: "$base-hover",
          color: "$base-title"
        }
      },
      icon: {
        display: "inline-flex",
        padding: "0.5rem",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        background: "$purple-dark",
        "&:hover": {
          backgroundColor: "$purple",
        }
      }
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});
