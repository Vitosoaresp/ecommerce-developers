import { useContext } from 'react';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { ecommerceContext } from '../context/EcommerceContext';

import { Cart } from '../components/Cart';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

import { Link } from 'react-router-dom';
import camisa from '../assets/camisa2.jpg';
import caneca from '../assets/caneca.jpg';
import gamer from '../assets/gamer.jpg';
import livros from '../assets/livros.jpg';

export function Home() {
  const { isOpenCart } = useContext(ecommerceContext)

  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free-snap',
    slides: {
      perView: 4,
      spacing: 20,
    },
    breakpoints: {
      '(max-width: 1250px)': {
        slides: {
          perView: 3,
          spacing: 30,
        },
      },
      '(max-width: 640px)': {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },
  });

  return (
    <>
      <Header />
      <Cart isOpenCart={isOpenCart} />
      <>
        <div className="w-full h-[530px] bg-banner bg-bottom bg-cover rounded-md">
          <div className="flex justify-center items-center">
            <Link to="/products" className="bg-black/80 dark:bg-purple-600 dark:hover:bg-purple-700 mx-auto px-4 py-2 mt-[360px] rounded-md font-semibold hover:bg-black/90 transition-colors text-zinc-200">Ver todos os produtos</Link>
          </div>
        </div>

        <div
          ref={ref}
          className="keen-slider flex w-full p-4 bg-zinc-200 dark:bg-gray-900 -mt-10 z-50 py-8"
        >
          <Link to="/category/MLB1196/products" className="keen-slider__slide flex justify-center flex-col items-center shadow-neutral-600 shadow dark:shadow-gray-700 hover:scale-105 transition-all cursor-pointer rounded-lg">
            <img src={livros} alt="" className="w-[400px] h-[200px] md:h-[300px] rounded-md p-5" />          
            <p className="font-bold text-2xl text-zinc-900 dark:text-zinc-200 text-center -mt-2">Livros</p>
          </Link>
          <Link to="/category/MLB192368/products" className="keen-slider__slide flex justify-center flex-col items-center shadow-neutral-600 shadow dark:shadow-gray-700 hover:scale-105 transition-all cursor-pointer rounded-lg">
            <img src={caneca} alt="" className="w-[350px] h-[200px] md:h-[300px] rounded-md p-5" />          
            <p className="font-bold text-2xl text-zinc-900 dark:text-zinc-200 text-center -mt-2">Copos</p>
          </Link>

          <Link to="/category/MLB1648/products" className="keen-slider__slide flex justify-center flex-col items-center shadow-neutral-600 shadow dark:shadow-gray-700 hover:scale-105 transition-all cursor-pointer rounded-lg">
            <img src={gamer} alt="" className="w-[350px] h-[200px] md:h-[300px] bg-cover rounded-md p-5" />          
            <p className="font-bold text-2xl text-zinc-900 dark:text-zinc-200 text-center -mt-2">Tecnologia</p>
          </Link>

          <Link to="/category/MLB31447/products" className="keen-slider__slide flex justify-center flex-col items-center shadow-neutral-600 shadow dark:shadow-gray-700 hover:scale-105 transition-all cursor-pointer rounded-lg">
            <img src={camisa} alt="" className="w-[350px] h-[200px] md:h-[300px] rounded-md p-5" />          
            <p className="font-bold text-2xl text-zinc-900 dark:text-zinc-200 text-center -mt-2">Camisas</p>
          </Link>
        </div>
      </>
      <Footer />
    </>
  )
}