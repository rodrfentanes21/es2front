import React from "react";
import Link from "next/link";

export default function update() {
  function handleSubmit(e :any) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    console.log(formData)

    // You can pass formData as a fetch body directly:
    // fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <div className="w-full lg:w-screen h-screen flex justify-center items-start">
      <Link
        href="/"
        className="w-20 bg-blue-400 hover:bg-sky-700 rounded-full text-white text-xl text-center absolute top-2 left-2"
      >
        Voltar
      </Link>
      <section className=" flex flex-col justify-center items-center gap-2 w-full lg:w-screen h-screen">
        <form method="post" onSubmit={handleSubmit} className="flex flex-col justify-start items-center gap-2 w-1/2 aspect-[2/1] py-10 border rounded-xl self-center">
          <h1 className="text-2xl">Atualizar</h1>
          <input
            type="text"
            name="var1"
            placeholder="nome"
            className="border text-center w-96 rounded-full"
          ></input>
          <input
            type="text"
            name="var2"
            placeholder="nao sei mais oq"
            className="border text-center w-96 rounded-full"
          ></input>
          <input
            type="text"
            name="var3"
            placeholder="nao sei mais oq parte 2"
            className="border text-center w-96 rounded-full"
          ></input>
          <input
            type="submit"
            value="Submit"
            className="w-32 bg-blue-400 hover:bg-sky-700 rounded-full text-white text-center"
          />
        </form>
        <div className="">
          provavelmente o retorno ou display dos dados aqui sla
        </div>
      </section>
    </div>
  );
}
