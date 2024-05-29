"use client";
import { useEffect, useState } from "react";
import Images from "../json/imagesProducts.json";
import Products from "../components/Products";

const Home = () => {
  const [images, setimages] = useState(Images);
  return (
    <main className="bg-white relative">
      <section
        className="min-h-screen w-full h-full bg-cover bg-center bg-banner"
        id="banner"
      />
      <section className="py-8">
        <Products fotos={images as any} />
      </section>
    </main>
  );
};

export default Home;
