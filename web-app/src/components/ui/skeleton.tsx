import { cn } from "@/lib/utils"
export const Skeleton = ({
  color,
  className,
}: {
  color?: string
  className?: string
}) => {
  return (
    <div
      className={cn(
        "h-[20px] w-[200px] animate-pulse rounded-xl bg-gray-600",
        className,
      )}
    />
  )
}
