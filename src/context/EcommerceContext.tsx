import { createContext, Dispatch, useEffect, useState } from 'react';
import { IProducts } from '../interfaces/IProducts';

export interface IProductsCart extends IProducts {
  quantity: number;
}

type ecommerceContext = {
  isDark: boolean;
  isOpenCart: boolean;
  setIsOpenCart: Dispatch<React.SetStateAction<boolean>>;
  setIsDark: Dispatch<React.SetStateAction<boolean>>
  cart: IProductsCart[];
  setCart: Dispatch<React.SetStateAction<IProductsCart[]>>;
  filterFreeShipping: boolean;
  setFilterFreeShipping: Dispatch<React.SetStateAction<boolean>>
};

export const ecommerceContext = createContext({} as ecommerceContext);

interface IEcommerceContextProviderProps {
  children: React.ReactNode;
}

export default function EcommerceContextProvider({ children }: IEcommerceContextProviderProps) {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark') || 'false'));
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cart, setCart] = useState<IProductsCart[]>(
    JSON.parse(localStorage.getItem('cart') || '[]'),
  );
  const [filterFreeShipping, setFilterFreeShipping] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('isDark', JSON.stringify(isDark));
  }, [isDark]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <ecommerceContext.Provider value={
      { isDark, setIsDark, isOpenCart, setIsOpenCart, cart, setCart, filterFreeShipping, setFilterFreeShipping }
    }>
      {children}
    </ecommerceContext.Provider>
  )
}