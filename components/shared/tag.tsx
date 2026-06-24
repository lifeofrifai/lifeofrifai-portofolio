interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export function Tag({ children, variant = "default" }: TagProps) {
  return (
    <span
      className={`inline-flex items-center text-xs font-mono px-2 py-0.5 rounded border ${
        variant === "accent"
          ? "text-[#7C3AED] bg-[#7C3AED]/10 border-[#7C3AED]/20"
          : "text-[#A1A1AA]/70 bg-[#161616] border-[#1F1F1F]"
      }`}
    >
      {children}
    </span>
  );
}
