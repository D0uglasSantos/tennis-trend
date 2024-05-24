"use client";
import { useEffect, useState } from "react";
import Images from "./json/imagesProducts.json";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import { FaArrowUp } from "react-icons/fa";

const Home = () => {
  const [images, setimages] = useState(Images);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
        setShowScrollButton(true);
      } else {
        setIsScrolled(false);
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="bg-white relative">
      <Navbar isScrolled={isScrolled} />
      <section
        className="min-h-screen w-full h-full bg-cover bg-center bg-banner"
        id="banner"
      />
      <section className="py-8">
        <Products fotos={images as any} />
      </section>
      <Footer />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-3 bg-bg-green text-white rounded-full shadow-lg hover:bg-[#918a42] focus:outline-none"
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
};

export default Home;
