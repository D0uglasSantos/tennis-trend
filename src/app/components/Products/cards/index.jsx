import React from "react";

const Card = ({ foto }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-lg relative mx-auto overflow-hidden shadow-xl w-[520px] h-[350px]">
        <div className="images">
          <img
            className="w-[190px] h-[200px] mt-[47px] ml-[47px]"
            src={foto.path}
            alt=""
          />
        </div>
        <p className="text-xs text-green-500 tracking-wider mt-3 ml-5">
          Chose Size
        </p>
        <div className="grid grid-cols-auto-fill gap-1 w-3/5 ml-5 mt-1">
          {["5", "6", "7", "8", "9", "10", "11", "12"].map((size) => (
            <div
              key={size}
              className="p-2 border border-yellow-600 text-xs text-center hover:bg-yellow-700 hover:text-white transition duration-400"
            >
              {size}
            </div>
          ))}
        </div>
        <div className="absolute w-2/5 h-full top-10 left-3/5">
          <p className="uppercase font-thin mb-3 text-justify text-gray-600 text-xs leading-6 mr-6">
            {foto.description}
          </p>
          <h1 className="uppercase font-medium mb-4 text-lg text-gray-600">
            {foto.titulo}
          </h1>
          <h2 className="mb-4 text-yellow-700">{`U$${foto.preco}`}</h2>
          <p className="text-gray-600 text-xs leading-6 mr-6 text-justify">
            The Nike Epic React Flyknit foam cushioning is responsive yet
            light-weight, durable yet soft. This creates a sensation that not
            only enhances the feeling of moving forward, but makes running feel
            fun, too.
          </p>
          <div className="flex gap-2">
            <button className="bg-yellow-600 text-white uppercase text-xs py-2 px-4 w-2/3 rounded-xl hover:bg-yellow-700 transition duration-400">
              Add to Cart
            </button>
            <button className="bg-yellow-600 text-white uppercase text-xs py-2 px-4 w-1/4 rounded-xl hover:bg-yellow-700 transition duration-400">
              <span className="text-2xl hover:text-red-600">♥</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
