import * as React from "react";
const url = "/static/sprite.svg";

interface Props {
  icon: string;
  width: number;
  height: number;
  className: string;
}

const Icon = (props: Props) => (
  <svg
    viewBox="0 0 16 16"
    width={props.width}
    height={props.height}
    className={`icon icon-${props.icon} ${props.className}`}
  >
    <use xlinkHref={`${url}#icon-${props.icon}`} />
  </svg>
);

export default Icon;
