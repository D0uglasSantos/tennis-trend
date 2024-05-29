"use client";
import Image from "next/image";
import Logo from "../../../public/images/logos/logo_tennis_pro_shop.svg";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState("");

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data", { name, email, number, message });
  };

  return (
    <>
      <section
        className="min-h-screen w-full h-full bg-cover bg-center bg-banner_contact"
        id="banner"
      />
      <section className="flex items-center justify-center pb-10 w-11/12 h-svh p-5 mb-10">
        <div
          className="w-1/2 flex flex-col items-center justify-center"
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <div className="animate-bounce">
            <Image
              src={Logo}
              width={500}
              height={500}
              alt="logo Tennis Trend"
            />
          </div>
          <div className="pl-4 border-l-2 border-zinc-800">
            <span className="flex gap-2 items-center justify-center">
              <AiOutlineMail className="text-xl" />
              <p>tennistrend@contactgmail.com</p>
            </span>
            <span className="flex gap-2 items-center">
              <LuPhone className="text-xl" />
              <p>+123-456-7890</p>
            </span>
          </div>
        </div>
        <div
          className="w-1/2"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="700"
        >
          <h1 className="text-left text-3xl uppercase font-bold pt-20 pb-2 border-b-4 border-bg-green text-black mb-3">
            Get In Touch
          </h1>
          <p className="mb-10 text-gray-500">
            Get in touch with us for more information or questions about tennis!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <label className="flex flex-col gap-1">
              <span className="text-gray-600 font-bold">Name</span>
              <input
                type="text"
                value={name}
                required
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="enter your name"
                className="border border-gray-400 rounded-lg p-2"
                aria-label="Nome"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-600 font-bold">Email</span>
              <input
                type="email"
                value={email}
                required
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className="border border-gray-400 rounded-lg p-2"
                aria-label="Email"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-600 font-bold">Number</span>
              <input
                type="tel"
                value={number}
                name="number"
                onChange={(e) => setNumber(e.target.value)}
                placeholder="enter your number"
                className="border border-gray-400 rounded-lg p-2"
                aria-label="Número"
              />
            </label>
            <label className="flex flex-col gap-1">
              <span className="text-gray-600 font-bold">Message</span>
              <textarea
                value={message}
                required
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="write your message"
                className="border border-gray-400 rounded-lg p-2"
                aria-label="Mensagem"
              />
            </label>
            <button
              type="submit"
              className="bg-bg-green text-white rounded p-2 mt-4 hover:bg-[#918a42]"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
