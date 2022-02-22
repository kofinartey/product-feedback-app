import React from "react";
import { makeStyles } from "@mui/styles";

type TextProps = {
  children: React.ReactNode;
  color?: "primary" | "secondary" | "tertiary" | "danger";
  as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  // data-testid?:
} & React.ComponentProps<"p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

function Text({ children, color, as, ...rest }: TextProps) {
  const classes = makeStyles({
    text: {
      color:
        color === "primary"
          ? "#373F68" //grayish-blue
          : color === "secondary"
          ? "#4661E6" //blue
          : color === "tertiary"
          ? "#AD1FEA" //mauve
          : color === "danger"
          ? "#D73737" //red
          : as === "p"
          ? "#647196"
          : "#373F68", //grayish-blue
      fontSize: as === "p" ? "13px" : as === "h4" ? "1.125rem" : "",
    },
    "@media(min-width: 48rem)": {
      text: {
        fontSize: as === "p" ? "1rem" : as === "h4" ? "1.5rem" : "",
      },
    },
  })();

  const Component = as || "div";

  return (
    <Component className={classes.text} {...rest}>
      {children}
    </Component>
  );
}

export default Text;
