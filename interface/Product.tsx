export interface ProductCardProps {
    imageUrl: string;
    discount?: number;
    freeShipping?: boolean;
    gift?: boolean;
    flashSaleTime?: string;
    name: string;
    price: number;
    sold?: string;
    flashSaleImage?: string; 
}
export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    discount: number;
    rating: number;
    reviews: number;
  }
  