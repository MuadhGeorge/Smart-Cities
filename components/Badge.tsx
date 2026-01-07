interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "gold" | "default";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variantClasses = {
    navy: "badge-navy",
    gold: "badge-gold",
    default: "bg-gray-200 text-gray-700"
  };

  return (
    <span className={`badge ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

