interface CategoryChipProps {
  name: string;
  active?: boolean;
  onClick?: () => void;
}

const CategoryChip = ({ name, active = false, onClick }: CategoryChipProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm transition-colors ${
        active
          ? "bg-primary text-white"
          : "bg-secondary text-primary hover:bg-accent"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryChip;