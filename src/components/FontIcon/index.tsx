import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import React from "react";

type Size = "is-small" | "is-medium" | "is-large";

interface Props {
  icon: IconDefinition;
  position?: "is-left" | "is-right";
  size?: Size;
  color?:
    | "has-text-white"
    | "has-text-black"
    | "has-text-light"
    | "has-text-dark"
    | "has-text-primary"
    | "has-text-info"
    | "has-text-link"
    | "has-text-success"
    | "has-text-warning"
    | "has-text-danger"
    | "has-text-black"
    | "has-text-black"
    | "has-text-grey"
    | "has-text-grey"
    | "has-text-grey"
    | "has-text-grey"
    | "has-text-grey"
    | "has-text-white"
    | "has-text-white";
}

const faSize = (size?: Size) => {
  if (!size) {
    return "sm";
  }
  switch (size) {
    case "is-small":
      return "xs";
    case "is-medium":
      return "lg";
    case "is-large":
      return "2x";
  }
};

const FontIcon: React.FC<Props> = ({ color, icon, position, size }) => (
  <span className={classNames("icon", size, position, color)}>
    <FontAwesomeIcon icon={icon} size={faSize(size)} fixedWidth />
  </span>
);

export default FontIcon;
