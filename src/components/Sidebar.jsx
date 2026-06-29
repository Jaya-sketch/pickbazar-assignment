const categories = [
  { name: "Fruits & Vegetables", icon: "🥦" },
  { name: "Meat & Fish", icon: "🍗" },
  { name: "Snacks", icon: "🍿" },
  { name: "Pet Care", icon: "🐾" },
  { name: "Home & Cleaning", icon: "🧹" },
  { name: "Dairy", icon: "🥛" },
  { name: "Cooking", icon: "🍳" },
  { name: "Breakfast", icon: "🥣" },
  { name: "Beverage", icon: "🍷" },
  { name: "Health & Beauty", icon: "💆" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r border-gray-100 py-6 px-4 hidden md:block">
      <ul className="space-y-1">
        {categories.map((cat) => (
          <li
            key={cat.name}
            className="flex items-center justify-between px-2 py-3 rounded-lg hover:bg-gray-50 cursor-pointer text-gray-700"
          >
            <span className="flex items-center gap-3">
              <span>{cat.icon}</span>
              <span className="text-sm font-medium">{cat.name}</span>
            </span>
            <span className="text-xs text-gray-400">▾</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}