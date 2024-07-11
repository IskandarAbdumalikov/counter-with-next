"use client";
import { toggleHeart } from "@/lib/features/wishlist/wishlistSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const WishlistComponent = () => {
  let data = useSelector((state) => state.wishlist.value);
  let dispatch = useDispatch();
  console.log(data);

  return (
    <div>
      <div className="flex flex-wrap gap-[30px]">
        {data?.map((product) => (
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
            <button onClick={() => dispatch(toggleHeart(product))}>Dislike</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistComponent;
