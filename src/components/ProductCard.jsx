import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, increaseQuantity, decreaseQuantity, getQuantity } = useCart();
  const quantity = getQuantity(product.id);

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 flex flex-col relative">
      {/* Discount badge */}
      {product.discount && (
        <span className="absolute top-3 right-3 bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded-full">
          {product.discount}
        </span>
      )}

      {/* Product image */}
      <div className="h-40 flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* Name + weight */}
      <h3 className="font-semibold text-gray-800">{product.name}</h3>
      <p className="text-gray-400 text-sm mb-3">{product.weight}</p>

      {/* Price row + Cart button / Stepper */}
      <div className="flex items-center justify-between mt-auto">
        <div>
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through mr-2">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
          <span className="text-brand font-semibold">
            ${product.price.toFixed(2)}
          </span>
        </div>

        {quantity === 0 ? (
          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-1 border border-gray-200 rounded-full px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-brand hover:text-white hover:border-brand transition-colors"
          >
            🛒 Cart
          </button>
        ) : (
          <div className="flex items-center bg-brand text-white rounded-full overflow-hidden">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="px-3 py-1.5 hover:bg-brand-dark transition-colors"
            >
              −
            </button>
            <span className="px-2 font-medium">{quantity}</span>
            <button
              onClick={() => increaseQuantity(product.id)}
              className="px-3 py-1.5 hover:bg-brand-dark transition-colors"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}