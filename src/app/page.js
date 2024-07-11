import Header from "@/components/header/Header";
import ProductWrapper from "@/components/product-wrapper/ProductWrapper";
import { useGetProductsQuery } from "@/lib/api/productApi";
import Link from "next/link";

export default function Home() {

  return (
    <main className="container">
      <Header/>
      <ProductWrapper/>
      <Link href={'/wishlist'}>
       Wishlist 
      </Link>

    </main>
  );
}
