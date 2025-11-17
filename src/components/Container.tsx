import type { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={`mx-3 max-w-[1050px] xl:mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
