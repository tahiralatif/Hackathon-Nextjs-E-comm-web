"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
  getWishlistItems,
} from "../actions/action";
import Heart from "../../../public/heart.svg";
import Delete from "../../../public/delete.svg";
import { useRouter } from "next/navigation";

interface ProductData {
  color: string;
  isFavorite: boolean;
  quantity: number;
  name: string;
  size: string | number;
  id: number;
  slug: string;
  title: string;
  price: number;
  priceWithoutDiscount: number;
  badge: string;
  imageURL: string;
  category: string;
  description: string;
  inventory: number;
  tags: string[];
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<ProductData[]>([]);
  const [addwishlist, setaddwishlist] = useState<ProductData[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Fetch cart items on component mount
  useEffect(() => {
    const items = getCartItems();
    setCartItems(items);
    updateTotal(items); // Calculate initial total
  }, []);

  // Fetch wishlist items on component mount
  useEffect(() => {
    const items = getWishlistItems();
    setaddwishlist(items);
  }, []);

  // Update total whenever cartItems change
  useEffect(() => {
    updateTotal(cartItems);
  }, [cartItems]);

  // Function to calculate and update the total
  const updateTotal = (items: ProductData[]) => {
    const newTotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(newTotal);
  };

  // Handle removing an item from the cart
  const handleRemove = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to remove this item from the cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id); // Remove item from cart storage
        const updatedCart = getCartItems(); // Get updated cart items
        setCartItems(updatedCart); // Update cart items state
        Swal.fire("Removed!", "The item has been removed from your cart.", "success");
      }
    });
  };

  // Handle quantity change for an item
  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    updateCartQuantity(id, quantity); // Update quantity in cart storage
    const updatedCart = getCartItems(); // Get updated cart items
    setCartItems(updatedCart); // Update cart items state
  };

  // Handle size selection for an item
  const handleSelectSize = (id: number, size: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, size } : item
    );
    setCartItems(updatedCart);
  };

  // Handle color selection for an item
  const handleColorChange = (id: number, color: string) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, color } : item
    );
    setCartItems(updatedCart);
  };

  // Handle proceeding to checkout
  const router = useRouter();
  const handleProceedToCheckout = () => {
    Swal.fire({
      title: "Proceed to Checkout",
      text: "Are you sure you want to proceed to checkout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, proceed!",
      cancelButtonText: "No, cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Proceeding!", "You are being redirected to the checkout page.", "success");
        setCartItems([]); // Clear cart items state
        router.push("/checkout"); // Redirect to checkout page
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "You can continue shopping :)", "error");
      }
    });
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-[76px] mb-[300px] px-4">
      <div className="w-full h-full flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="flex-1">
          <h2 className="text-[#111111] font-semibold text-[28px] mb-8">Your Shopping Bag</h2>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b pb-6 mb-6 gap-6 hover:bg-gray-50 transition-all duration-300 p-4 rounded-lg"
            >
              {item.imageURL && (
                <Image
                  src={item.imageURL}
                  alt={item.title}
                  objectFit="cover"
                  className="rounded-lg shadow-md"
                  height={150}
                  width={150}
                />
              )}

              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-semibold text-[18px] text-gray-900">{item.title}</p>
                  <p className="font-semibold text-[18px] text-gray-900">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <p className="text-[15px] text-gray-600 font-normal mt-2">{item.description}</p>
                <div className="flex gap-x-6 my-4">
                  <div>
                    <label className="text-gray-600 text-[15px] font-medium">Size:</label>
                    <select
                      value={item.size}
                      onChange={(e) => handleSelectSize(item.id, e.target.value)}
                      className="ml-2 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                    >
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-600 text-[15px] font-medium">Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      className="w-16 ml-2 p-1 border rounded focus:outline-none focus:ring-2 focus:ring-[#029FAE]"
                      min="1"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-gray-600 text-[15px] font-medium">Color:</label>
                  {["red", "blue", "green", "yellow", "black", "white"].map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(item.id, color)}
                      className={`w-6 h-6 rounded-full transition-all duration-200 ${
                        item.color === color ? "border-2 border-black" : "hover:border-2 hover:border-gray-300"
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                  >
                    <Image src={Delete} alt="Delete" width={24} height={24} />
                  </button>
                  <button
                    onClick={() => setaddwishlist([...addwishlist, item])}
                    className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200"
                  >
                    <Image src={Heart} alt="Heart" width={24} height={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-[390px]">
          <h2 className="font-semibold text-[28px] mb-8">Order Summary</h2>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between">
              <p className="text-[15px] font-medium text-gray-600">Subtotal</p>
              <p className="text-[16px] font-semibold text-gray-900">${total.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[15px] font-medium text-gray-600">Delivery & Handling</p>
              <p className="text-[16px] font-semibold text-gray-900">Free</p>
            </div>
            <div className="border-t border-b py-4">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-900">Total</p>
                <p className="font-semibold text-gray-900">${total.toFixed(2)}</p>
              </div>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="w-full bg-gradient-to-r from-[#029FAE] to-[#57bbc4] hover:from-[#57bbc4] hover:to-[#029FAE] text-white py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}