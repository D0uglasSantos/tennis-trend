"use client";
import { useEffect, useState } from "react";
import Images from "./json/imagesProducts.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";

const Home = () => {
  const [images, setimages] = useState(Images);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () =>
      window.scrollY > 5 ? setIsScrolled(true) : setIsScrolled(false);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="">
      <Navbar isScrolled={isScrolled} />
      <section
        className="min-h-screen w-full h-full
        bg-cover bg-center bg-banner"
        id="banner"
      />
      <section className="py-8">
        <Products fotos={images as any} />
      </section>
      <Footer />
    </main>
  );
};

export default Home;
