export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'men' | 'women' | 'accessories';
  image: string;
  rating: number;
  reviews: number;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 49.99,
    category: "men",
    image: "https://images.unsplash.com/photo-1595183948036-e0de97d1c94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY2NDQ3MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 128,
    description: "Premium quality cotton t-shirt with a modern fit. Perfect for casual wear and everyday comfort.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Navy", "Gray"],
    isSale: true
  },
  {
    id: 2,
    name: "Elegant Summer Dress",
    price: 89.99,
    category: "women",
    image: "https://images.unsplash.com/photo-1620777888789-0ee95b57a277?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBjbG90aGluZ3xlbnwxfHx8fDE3NjY0NDQzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 95,
    description: "Flowing summer dress with elegant silhouette. Perfect for warm days and special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Beige", "Pink", "Blue"],
    isNew: true
  },
  {
    id: 3,
    name: "Designer Handbag",
    price: 159.99,
    originalPrice: 199.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY2NDMxOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    reviews: 203,
    description: "Luxury designer handbag with premium leather finish. Spacious and stylish for everyday use.",
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan"],
    isSale: true
  },
  {
    id: 4,
    name: "Classic Denim Jacket",
    price: 79.99,
    category: "women",
    image: "https://images.unsplash.com/photo-1763824969015-e5d1d6755782?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGZhc2hpb24lMjBib3V0aXF1ZXxlbnwxfHx8fDE3NjY1MzMyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    reviews: 156,
    description: "Timeless denim jacket with modern cut. A wardrobe essential for layering.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    isNew: true
  },
  {
    id: 5,
    name: "Streetwear Hoodie",
    price: 59.99,
    originalPrice: 89.99,
    category: "men",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NjY0MjU4NTV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    reviews: 89,
    description: "Premium streetwear hoodie with oversized fit. Soft fleece interior for maximum comfort.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Olive", "White"],
    isSale: true
  },
  {
    id: 6,
    name: "Stylish Sunglasses",
    price: 49.99,
    category: "accessories",
    image: "https://images.unsplash.com/photo-1569388330292-79cc1ec67270?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY2NDMxOTk4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.4,
    reviews: 67,
    description: "UV protection sunglasses with premium frames. Perfect for sunny days with style.",
    sizes: ["One Size"],
    colors: ["Black", "Tortoise", "Gold"],
    isNew: true
  },
  {
    id: 7,
    name: "Casual Chino Pants",
    price: 69.99,
    category: "men",
    image: "https://images.unsplash.com/photo-1595183948036-e0de97d1c94f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW4lMjBmYXNoaW9uJTIwY2xvdGhpbmd8ZW58MXx8fHwxNzY2NDQ3MDE4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    reviews: 142,
    description: "Comfortable chino pants with slim fit. Versatile for both casual and semi-formal occasions.",
    sizes: ["28", "30", "32", "34", "36", "38"],
    colors: ["Khaki", "Navy", "Black", "Olive"],
  },
  {
    id: 8,
    name: "Knit Sweater",
    price: 79.99,
    originalPrice: 119.99,
    category: "women",
    image: "https://images.unsplash.com/photo-1587047744199-afd4d2e3bbc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG90aGluZyUyMGFwcGFyZWwlMjBzaG9wfGVufDF8fHx8MTc2NjUzMzI0OHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    reviews: 121,
    description: "Cozy knit sweater with soft wool blend. Perfect for layering during cooler months.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Cream", "Gray", "Navy", "Burgundy"],
    isSale: true
  }
];
