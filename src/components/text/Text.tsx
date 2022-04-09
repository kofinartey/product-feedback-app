import React from "react";
import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

type TextProps = {
  children: React.ReactNode;
  textColor?:
    | "grey"
    | "blue"
    | "purple"
    | "danger"
    | "lightBlue"
    | "lightGrey"
    | "orange"
    | "default";
  as: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  // data-testid?:
} & React.ComponentProps<"p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

function Text({ children, textColor, as, ...rest }: TextProps) {
  const classes = makeStyles({
    text: {
      color: textColor && `${colors[textColor]}`,
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
