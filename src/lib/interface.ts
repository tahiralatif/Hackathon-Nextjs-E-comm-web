// Define the interface for the Product
export interface Product {
    title: string;
    description: string;
    imageURL: string;
    currentSlug(currentSlug: string): unknown;
    _id: string;              
    img: string;              
    label: string;            
    price: string;            
    name: string;            
    labelColor: string;       }
  