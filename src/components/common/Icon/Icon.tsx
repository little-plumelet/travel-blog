import React from "react";

interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant: IconVariant;
  className?: string;
}
function Icon({ variant, className = undefined, ...props }: IconProps) {
  return (
    <div>
      <span className={`icon-${variant} ${className}`} {...props} />
    </div>
  );
}

export default Icon;
