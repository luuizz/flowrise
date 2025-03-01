import React from "react";

export default function FormContato() {
  return (
    <form className="flex flex-row flex-wrap gap-3 md:gap-6" action="">
      <div className="flex-auto md:flex-1">
        <label className="label-flowrise" htmlFor="name">
          Nome
        </label>
        <input
          className="input-flowrise"
          type="text"
          name="name"
          id="name"
          placeholder="Ex: João Silva..."
        />
      </div>

      <div className="flex-auto md:flex-1">
        <label className="label-flowrise" htmlFor="sobrenome">
          Sobrenome
        </label>
        <input
          className="input-flowrise"
          type="text"
          name="sobrenome"
          id="sobrenome"
          placeholder="Ex: Carvalho Souza..."
        />
      </div>

      <div className="w-full">
        <label className="label-flowrise" htmlFor="email">
          Email
        </label>
        <input
          className="input-flowrise"
          type="email"
          name="email"
          id="email"
          placeholder="Ex: 8H9QZ@example.com"
        />
      </div>

      <div className="w-full">
        <label className="label-flowrise" htmlFor="telefone">
          Telefone
        </label>
        <input
          className="input-flowrise"
          type="tel"
          name="telefone"
          id="telefone"
          placeholder="(99) 99999-9999"
        />
      </div>

      <div className="w-full">
        <label className="label-flowrise" htmlFor="mensagem">
          Mensagem
        </label>
        <textarea
          className="input-flowrise"
          name="mensagem"
          id="mensagem"
          cols={30}
          rows={6}
          placeholder="Digite sua mensagem..."
        />
      </div>

      <div className="flex w-full items-center gap-2">
        <input
          className="h-5 w-5 appearance-none rounded-md border border-gray-300 bg-gray-50 transition duration-150 ease-in-out checked:bg-cyan-600 md:h-4 md:w-4"
          type="checkbox"
          name="politica"
          id="politica"
        />
        <span className="flex-1 font-display text-base/base text-slate-500">
          Você concorda com a nossa{" "}
          <a className="underline" href="#">
            política de privacidade
          </a>
          .
        </span>
      </div>

      <div className="w-full">
        <button
          className="w-full rounded-full bg-cyan-700 px-10 py-3 text-base font-bold tracking-wider text-white transition-colors duration-300 hover:bg-cyan-900"
          type="submit"
        >
          Enviar mensagem
        </button>
      </div>
    </form>
  );
}
