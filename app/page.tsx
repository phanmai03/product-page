"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationPrevious, PaginationNext, PaginationEllipsis } from "@/components/ui/pagination";
interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  discount: number;
  rating: number;
  reviews: number;
}

const fetchProducts = async (page: number, limit: number) => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      const products = Array.from({ length: limit }, (_, i) => {
        const id = (page - 1) * limit + i + 1;
        const oldPrice = Math.floor(Math.random() * 1000000) + 50000;
        const discount = Math.floor(Math.random() * 30) + 10;
        const price = Math.floor(oldPrice * (1 - discount / 100));
        return {
          id,
          name: `Quần bò jean ống xuông ống rộng Hari đủ màu`,
          imageUrl: "/Image.png",
          price,
          discount,
          rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
          reviews: Math.floor(Math.random() * 100) + 10,
        };
      });
      resolve(products);
    }, 500);
  });
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const pageSize = 12;

  useEffect(() => {
    fetchProducts(page, pageSize).then((data) => setProducts(data));
  }, [page]);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);
    if (page > 3) pages.push("...");

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="p-4 border rounded-lg shadow bg-white flex flex-col">
            <div className="w-full">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-60 object-cover rounded"
              />
            </div>
            <div className="flex-1 flex flex-col justify-between mt-3">
              <p className="font-medium line-clamp-2 text-left">{product.name}</p>
              <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  if (i < Math.floor(product.rating)) {
                    return <Star key={i} fill="currentColor" stroke="currentColor" className="w-5 h-5" />;
                  } else if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                    return (
                      <div key={i} className="relative w-5 h-5">
                        <Star fill="none" stroke="currentColor" className="absolute w-5 h-5" />
                        <Star
                          fill="currentColor"
                          stroke="currentColor"
                          className="absolute w-5 h-5"
                          style={{ clipPath: "polygon(0 0, 50% 0, 50% 100%, 0 100%)" }}
                        />
                      </div>
                    );
                  } else {
                    return <Star key={i} fill="none" stroke="currentColor" className="w-5 h-5" />;
                  }
                })}
                <span className="text-black font-medium ml-1">{product.rating.toFixed(1)}</span>
                <span className="text-gray-500 text-xs">({product.reviews} Review)</span>
              </div>
              <div className="mt-2">
                <span className="text-red-500 font-bold text-lg">{product.price.toLocaleString()} đ</span>
                <span className="text-green-500 text-sm ml-1">({product.discount}% Off)</span>
              </div>
              <Button className="w-full mt-3 flex items-center justify-center gap-2 bg-black text-white">
                <ShoppingCart className="w-5 h-5" />
                Add To Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
      <Pagination className="mt-6 flex justify-center">
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious
        onClick={() => page > 1 && setPage(page - 1)}
        aria-disabled={page === 1}
        className={page === 1 ? "pointer-events-none opacity-50" : ""}
      />
    </PaginationItem>

    {getPageNumbers().map((pageNum, index) =>
      typeof pageNum === "number" ? (
        <PaginationItem key={index}>
          <PaginationLink onClick={() => setPage(pageNum)} isActive={pageNum === page}>
            {pageNum}
          </PaginationLink>
        </PaginationItem>
      ) : (
        <PaginationItem key={index}>
          <PaginationEllipsis />
        </PaginationItem>
      )
    )}

    <PaginationItem>
      <PaginationNext
        onClick={() => page < totalPages && setPage(page + 1)}
        aria-disabled={page === totalPages}
        className={page === totalPages ? "pointer-events-none opacity-50" : ""}
      />
    </PaginationItem>
  </PaginationContent>
</Pagination>

    </div>
  );
}