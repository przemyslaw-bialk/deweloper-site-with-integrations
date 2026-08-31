import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="rounded-lg border border-border px-5 py-2 text-sm font-medium text-foreground transition hover:bg-secondary cursor-pointer"
    >
      {children}
    </button>
  );
};

export default Button;
