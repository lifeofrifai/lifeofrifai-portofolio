interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      {eyebrow && (
        <p className="text-xs text-[#A1A1AA] font-mono uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl md:text-4xl font-semibold text-[#FAFAFA] tracking-tight mb-3">
        {title}
      </h1>
      {description && (
        <p className="text-[#A1A1AA] text-lg max-w-xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
