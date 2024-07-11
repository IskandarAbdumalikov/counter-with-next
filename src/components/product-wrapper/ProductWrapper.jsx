"use client";
import { useGetProductsQuery } from "@/lib/api/productApi";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

const ProductWrapper = () => {
  let dispatch = useDispatch();
  let { data, isLoading } = useGetProductsQuery({ limit: 5 });

  return (
    <div className="flex flex-wrap gap-[30px]">
      {data?.products?.map((product) => (
        <div
          className="flex column gap-[20px] min-h-[300px] min-w-[400px] "
          key={product.id}
        >
          <Link className="w-full h-1/2" href={"/"}>
            <Image
              className="w-full h-full object-contain"
              width={50}
              height={50}
              src={product.thumbnail}
              alt={product.title}
            />
          </Link>
          <h3>{product.title}</h3>
          <button onClick={() => dispatch(toggleHeart(product))}>like</button>
        </div>
      ))}
    </div>
  );
};

export default ProductWrapper;
