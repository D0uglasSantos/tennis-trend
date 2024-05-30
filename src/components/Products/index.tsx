import Title from "../Title";
import ProductCard from "./PrincipalCard";
import Card from "./cards";

const Products = ({ fotos = [] }) => {
  return (
    <section className=" flex flex-col items-center bg-white">
      <ProductCard />
      <Title>Veja outros produtos em promoção!!!</Title>
      <section className="px-8 pt-8 flex flex-grow flex-wrap gap-8 justify-around items-center">
        {fotos.map((foto, index) => (
          <Card foto={foto} key={index} />
        ))}
      </section>
    </section>
  );
};
export default Products;
