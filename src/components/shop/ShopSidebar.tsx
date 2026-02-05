type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

const ShopSidebar = ({ categories, selected, onSelect }: Props) => {
  return (
    <div className="w-48 hidden md:flex flex-col gap-4 sticky top-24">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`text-left px-4 py-2 rounded-lg font-medium transition ${
            selected === cat
              ? "bg-amber-700 dark:bg-amber-600 text-white"
              : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
          }`}
        >
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ShopSidebar;
