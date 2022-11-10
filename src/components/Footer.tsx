import { Package } from "phosphor-react";

export function Footer() {
  return (
    <footer className="flex justify-around items-center bg-zinc-200 dark:bg-gray-900 transition-colors border-t border-black dark:border-zinc-200 py-8">
      <div className="flex flex-col items-start dark:text-zinc-200 font-semibold">
        <p>Feito por Vitor Soares</p>
        <a
          href="https://github.com/Vitosoaresp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meu Github
        </a>
        <a
          href="https://www.linkedin.com/in/vitorsoaresp/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>

      <div className="flex items-center dark:text-zinc-200 font-semibold">
        <p>
          <Package size={48} className="dark:text-zinc-300 text-black" />
          <span>Envio rapido</span> 
        </p>
      </div>
    </footer>
  )
}