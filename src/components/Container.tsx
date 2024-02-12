import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface IConatainerProps {
  children: ReactNode;
  className?: string;
}
const Container = ({ children, className }: IConatainerProps) => {
  return (
    <div className={cn("w-full max-w-[1290px] mx-auto px-[20px]", className)}>
      {children}
    </div>
  );
};

export default Container;
