import React from "react";

import s from "./Icon.module.scss";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: IconVariant;
}
function Icon({ variant, ...props }: IconProps) {
  return (
    <div>
      <span className={`icon-${variant} ${s.icon}`} {...props}></span>
    </div>
  );
}

export default Icon;
