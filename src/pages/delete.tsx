import React from "react";
import Link from "next/link";

export default function del() {
  return (
    <div className="w-full lg:w-screen h-screen flex justify-center items-center">
      <Link
        href="/"
        className="w-20 bg-blue-400 rounded-full text-white text-xl text-center absolute top-2 left-2"
      >
        Voltar
      </Link>
      <section className="flex flex-col justify-start items-center gap-2 w-1/2 aspect-[2/1] py-10 border rounded-xl self-center">
        <h1 className="text-2xl">Deletar</h1>
        <input
          type="name"
          placeholder="nome"
          className="border text-center w-96 rounded-full"
        ></input>
        
        <div className="">provavelmente o retorno ou display dos dados aqui sla</div>
      </section>
    </div>
  );
}
