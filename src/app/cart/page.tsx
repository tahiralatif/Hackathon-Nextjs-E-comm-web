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

interface ProductData {
  color: string;
  isFavorite: boolean;
  quantity: number;
  name: string;
  size: string | number; // Allow size to be either string or number
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

  // Fetch cart items on component mount
  useEffect(() => setCartItems(getCartItems()), []);

  // Fetch wishlist items on component mount
  useEffect(() => setaddwishlist(getWishlistItems()), []);

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
        setCartItems(getCartItems()); // Update cart items state
        Swal.fire("Removed!", "The item has been removed from your cart.", "success");
      }
    });
  };

  // Handle quantity change for an item
  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity < 1) return; // Ensure quantity is at least 1
    updateCartQuantity(id, quantity); // Update quantity in cart storage
    setCartItems(getCartItems()); // Update cart items state
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

  // Calculate total price of all items in the cart
  const calculatedTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Handle proceeding to checkout
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
        window.location.href = "/checkout"; // Redirect to checkout page
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "You can continue shopping :)", "error");
      }
    });
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto mt-[76px] mb-[300px]">
      <div className="w-full h-full flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="flex-1">
          <h2 className="text-[#111111] font-medium text-[20px] mb-6">Bag</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center border-b pb-6 mb-6">
              <Image
                src={item.imageURL}
                alt={item.title}
                width={150}
                height={150}
                className="w-[150px] h-[150px] mr-6"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-normal text-[16px] text-grayscalesblack">{item.title}</p>
                  <p className="font-normal text-[16px] text-grayscalesblack">
                    MRP: ${item.price}
                  </p>
                </div>
                <p className="text-[15px] text-[#757575] font-normal">{item.description}</p>
                <div className="flex gap-x-6 my-4">
                  <div>
                    <label className="text-[#757575] text-[15px] font-normal">Size:</label>
                    <select
                      value={item.size}
                      onChange={(e) => handleSelectSize(item.id, e.target.value)}
                      className="ml-2 p-1 border rounded"
                    >
                      <option value="S">Small</option>
                      <option value="M">Medium</option>
                      <option value="L">Large</option>
                      <option value="XL">XL</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[#757575] text-[15px] font-normal">Quantity:</label>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                      className="w-16 ml-2 p-1 border rounded"
                      min="1"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-[#757575] text-[15px] font-normal">Color:</label>
                  {["red", "blue", "green", "yellow", "black", "white"].map((color) => (
                    <button
                      key={color}
                      onClick={() => handleColorChange(item.id, color)}
                      className={`w-6 h-6 rounded-full ${
                        item.color === color ? "border-2 border-black" : ""
                      }`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <button onClick={() => handleRemove(item.id)}>
                    <Image src={Delete} alt="Delete" width={24} height={24} />
                  </button>
                  <button onClick={() => setaddwishlist([...addwishlist, item])}>
                    <Image src={Heart} alt="Heart" width={24} height={24} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Section */}
        <div className="w-full lg:w-[390px]">
          <h2 className="font-medium text-[21px] mb-6">Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <p className="text-[15px] font-normal">Subtotal</p>
              <p className="text-[14px] font-medium text-grayscalesblack">${calculatedTotal()}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[15px] font-normal">Estimated Delivery & Handling</p>
              <p className="text-[14px] font-medium text-grayscalesblack">Free</p>
            </div>
            <div className="border-t border-b py-4">
              <div className="flex justify-between">
                <p className="font-medium">Total</p>
                <p className="font-medium">${calculatedTotal()}</p>
              </div>
            </div>
            <button
              onClick={handleProceedToCheckout}
              className="w-full bg-[#029FAE] hover:bg-[#57bbc4] text-white py-3 rounded-full"
            >
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}























    // <div className="w-full max-w-screen-xl mx-auto mt-[76px] mb-[300px]">
    //   <div className="w-full px-6 md:px-10 lg:px-20 mt-[151px]">
    //     <div className="flex flex-col lg:flex-row gap-8">
    //       <div className="flex-1">
    //         <h2 className="text-[#111111] font-medium text-[20px] mb-6">Your Cart</h2>
    //         {cartItem.length > 0 ? (
    //           cartItem.map((item) => (
    //             <div key={`${item.id}-${item.size}`} className="flex items-center gap-6 py-6 border-t">
    //               <Image
    //                 src={item.imagePath || img1}
    //                 alt={item.name}
    //                 className="w-[150px] h-[150px] object-cover"
    //                 width={150}
    //                 height={150}
    //               />
    //               <div className="flex-1">
    //                 <div className="flex justify-between mb-2">
    //                   <p className="text-[16px] font-normal">{item.name}</p>
    //                   <p className="text-[16px] font-normal">MRP: ${item.price.toFixed(2)}</p>
    //                 </div>
    //                 <p className="text-[15px] text-[#757575] font-normal mb-4">{item.description}</p>
    //                 <div className="flex gap-6 items-center mb-4">
    //                   <select
    //                     name="size"
    //                     value={item.size || ""}
    //                     className="border border-gray-300 rounded-md p-2 text-[#757575] text-[15px] font-normal"
    //                     disabled
    //                   >
    //                     <option value={item.size || ""}>{item.size || "No Size"}</option>
    //                   </select>
    //                   <div className="flex items-center gap-2">
    //                     <button
    //                       onClick={() => decrementQuantity(item.id, item.size ?? null)}
    //                       className="px-3 py-1 bg-gray-200 rounded-full"
    //                     >
    //                       -
    //                     </button>
    //                     <span className="text-[#757575] text-[15px] font-normal">
    //                       {item.quantity}
    //                     </span>
    //                     <button
    //                       onClick={() => incrementQuantity(item.id, item.size ?? null)}
    //                       className="px-3 py-1 bg-gray-200 rounded-full"
    //                     >
    //                       +
    //                     </button>
    //                   </div>
    //                 </div>
    //                 <div className="flex items-center gap-4">
    //                   <Image
    //                     src={Heart}
    //                     alt="Favorite"
    //                     className={`h-6 w-6 cursor-pointer ${item.isFavorite ? "text-red-500" : "text-gray-500"}`}
    //                     onClick={() => toggleFavorite(item.id)}
    //                   />
    //                   <Image
    //                     src={Delete}
    //                     alt="Delete"
    //                     className="h-6 w-6 cursor-pointer"
    //                     onClick={() => removeItem(item.id, item.size ?? null)}
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           ))
    //         ) : (
    //           <p className="text-[#757575] text-[16px]">Your cart is empty!</p>
    //         )}
    //       </div>

    //       <div className="w-full lg:w-[390px]">
    //         <h2 className="font-medium text-[21px] mb-6">Summary</h2>
    //         <div className="flex justify-between items-center py-4">
    //           <p className="text-[15px] font-normal">Subtotal</p>
    //           <p className="text-[14px] font-medium text-[#111111]">${calculateSubtotal()}</p>
    //         </div>
    //         <div className="flex justify-between items-center py-4">
    //           <p className="text-[15px] font-normal">Estimated Delivery</p>
    //           <p className="text-[14px] font-medium text-[#111111]">
    //             ${estimatedDelivery.toFixed(2)}
    //           </p>
    //         </div>
    //         <div className="flex justify-between items-center border-t-2 border-b-2 py-4">
    //           <p className="text-[15px] font-medium">Total</p>
    //           <p className="text-[15px] font-medium">
    //             ${(parseFloat(calculateSubtotal()) + estimatedDelivery).toFixed(2)}
    //           </p>
    //         </div>
    //         <button className="w-full bg-[#029FAE] hover:bg-[#57bbc4] text-white py-4 rounded-full mt-6">
    //           Member Checkout
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
 