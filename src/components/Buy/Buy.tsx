import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productData from "../Data/products.json";
import { useCart } from "../../context/CartContext.tsx";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

const Buy: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, isInCart, clearCart } = useCart(); 
  const navigate = useNavigate();
  
  const [hasAddedToCart, setHasAddedToCart] = useState(false);

  const productId = id ? parseInt(id, 10) : null;

  const product = productId
    ? productData.find((p) => p.id === productId)
    : null;

  useEffect(() => {
    if (productId !== null) {
      const addedProducts = JSON.parse(localStorage.getItem("addedProducts") || "[]");
      setHasAddedToCart(addedProducts.includes(productId));
    }
  }, [productId]);

  const handlePurchase = () => {
    if (!product) return;

    if (isInCart(product.id) || hasAddedToCart) {
      toast.error("Ürün zaten sepete eklenmiş!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      addToCart(product);
      toast.success("Ürün sepete eklendi!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      const addedProducts = JSON.parse(localStorage.getItem("addedProducts") || "[]");
      addedProducts.push(productId);
      localStorage.setItem("addedProducts", JSON.stringify(addedProducts));

      setHasAddedToCart(true);
      clearCart();

      toast.success("Satın alma başarılı!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      setTimeout(() => {
        navigate("/cart");
      }, 3000);
    }
  };

  if (!product) {
    return <div>Ürün bulunamadı</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg flex">
      <div className="w-1/2 pr-4">
        <div className="overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover mb-4 rounded transition-transform duration-500 ease-in-out transform hover:scale-125"
          />
        </div>
      </div>
      <div className="w-1/2 pl-4 flex flex-col justify-center">
        <h1 className="text-3xl font-bold mb-6 text-black dark:text-white">
          {product.name}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {product.description}
        </p>
        <button
          onClick={handlePurchase}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Sepete Ekle 
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Buy;
