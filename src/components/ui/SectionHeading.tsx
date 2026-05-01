import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  center?: boolean;
  className?: string;
}

export function SectionHeading({
  tag,
  title,
  description,
  center = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", center && "text-center", className)}>
      {tag && (
        <p className="text-sm font-mono font-medium text-accent uppercase tracking-widest mb-3">
          {tag}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
