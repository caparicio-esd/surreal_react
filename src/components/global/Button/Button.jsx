import classNames from "classnames";
import React from "react";
import { stringToIcon } from "../../../utils/stringToIcon";
import {
  button,
  buttonPrimary,
  buttonOutlined,
  buttonHolder,
} from "./Button.module.sass";

const Button = ({ children, ...props }) => {
  const { icon, type } = props;
  const buttonClasses = classNames(button, {
    [`${buttonPrimary}`]: type == "primary",
    [`${buttonOutlined}`]: type == "outlined",
  });
  const Icon = stringToIcon(icon);
  return (
    <button className={buttonClasses}>
      <div className={buttonHolder}>
        {icon && <span className="icon">{<Icon height={20} />}</span>}
        <span>{children}</span>
      </div>
    </button>
  );
};

export default Button;
