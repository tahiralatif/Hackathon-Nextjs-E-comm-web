
interface ProductData {
    color: string;
    isFavorite: boolean;
    quantity:number;
    name: string;
    size: string;
    imagePath: string;
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

  export const addToCart = (product: ProductData) => {
    const Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
  
    const existingProductIndex = Cart.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex > -1) {
      Cart[existingProductIndex].quantity += 1; // Increment quantity
    } else {
      Cart.push({ ...product, quantity: 1 }); // Add product with quantity 1
    }
  
    localStorage.setItem("cart", JSON.stringify(Cart));
  };
  
  export const removeFromCart = (productId: number ) => {
    let Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
    Cart = Cart.filter((item) => item.id !== productId);
  
    localStorage.setItem("cart", JSON.stringify(Cart));
  };
  
  export const updateCartQuantity = (productId: number, quantity: number) => {
    const Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = Cart.findIndex((item) => item.id === productId);
  
    if (productIndex > -1) {
      Cart[productIndex].quantity = quantity; // Update quantity
    }
  
    localStorage.setItem("cart", JSON.stringify(Cart));
  };

  export const SelectSize = (productId: number, size: string) => {
    const Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = Cart.findIndex((item) => item.id === productId);

    if (productIndex > -1) {
      Cart[productIndex].size = size; // Update size
    }

    localStorage.setItem("cart", JSON.stringify(Cart));
  }

  export const SelectColor = (productId: number, color: string) => {
    const Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
    const productIndex = Cart.findIndex((item) => item.id === productId);

    if (productIndex > -1) {
      Cart[productIndex].color = color; // Update color
    }
  }
  
  export const getCartItems = (): ProductData[] => {
    return JSON.parse(localStorage.getItem("cart") || "[]");
  };

  export const AddtoWishlist = (product: ProductData) => {
    const Wishlist: ProductData[] = JSON.parse(localStorage.getItem("wishlist") || "[]");
  
    const existingProductIndex = Wishlist.findIndex((item) => item.id === product.id);
  
    if (existingProductIndex === -1) {
      Wishlist.push({ ...product, isFavorite: true }); // Add product with isFavorite true
    }
  
    localStorage.setItem("wishlist", JSON.stringify(Wishlist));
  }
  
  export const getWishlistItems = (): ProductData[] => {
    return JSON.parse(localStorage.getItem("wishlist") || "[]");
  };






  









//   export const addToCart = (product: ProductData) => {
//     const Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
  
//     const existingProductIndex = Cart.findIndex((item) => item.id === product.id);
  
//     if (existingProductIndex > -1) {
//       Cart[existingProductIndex].quantity += 1; // Increment quantity
//     } else {
//       Cart.push({ ...product, quantity: 1 }); // Add product with quantity 1
//     }
  
//     localStorage.setItem("cart", JSON.stringify(Cart));
//   };
  
//   export const removeFromCart = (productId: string) => {
//     let Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
//     Cart = Cart.filter((item) => item.id !== Number(productId));
  
//     localStorage.setItem("cart", JSON.stringify(Cart));
//   };
  
//   export const updateCartQuantity = (productId: string, quantity: number) => {
//     const Cart: ProductData[] = JSON.parse(localStorage.getItem("cart") || "[]");
//     const productIndex = Cart.findIndex((item) => item.id === Number(productId));
  
//     if (productIndex > -1) {
//       Cart[productIndex].quantity = quantity; // Update quantity
//     }
  
//     localStorage.setItem("cart", JSON.stringify(Cart));
//   };
  
//   export const getCartItems = (): ProductData[] => {
//     return JSON.parse(localStorage.getItem("cart") || "[]");
//   };
  

