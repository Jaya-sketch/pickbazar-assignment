import Header from "./Header";
import Sidebar from "./Sidebar";
import ProductGrid from "./ProductGrid";
import CartPopup from "./CartPopup";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <ProductGrid />
      </div>
      <CartPopup />
    </div>
  );
}