import { Moon, ShoppingBag, Storefront } from 'phosphor-react';
import { useContext } from 'react';

import { ecommerceContext } from '../context/EcommerceContext';

import { NavDropDown } from './NavDropdown';

export function Header() {
  const { isDark, setIsDark, isOpenCart, setIsOpenCart } = useContext(ecommerceContext);

  return (
    <header className="flex justify-between items-center py-6 md:px-14 px-5 bg-zinc-200 dark:bg-gray-900 transition-colors duration-300">
      <div className='flex items-center md:text-2xl font-bold dark:text-zinc-300 text-zinc-800 md:gap-4'>
        <Storefront className="dark:text-zinc-200 md:text-5xl text-2xl text-zinc-800  transition-colors hover:text-zinc-900" />
        <p className='hidden md:flex'>E-commerce</p>
        <nav className='md:text-lg text-base font-bold px-4 flex items-center md:gap-4 gap-1 dark:text-zinc-300 text-zinc-800'>
          <a href="/">Home</a>
          <NavDropDown />
        </nav>
      </div>
      <div className='flex items-center text-2xl font-bold dark:text-zinc-300 text-zinc-800 gap-4'>
        <button
          onClick={() => setIsDark(!isDark)}
        >
          <Moon className="dark:text-zinc-300 md:text-5xl text-3xl text-zinc-900" weight={isDark ? 'bold' : 'regular'} />
        </button>
        <button
          onClick={() => setIsOpenCart(!isOpenCart)}
        >
          <ShoppingBag className="dark:text-zinc-200 md:text-5xl text-3xl text-zinc-800 hover:text-zinc-900 cursor-pointer hover:scale-105 transition-all" />
        </button>
      </div>
    </header>
  )
}