import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import ProductCard from "../components/layout/ProductCard";
import CategoryChip from "../components/layout/CategoryChip";

const CATEGORIES = ["All", "Fresh", "Pantry", "Dairy", "Beverages"];

const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "Organic Avocados",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9"
  },
  {
    id: "2",
    name: "Fresh Bread Loaf",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff"
  },
  {
    id: "3",
    name: "Organic Milk",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150"
  },
  {
    id: "4",
    name: "Farm Fresh Eggs",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1518569656558-1f25e69d93d7"
  }
];

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-6">Fresh Picks</h1>
          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <CategoryChip
                key={category}
                name={category}
                active={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </header>

        <section>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;