import { cn } from "@/lib/utils";

type TitleProps = {
  title: string;
  firstLineColor: string;
  lastLineColor: string;
  className?: string;
};

export default function Title({
  title,
  firstLineColor,
  lastLineColor,
  className,
}: TitleProps) {
  return (
    <div className={className}>
      <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
      <div className={cn("w-full h-2 rounded-full", firstLineColor)} />
      <div
        className={cn("w-full h-2 rounded-full translate-x-2", lastLineColor)}
      />
    </div>
  );
}
