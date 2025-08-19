interface CategoryCardProps {
  name: string;
  color: string;
  size: "small" | "medium" | "large";
}

export default function CategoryCard({ name, color, size }: CategoryCardProps) {
  const sizeClasses = {
    small: "h-20",
    medium: "h-24",
    large: "h-32",
  };

  return (
    <div
      className={`${color} ${sizeClasses[size]} rounded-md text-white cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center overflow-hidden`}
    >
      <img
        src={name}
        alt="gifs"
        className="object-cover max-w-full "
      />
    </div>
  );
}
