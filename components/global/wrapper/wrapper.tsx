import { cn } from "@/lib/utils";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-full py-4 px-2", className)}>{children}</div>;
};

export default Wrapper;
