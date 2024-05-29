"use client";
import { useEffect } from "react";
import Image from "next/image";
import Icon from "../../../public/images/icons/image_about.png";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        className="min-h-screen w-full h-full bg-cover bg-center bg-banner_about"
        id="banner"
      />
      <section className="flex items-center justify-center pb-10 w-full h-vh p-5 my-10 gap-10">
        <div
          className=" flex flex-col gap-5 text-left"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <h1 className="font-bold text-lg">Nossa Missão</h1>
          <p>
            No Tennis Trend, nossa missão é conectar amantes do tênis com
            conteúdos relevantes, inspiradores e úteis. Queremos ser a sua fonte
            principal de informação, ajudando tanto iniciantes quanto
            profissionais a melhorar seu jogo e aproveitar ao máximo essa
            paixão.
          </p>
          <h1 className="font-bold text-lg">Nossa História</h1>
          <p>
            Fundado em 2023, o Tennis Trend nasceu da paixão de um grupo de
            amigos pelo esporte. Notamos a falta de um espaço dedicado às
            últimas tendências e inovações no mundo do tênis e decidimos criar
            uma plataforma que pudesse preencher essa lacuna. Desde então, temos
            crescido e nos tornado uma referência para jogadores e fãs.
          </p>
        </div>
        <div
          className=" flex items-center justify-center"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <Image src={Icon} alt="about" width={1500} height={1500} />
        </div>
      </section>
    </>
  );
};

export default About;
