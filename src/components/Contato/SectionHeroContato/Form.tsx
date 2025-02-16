import React from 'react'

export default function Form() {
  return (
    <form className='flex flex-row flex-wrap gap-6' action="">
      <div className='flex-1'>
        <label className='label-flowrise' htmlFor="name">Nome</label>
        <input className='input-flowrise' type="text" name="name" id="name" placeholder='Ex: João Silva...' />
      </div>

      <div className='flex-1'>
        <label className='label-flowrise' htmlFor="sobrenome">Sobrenome</label>
        <input className='input-flowrise' type="text" name="sobrenome" id="sobrenome" placeholder='Ex: Carvalho Souza...' />
      </div>

      <div className='w-full'>
        <label className='label-flowrise' htmlFor="email">Email</label>
        <input className='input-flowrise' type="email" name="email" id="email" placeholder='Ex: 8H9QZ@example.com' />
      </div>

      <div className='w-full'>
        <label className='label-flowrise' htmlFor="telefone">Telefone</label>
        <input className='input-flowrise' type="tel" name="telefone" id="telefone" placeholder='(99) 99999-9999' />
      </div>

      <div className='w-full'>
        <label className='label-flowrise' htmlFor="mensagem">Mensagem</label>
        <textarea className='input-flowrise' name="mensagem" id="mensagem" cols={30} rows={6} placeholder='Digite sua mensagem...' />
      </div>

      <div className='flex items-center gap-2 w-full'>
        <input className='appearance-none h-4 w-4 border border-gray-300 checked:bg-cyan-600 rounded-md bg-gray-50 transition duration-150 ease-in-out' type="checkbox" name="politica" id="politica" />
        <span className='text-slate-500 text-base/base font-display'>Você concorda com a nossa <a className='underline' href="#">política de privacidade</a>.</span>
      </div>

      <div className='w-full'>
        <button className='w-full py-3 px-10 bg-cyan-700 hover:bg-cyan-900 rounded-full text-white font-bold transition-colors duration-300 text-base tracking-wider' type="submit">Enviar mensagem</button>
      </div>
    </form>
  )
}
