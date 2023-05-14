"use client";
import React from "react";
import { BsFillMapFill, BsFillEnvelopeAtFill, BsArrowRight } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";
import { useTypewriter } from "react-simple-typewriter";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:ramasanjaya3302@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  const [text, count] = useTypewriter({
    words: [
        "Got a question or proposal, or just want to say hello?",
        "Go ahead~",
    ],
    loop: true,
    delaySpeed:2000,
    typeSpeed:75,
    deleteSpeed: 40
})

  return (
    <section id="contact">
      <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
        <h3 className="absolute top-5 uppercase tracking-[2px] text-gray-500 text-xl">
          Send me a message!
        </h3>
        <div className="flex flex-col space-y-10">
        <p className="relative text-lg font-mono flex text-center justify-center text-emerald-700 sm:mt-8">{text}</p>
          <div className="space-y-10  text-gray-600">
            <div className="flex items-center space-x-5 justify-between">
              <BsFillEnvelopeAtFill className="text-emerald-500 h-7 w-7 animate-pulse" />
              <p className="text-md md:text-xl lg:text-xl font-mono underline underline-offset-2 decoration-emerald-500">
                ramasanjaya3302@gmail.com
              </p>
            </div>
            <div className="flex items-center space-x-5 justify-between">
              <BsFillMapFill className="text-emerald-500 h-7 w-7 animate-pulse" />
              <p className="text-md md:text-xl lg:text-xl font-mono underline underline-offset-2 decoration-emerald-500">Bandung, Indonesia</p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-80 md:w-fit mx-auto"
          >
            <div className="md:flex md:space-x-2 space-y-2 md:space-y-0 ">
              <input
                {...register("name")}
                placeholder="Enter your name"
                className="contactInput w-80 md:w-auto placeholder:font-mono placeholder:text-sm"
                type="text"
              />{" "}
              <input
                {...register("email")}
                placeholder="Enter your email"
                className="contactInput w-80 md:w-auto placeholder:font-mono placeholder:text-sm"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Your subject"
              className="contactInput  placeholder:font-mono placeholder:text-sm"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Enter your message"
              className="contactInput placeholder:font-mono placeholder:text-sm"
            />
            <button className="flex items-center justify-center outline outline-emerald-500 py-3 md:py-5 px-10 rounded-none fill-none text-emerald-500 font-semibold font-mono text-md uppercase tracking-[5px]">
              {" "}
              shoot
              
              <BsArrowRight className="text-emerald-500 h-5 w-10 animate-pulse items-end" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}