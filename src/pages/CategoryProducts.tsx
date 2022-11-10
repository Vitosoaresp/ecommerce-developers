import { Circle } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cart } from '../components/Cart';
import { Header } from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import { SelectSort } from '../components/SelectSort';
import { SwitchToggle } from '../components/SwitchToggle';
import { ecommerceContext } from '../context/EcommerceContext';
import { IProducts } from '../interfaces/IProducts';

import { categories, fetchProductsByCategoryId } from '../service/fetchProducts';

export function CategoryProducts() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [products, setProducts] = useState<IProducts[]>([]);
  const [sortBySelect, setSortBySelect] = useState('1');
  const { setCart, cart, isOpenCart, setIsOpenCart, filterFreeShipping } = useContext(ecommerceContext);
  
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProductsByCategoryId(categoryId);
      setProducts(products);
    }
    getProducts();
  }, [categoryId]);

  const productsSorted = products.sort((a, b) => {
    if (sortBySelect === '3') {
      return b.price - a.price;
    } else if (sortBySelect === '2') {
      return a.price - b.price;
    }
    return 0;
  });

  const productsFiltered = productsSorted.filter(product => product.shipping.free_shipping);

  const category = categories.find(category => category.id === categoryId);

  function handleAddToCart(product: IProducts) {
    const productIndex = cart.findIndex(item => item.id === product.id);
    const { price, thumbnail, title, sold_quantity, condition, id, shipping } = product;
    if (productIndex >= 0) {
      const newCart = [...cart];
      newCart[productIndex].quantity += 1;
      setCart(newCart);
    } else {
      setCart([...cart, {
        price,
        thumbnail,
        title,
        sold_quantity,
        condition,
        id,
        shipping,
        quantity: 1,
      }]);
    }
    setIsOpenCart(true);
  }
  
  return (
    <>
      <Header />
      <Cart isOpenCart={isOpenCart} />
      <main className='flex md:flex-row flex-col justify-center w-full  px-5 bg-zinc-100 dark:bg-gray-800 transition-colors duration-300'>
        <div className='md:w-[30%] md:py-10 pt-5 md:px-14 flex flex-col gap-3'>
          { category && <span className='md:text-lg text-base font-semibold text-zinc-900 dark:text-zinc-300'>{category.name}</span> }
          <div className='bg-white hidden dark:bg-black/70 md:flex items-center justify-around py-5 rounded-md'>
            <p className='dark:text-zinc-300'>Frete grátis</p>
            <SwitchToggle />
          </div>
        </div>

        <div className='md:w-2/3 w-full flex flex-col md:px-0 px-3 md:pr-5'>
          <div className='w-full py-5'>
            <SelectSort setSortBySelect={setSortBySelect} sortBySelect={sortBySelect} />
          </div>

          {products.length === 0 && (
            <Circle className='text-center text-5xl dark:text-zinc-200 text-black animate-spin' />
          )}

          {filterFreeShipping && productsFiltered.length === 0 && (
            <div className='flex justify-center items-center h-96'>
              <p className='text-2xl font-semibold dark:text-zinc-300'>
                Não há produtos com frete grátis nessa categoria
              </p>
            </div>
          )}

          <div className='flex flex-wrap gap-5'>
            {(filterFreeShipping ? productsFiltered : productsSorted).map(product => (
              <ProductCard product={ product } key={ product.id } handleAddToCart={ handleAddToCart } />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}