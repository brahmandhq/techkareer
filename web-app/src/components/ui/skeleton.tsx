import { cn } from "@/lib/utils";
export const Skeleton = ({
  color,
  className,
}: {
  color?: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        
        "animate-pulse w-[200px] h-[20px] rounded-xl bg-gray-600",className,
      )}
    />
  );
};
