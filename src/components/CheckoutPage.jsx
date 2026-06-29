import { useLocation, Link } from "react-router-dom";

export default function CheckoutPage() {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  if (cartItems.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-6 text-center">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Your cart is empty</h2>
        <Link to="/" className="text-brand font-medium hover:underline">
          ← Back to shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <Link to="/" className="text-brand font-medium hover:underline inline-block mb-6">
        ← Back to shopping
      </Link>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">Checkout</h1>

      <div className="bg-white rounded-lg shadow-sm divide-y divide-gray-100">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-contain"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-400 text-sm">{item.weight}</p>
            </div>
            <div className="text-gray-600 text-sm">Qty: {item.quantity}</div>
            <div className="text-brand font-semibold w-20 text-right">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6 bg-white rounded-lg shadow-sm p-4">
        <span className="font-semibold text-gray-700">Total</span>
        <span className="text-xl font-bold text-brand">${totalPrice.toFixed(2)}</span>
      </div>

      <button className="w-full bg-brand text-white font-semibold py-3 rounded-full mt-6 hover:bg-brand-dark transition-colors">
        Place Order
      </button>
    </div>
  );
}