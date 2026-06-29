export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 flex items-center justify-between px-6 py-4 sticky top-0 z-20">
      <div className="flex items-center gap-2">
        <span className="text-brand text-2xl">🌿</span>
        <span className="font-bold text-lg text-gray-800">PickBazar</span>
      </div>

      <div className="hidden md:flex items-center gap-1 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 cursor-pointer">
        <span>🍎</span> Grocery <span className="text-xs">▾</span>
      </div>

      <nav className="hidden lg:flex items-center gap-8 text-gray-600 font-medium">
        <a href="#" className="hover:text-brand">Shops</a>
        <a href="#" className="hover:text-brand">Offers</a>
        <a href="#" className="hover:text-brand">Contact</a>
        <a href="#" className="hover:text-brand flex items-center gap-1">
          Pages <span className="text-xs">▾</span>
        </a>
      </nav>

      <div className="flex items-center gap-4">
        <button className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 hover:bg-gray-50">
          🔍
        </button>
        <button className="bg-brand text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-dark transition-colors">
          Join
        </button>
        <button className="bg-brand text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-brand-dark transition-colors hidden sm:block">
          Become a Seller
        </button>
      </div>
    </header>
  );
}