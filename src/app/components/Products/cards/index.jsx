import Image from "next/image";
import React from "react";
import { GoHeartFill } from "react-icons/go";

const Card = ({ foto }) => {
  return (
    <>
      <div className="bg-gray-100 flex gap-5 items-center rounded-lg mx-auto shadow-xl w-[520px] h-[350px]">
        <section>
          <div className="images">
            <Image
              className="ml-[47px]"
              src={foto.path}
              alt=""
              width={200}
              height={47}
            />
          </div>
          <p className="text-xs text-[#645F25] tracking-wider mt-3 ml-5">
            Chose Size
          </p>
          <div className="gap-1 w-3/5 ml-5 mt-1 flex">
            {["5", "6", "7", "8", "9", "10", "11", "12"].map((size) => (
              <div
                key={size}
                className="text-[#645F25] p-2 border border-yellow-600 text-xs text-center hover:bg-yellow-700 hover:text-white transition duration-400"
              >
                {size}
              </div>
            ))}
          </div>
        </section>
        <section className="">
          <p className="uppercase font-thin mb-3 text-justify text-gray-600 text-xs leading-6">
            {foto.description}
          </p>
          <h1 className="uppercase font-mono mb-1 text-lg text-gray-600">
            {foto.titulo}
          </h1>
          <h2 className="mb-4 text-[#645F25]">{`U$${foto.preco}`}</h2>
          <p className="text-gray-600 text-xs leading-6 mr-6 mb-3 text-justify">
            The Nike Epic React Flyknit foam cushioning is responsive yet
            light-weight, durable yet soft. This creates a sensation that not
            only enhances the feeling of moving forward, but makes running feel
            fun, too.
          </p>
          <div className="flex gap-2">
            <button className="bg-[#645F25] text-white uppercase text-xs py-2 px-4 w-2/3 rounded-xl hover:bg-[#918a42] transition duration-400">
              Add to Cart
            </button>
            <button className="bg-[#645F25] text-white uppercase text-xs py-2 px-4 w-1/4 rounded-xl transition duration-400">
              <span className="text-2xl hover:text-red-700">
                <GoHeartFill />
              </span>
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
