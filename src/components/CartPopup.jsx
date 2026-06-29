import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function CartPopup() {
  const { totalItems, totalPrice, cartItems } = useCart();
  const navigate = useNavigate();

  if (totalItems === 0) return null;

  function handleCheckout() {
    // Pass selected product details to the checkout page via navigation state
    navigate("/checkout", { state: { cartItems, totalPrice } });
  }

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center bg-brand text-white rounded-full shadow-lg overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3">
        <span>🛍️</span>
        <span className="font-medium text-sm">{totalItems} Item{totalItems > 1 ? "s" : ""}</span>
      </div>
      <button
        onClick={handleCheckout}
        className="bg-white text-brand font-semibold px-4 py-3 text-sm hover:bg-gray-50 transition-colors"
      >
        ${totalPrice.toFixed(2)}
      </button>
    </div>
  );
}