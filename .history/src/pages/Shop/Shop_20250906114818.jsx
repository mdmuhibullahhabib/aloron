import React, { useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import useShop from "../../hooks/useShop";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");

const [products,refetch] = useShop();
  // Filtered products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    
  );
};

export default Shop;
