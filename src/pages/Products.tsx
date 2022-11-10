import { Circle } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';

import { ecommerceContext } from '../context/EcommerceContext';
import { fetchAllProducts } from '../service/fetchProducts';

import { Cart } from '../components/Cart';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { SelectSort } from '../components/SelectSort';
import { SwitchToggle } from '../components/SwitchToggle';

import { IProducts } from '../interfaces/IProducts';

export function Products() {
  const [products, setProducts] = useState<IProducts[]>([]);
  const { setCart, cart, isOpenCart, setIsOpenCart } = useContext(ecommerceContext);
  const [sortBySelect, setSortBySelect] = useState('1');
  
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchAllProducts();
      setProducts(products);
    }
    getProducts();
  }, []);

  const productsSorted = products.sort((a, b) => {
    if (sortBySelect === '3') {
      return b.price - a.price;
    } else if (sortBySelect === '2') {
      return a.price - b.price;
    }
    return 0;
  });

  function handleAddToCart(product: IProducts) {
    const productIndex = cart.findIndex(item => item.id === product.id);
    const { price, thumbnail, title, sold_quantity, condition, id, shipping } = product;
    if (productIndex >= 0) {
      const newCart = [...cart];
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, { price, thumbnail, title, sold_quantity, condition, id, shipping, quantity: 1 }]);
    }
    setIsOpenCart(true);
  }
  
  return (
    <>
      <Header />
      <Cart isOpenCart={isOpenCart} />
      <main className='flex px-5 bg-zinc-100 dark:bg-gray-800 transition-colors duration-300'>
        <div className='hidden w-[30%] py-10 px-14 md:flex flex-col gap-3'>
          <div className='bg-white dark:bg-black/70 flex items-center justify-around py-5 rounded-md'>
            <p className='dark:text-zinc-300'>Frete grátis</p>
            <SwitchToggle />
          </div>
        </div>

        <div className='md:w-2/3 flex flex-col px-4 md:px-0 md:pr-5'>
          <div className='w-full py-5'>
            <SelectSort setSortBySelect={setSortBySelect} sortBySelect={sortBySelect} />
          </div>

          {products.length === 0 && (
            <Circle className='text-center text-5xl dark:text-zinc-200 text-black animate-spin' />
          )}

          <div className='flex flex-wrap gap-5'>
            {productsSorted.map(product => (
              <ProductCard product={product} key={product.id} handleAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}