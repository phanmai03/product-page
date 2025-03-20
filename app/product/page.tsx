import ProductCard from "@/components/ProductCard";

const products = [
  {
    imageUrl: "/Image.png",
    discount: 50,
    freeShipping: true,
    gift: true,
    flashSaleImage: "/red 1.png", // Đổi từ flaseSale thành flashSale
    flashSaleTime: "•20:20•12/12",
    name: "Nước giặt cho da nhạy cảm - Econova Bucato W...",
    price: 300000,
    sold: "28,4k",
  },
  {
    imageUrl: "/Image.png",
    discount: 30,
    freeShipping: false,
    gift: false,
    flashSaleImage: "/red 1.png", // Đổi từ flaseSale thành flashSale
    flashSaleTime: "21:00 • 15/12",
    name: "Bộ nồi đa năng cao cấp - Inochi Yoko",
    price: 450000,
    sold: "12,7k",
  },
  {
    imageUrl: "/Image.png",
    freeShipping: true,
    name: "Bình giữ nhiệt cao cấp - Inochi Thermo",
    price: 250000,
    sold: "8,2k",
  },
];


export default function Home() {
  return (
    <div className="flex justify-center flex-wrap gap-5 p-5">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
