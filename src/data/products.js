// Mock product data - simulates an API response
const products = [
  {
    id: 1,
    name: "Apples",
    weight: "1lb",
    price: 1.60,
    oldPrice: 2.00,
    discount: null,
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "Baby Spinach",
    weight: "2lb",
    price: 0.60,
    oldPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Blueberries",
    weight: "1lb",
    price: 3.00,
    oldPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Brussels Sprout",
    weight: "1lb",
    price: 3.00,
    oldPrice: 5.00,
    discount: null,
    image: "https://images.unsplash.com/photo-1438118907704-7718ee9a191a?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Celery Sticks",
    weight: "1lb",
    price: 1.20,
    oldPrice: 1.50,
    discount: "17%",
    image: "https://images.unsplash.com/photo-1581621429789-50fa97e6c46f?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Oranges",
    weight: "2lb",
    price: 2.50,
    oldPrice: 3.00,
    discount: "17%",
    image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=400&h=400&fit=crop",
  },
  {
    id: 7,
    name: "Sweet Corn",
    weight: "1lb",
    price: 2.00,
    oldPrice: 2.50,
    discount: "20%",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400&h=400&fit=crop",
  },
  {
    id: 8,
    name: "Green Peas",
    weight: "1lb",
    price: 1.80,
    oldPrice: null,
    discount: null,
    image: "https://images.unsplash.com/photo-1587735243615-7af2c5648afb?w=400&h=400&fit=crop",
  },
];

// Simulates fetching from an API with a small delay
export function fetchProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
}

export default products;