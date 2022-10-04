import classNames from "classnames";
import React, { forwardRef } from "react";
import { stringToIcon } from "../../../utils/stringToIcon";
import {
  button,
  buttonPrimary,
  buttonOutlined,
  buttonHolder,
  buttonSizeXl,
  buttonShadowed,
  buttonIconRight
} from "./Button.module.sass";

const Button = forwardRef(({ children, ...props }, ref) => {
  const { icon, type, size, shadowed, iconRight } = props;
  const buttonClasses = classNames(button, {
    [`${buttonPrimary}`]: type == "primary",
    [`${buttonOutlined}`]: type == "outlined",
    [`${buttonSizeXl}`]: size == "xl",
    [`${buttonShadowed}`]: shadowed,
    [`${buttonIconRight}`]: iconRight
  });
  const Icon = stringToIcon(icon);
  return (
    <button ref={ref} className={buttonClasses}>
      <div className={buttonHolder}>
        {icon && <span className="icon">{<Icon height={18} />}</span>}
        <span>{children}</span>
      </div>
    </button>
  );
});


export default Button;
