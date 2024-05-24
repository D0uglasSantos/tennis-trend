import ProductCard from "./PrincipalCard";
import Card from "./cards";

const Products = ({ fotos = [] }) => {
  return (
    <section className=" flex flex-col items-center bg-white">
      <ProductCard />
      <h1 className="text-center text-3xl uppercase font-bold pt-20 pb-2 border-b-4 border-bg-green text-black">
        Veja outros Produtos em Promoção!
      </h1>
      <section className="px-8 pt-8 flex flex-grow flex-wrap gap-8 justify-around items-center">
        {fotos.map((foto, index) => (
          <Card foto={foto} key={index} />
        ))}
      </section>
    </section>
  );
};
export default Products;
