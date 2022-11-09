import React from "react";
import { joinClassNames } from "@yakad/lib";
import styles from "./button.module.css";
import SvgIcon from "../svgIcon/svgIcon";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "text" | "outlined" | "filled" | "tonal" | "elevated" | "link";
  size?: "small" | "medium" | "large";
  borderStyle?: "none" | "semi" | "rounded";
  icon?: JSX.Element;
}

interface svgSizeMap {
  small: number;
  medium: number;
  large: number;
}

const svgSizeMaps: svgSizeMap = {
  small: 2,
  medium: 2.4,
  large: 3,
};

function Button(props: ButtonProps) {
  const joinedClassNames = joinClassNames(
    styles.button,
    props.variant ? styles[props.variant] : styles.text,
    props.size ? styles[props.size] : styles.medium,
    props.borderStyle ? styles[props.borderStyle] : styles.rounded,
    props.icon && !props.children ? styles.iconButton : "",
    props.className!
  );

  return (
    <button {...props} className={joinedClassNames}>
      {props.icon ? (
        <SvgIcon
          size={props.size ? svgSizeMaps[props.size] : svgSizeMaps.medium}
        >
          {props.icon}
        </SvgIcon>
      ) : null}
      {props.children}
    </button>
  );
}

export default Button;
