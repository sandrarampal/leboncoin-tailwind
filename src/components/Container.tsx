import type { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return <div className={`mx-auto max-w-[455px] ${className}`}>{children}</div>;
};

export default Container;
