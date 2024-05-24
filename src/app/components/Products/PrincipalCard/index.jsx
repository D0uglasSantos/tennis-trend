import Image from "next/image";
import { useState } from "react";
import loadingSvg from "../../../../../public/images/icons/loading.svg";

const ProductCard = () => {
  const [activeColor, setActiveColor] = useState("#000");
  const [bgColor, setBgColor] = useState("#212121");
  const [imgSrc, setImgSrc] = useState(
    "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
  );
  const [loading, setLoading] = useState(false);

  const handleColorChange = (colorPrimary, colorSec, pic) => {
    setLoading(true);
    setActiveColor(colorPrimary);
    setBgColor(colorSec);
    setImgSrc(pic);
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Tempo de espera simulado de 1 segundo
  };

  return (
    <div className="flex flex-wrap justify-between bg-white m-5 rounded-xl shadow-xl w-[900px] h-[600px]">
      <div
        className="relative flex justify-center items-center w-1/2 h-full transition duration-300 rounded-l-xl"
        style={{ background: bgColor }}
      >
        {loading ? (
          <Image src={loadingSvg} width={150} height={150} alt="loading..." />
        ) : (
          <img
            src={imgSrc}
            alt="Nike Jordan Proto-Lyte Image"
            className="relative w-[700px] transform -rotate-12 transition duration-[700ms]"
          />
        )}
      </div>
      <div className="flex justify-center items-center w-1/2 h-full p-10 box-border">
        <div className="content">
          <h2
            className="m-0 p-0 text-[2.4em] leading-[1em] text-[#444]"
            style={{ color: bgColor }}
          >
            Jordan Proto-Lyte <br />
            <span className="text-[0.4em] uppercase tracking-wider text-[#999]">
              Running Collection
            </span>
          </h2>
          <p className="w-[85%] ml-[15%] text-[#333] text-[15px] mb-9">
            Featuring soft foam cushioning and lightweight, woven fabric in the
            upper, the Jordan Proto-Lyte is made for all-day, bouncy comfort.
            Lightweight Breathability: Lightweight woven fabric with real or
            synthetic leather provides breathable support. Cushioned Comfort: A
            full-length foam midsole delivers lightweight, plush cushioning.
            Secure Traction: Exaggerated herringbone-pattern outsole offers
            traction on a variety of surfaces.
          </p>
          <p className="product-colors text-black">
            Available Colors:
            <span
              className={`inline-block relative cursor-pointer rounded-full w-[26px] h-[26px] top-2 mr-3 left-[10px] bg-black ${
                activeColor === "#000"
                  ? "ring-2 ring-black box-border  w-9 h-9"
                  : ""
              }`}
              onClick={() =>
                handleColorChange(
                  "#000",
                  "#212121",
                  "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto.png?raw=true"
                )
              }
            ></span>
            <span
              className={`inline-block relative cursor-pointer rounded-full w-[26px] h-[26px] top-2 mr-3 left-[10px] bg-[#D5212E] ${
                activeColor === "#7E021C"
                  ? "ring-2 ring-[#7E021C] box-border w-9 h-9"
                  : ""
              }`}
              onClick={() =>
                handleColorChange(
                  "#7E021C",
                  "#bd072d",
                  "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_red_black.png?raw=true"
                )
              }
            ></span>
            <span
              className={`inline-block relative cursor-pointer rounded-full w-[26px] h-[26px] top-2 mr-3 left-[10px] bg-[#F18557] ${
                activeColor === "#CE5B39"
                  ? "ring-2 ring-[#CE5B39] box-border w-9 h-9"
                  : ""
              }`}
              onClick={() =>
                handleColorChange(
                  "#CE5B39",
                  "#F18557",
                  "https://github.com/anuzbvbmaniac/Responsive-Product-Card---CSS-ONLY/blob/master/assets/img/jordan_proto_orange_black.png?raw=true"
                )
              }
            ></span>
          </p>
          <h3
            className="m-0 p-0 text-[2.5em] text-[#a2a2a2] float-left"
            style={{ color: bgColor }}
          >
            U$: 745,00
          </h3>
          <button
            className="rounded-xl bg-black text-white border-none outline-none p-4 mt-1.5 text-[16px] tracking-wide uppercase font-semibold float-right"
            style={{ background: bgColor }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
