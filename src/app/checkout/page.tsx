"use client";

import React, { useEffect, useState } from "react";
import { getCartItems } from "../actions/action";
import Link from "next/link";
import Image from "next/image";
import { CgChevronRight } from "react-icons/cg";
import { client } from "@/sanity/lib/client";
import Swal from "sweetalert2";

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

const Checkoutpage = () => {
  const [cartitems, setcartitems] = useState<ProductData[]>([]);
  const [discount, setdiscount] = useState<number>(0);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
    payment: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    address: false,
    city: false,
    state: false,
    zip: false,
    country: false,
    phone: false,
    payment: false,
  });

  useEffect(() => {
    setcartitems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setdiscount(Number(appliedDiscount));
    }
  }, []);

  const Subtotal = cartitems.reduce(
    (total, item) => total + item.price * item.inventory,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const ValidateForm = () => {
    const errors = {
      firstName: !formValues.firstName,
      lastName: !formValues.lastName,
      email: !formValues.email,
      address: !formValues.address,
      city: !formValues.city,
      state: !formValues.state,
      zip: !formValues.zip,
      country: !formValues.country,
      phone: !formValues.phone,
      payment: !formValues.payment,
    };
    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

  const handePlaceorder = async () => {
    Swal.fire({
      title: "Place Order",
      text: "Are you sure you want to place the order?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",

    }).then((result) => {
      if (result.isConfirmed) {
        if (ValidateForm()) {
          localStorage.removeItem("appliedDiscount");
          Swal.fire("Order Placed", "Your order has been placed successfully", "success");
        } else {
          Swal.fire("Error", "Please fill all the fields", "error");
        }
      }
    });


    const total = Subtotal - discount;

    const orderData = {
      _type: "order",
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      address: formValues.address,
      city: formValues.city,
      state: formValues.state,
      zip: formValues.zip,
      country: formValues.country,
      phone: formValues.phone,
      payment: formValues.payment,
      cartitems: cartitems.map((item) => ({
        _type: "reference",
        _ref: item.id,
      })),
      total: total,
      discount: discount,
      orderDate: new Date().toISOString(),
    };

    try {
      await client.create(orderData);
      localStorage.removeItem("appliedDiscount");
    } catch (error) {
      console.error("Failed to create order", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href={"/cart"} className="hover:text-gray-900">Cart</Link>
          <CgChevronRight className="text-gray-400" />
          <span className="text-gray-900">CheckOut</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Summary</h2>
            {cartitems.length > 0 ? (
              cartitems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 mb-4">
                  <div className="w-20 h-20 relative">
                    {item.imageURL && (
                      <Image
                        src={item.imageURL}
                        alt={item.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.inventory}</p>
                    <p className="text-sm text-gray-600">${item.price * item.inventory}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No items in cart</p>
            )}
            <div className="mt-6">
              <h3 className="text-lg font-medium">Subtotal: ${Subtotal}</h3>
              <h3 className="text-lg font-medium">Discount: ${discount}</h3>
              <h3 className="text-lg font-medium">Total: ${(Subtotal - discount).toFixed(2)}</h3>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">Billing Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  id="firstName"
                  value={formValues.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.firstName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.firstName && (
                  <p className="mt-2 text-sm text-red-600">First Name is required</p>
                )}
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  id="lastName"
                  value={formValues.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.lastName ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.lastName && (
                  <p className="mt-2 text-sm text-red-600">Last Name is required</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  type="number"
                  placeholder="Phone"
                  id="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.phone ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.phone && (
                  <p className="mt-2 text-sm text-red-600">Phone is required</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.email && (
                  <p className="mt-2 text-sm text-red-600">Email is required</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <input
                  type="text"
                  id="address"
                  value={formValues.address}
                  onChange={handleInputChange}
                  placeholder="Address"
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.address ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.address && (
                  <p className="mt-2 text-sm text-red-600">Address is required</p>
                )}
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  id="city"
                  value={formValues.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.city ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.city && (
                  <p className="mt-2 text-sm text-red-600">City is required</p>
                )}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  id="state"
                  value={formValues.state}
                  onChange={handleInputChange}
                  placeholder="State"
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.state ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.state && (
                  <p className="mt-2 text-sm text-red-600">State is required</p>
                )}
              </div>

              <div>
                <label htmlFor="zip" className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                  type="number"
                  id="zip"
                  value={formValues.zip}
                  onChange={handleInputChange}
                  placeholder="Zip Code"
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.zip ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.zip && (
                  <p className="mt-2 text-sm text-red-600">Zip Code is required</p>
                )}
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  id="country"
                  value={formValues.country}
                  onChange={handleInputChange}
                  placeholder="Country"
                  className={`mt-1 block w-full px-3 py-2 border ${formErrors.country ? "border-red-500" : "border-gray-300"} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                />
                {formErrors.country && (
                  <p className="mt-2 text-sm text-red-600">Country is required</p>
                )}
              </div>

              <div>
                <label htmlFor="payment" className="block text-sm font-medium text-gray-700">Payment Method</label>
                <select
                  id="payment"
                  value={formValues.payment}
                  onChange={(e) => setFormValues({ ...formValues, payment: e.target.value })}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="credit">Credit</option>
                  <option value="debit">Debit</option>
                  <option value="paypal">Paypal</option>
                </select>
                {formErrors.payment && (
                  <p className="mt-2 text-sm text-red-600">Payment method is required</p>
                )}
              </div>

              <button
                onClick={handePlaceorder}
                className="w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutpage;