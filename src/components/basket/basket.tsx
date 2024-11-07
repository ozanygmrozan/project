import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTimes } from "react-icons/fa";
import "./basket.css";

const Basket = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Ürün 1",
      image:
        "https://avatars.mds.yandex.net/i?id=c1d1741c6eec618503922a3d242e8214a89fd22f179d951a-5163390-images-thumbs&n=13",
      price: 100,
      quantity: 1,
    },
    {
      id: 2,
      name: "Ürün 2",
      image:
        "https://avatars.mds.yandex.net/i?id=3b95b4ffea0efe5269bc863addb4327729473244-5328246-images-thumbs&n=13",
      price: 150,
      quantity: 2,
    },
  ]);

  const [recommendedProducts] = useState([
    {
      id: 3,
      name: "Önerilen Ürün 1",
      image:
        "https://avatars.mds.yandex.net/i?id=3b95b4ffea0efe5269bc863addb4327729473244-5328246-images-thumbs&n=13",
      price: 120,
    },
    {
      id: 4,
      name: "Önerilen Ürün 2",
      image:
        "https://avatars.mds.yandex.net/i?id=3b95b4ffea0efe5269bc863addb4327729473244-5328246-images-thumbs&n=13",
      price: 80,
    },
  ]);

  const navigate = useNavigate();

  const handleRemove = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);

    toast.info("Ürün sepetten silindi!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemove(id);
    } else {
      setItems(
        items.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handlePurchase = () => {
    if (items.length === 0) {
      toast.error("Sepetinizde ürün bulunmamaktadır!", {
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

      localStorage.setItem("purchasedItems", JSON.stringify(items));
      setItems([]);

      setTimeout(() => {
        navigate("/buy");
      }, 3000);
    }
  };

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg select-none">
      <h1 className="text-2xl font-bold mb-4">Sepetim</h1>

      {items.length > 0 ? (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 border-b border-gray-200 dark:border-gray-700"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <div className="flex items-center">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="bg-gray-300 text-gray-800 px-2 py-1 rounded-l-lg"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value, 10)
                        )
                      }
                      className="w-12 text-center border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white no-arrows"
                    />
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="bg-gray-300 text-gray-800 px-2 py-1 rounded-r-lg"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {item.price.toFixed(2)} TL
                  </p>
                </div>
                <button onClick={() => handleRemove(item.id)}>
                  <FaTimes />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">
              Toplam Tutar: {totalPrice.toFixed(2)} TL
            </p>
            <button
              onClick={handlePurchase}
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Ödemeye Geç
            </button>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Önerilen Ürünler</h2>
            <div className="grid grid-cols-2 gap-4">
              {recommendedProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-32 object-cover rounded-lg mb-2"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {product.price.toFixed(2)} TL
                  </p>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-600 transition duration-300">
                    Sepete Ekle
                  </button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p className="text-center text-lg font-semibold text-gray-700 dark:text-gray-300">
          Sepetinizde ürün bulunmamaktadır.
        </p>
      )}

      <ToastContainer />
    </div>
  );
};

export default Basket;
