import { X } from "phosphor-react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ecommerceContext } from "../context/EcommerceContext";
import { IProducts } from "../interfaces/IProducts";

interface ICartProps {
  isOpenCart: boolean;
}

export function Cart({ isOpenCart }: ICartProps) {
  const history = useHistory();
  const { cart, setCart, setIsOpenCart } = useContext(ecommerceContext)

  const totalCart = cart.reduce((acc, currProduct) => {
    return acc + currProduct.price * currProduct.quantity;
  }, 0);

  const convertToBRL = (value: number) => value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  function handleRemoveQuantity(product: IProducts) {
    const productIndex = cart.findIndex(item => item.id === product.id);
    const newCart = [...cart];
    const currentProduct = newCart[productIndex];
    if (currentProduct.quantity > 1) {
      newCart[productIndex].quantity -= 1;
    } else {
      newCart.splice(productIndex, 1);
    }
    setCart(newCart);
  }

  function handleAddQuantity(product: IProducts) {
    const productIndex = cart.findIndex(item => item.id === product.id);
    const newCart = [...cart];
    newCart[productIndex].quantity += 1;
    setCart(newCart);
  }

  function handleFinishCart() {
    setCart([]);
    setIsOpenCart(false);
    alert('Compra finalizada com sucesso!');
    history.push('/');
  }

  return (
    <div className={`flex fixed ${isOpenCart ? 'md:w-2/5 w-screen' : 'w-0'} left-0 top-0 h-screen dark:bg-black bg-zinc-300 transition-all duration-500 z-[100]`}>
      <div className={`${!isOpenCart && 'hidden'} w-full flex flex-col justify-between items-center px-10`}>
        <div className="md:p-10 py-10 px-2 flex md:flex-row flex-col justify-around w-full dark:text-zinc-300">        
          <p className="text-lg">Meu carrinho</p>
          <p>Total: {convertToBRL(totalCart)}</p>
        </div>
        <button
          onClick={() => setIsOpenCart(false)}
          className="flex md:hidden fixed right-10 top-10 cursor-pointer"
        >
          <X className="text-5xl" weight="bold" />
        </button>
        <div className={`flex flex-col justify-start h-full gap-2 w-full ${cart.length > 6 && 'overflow-y-scroll'} scroll-smooth`}>
          {cart.length === 0 && <p className='text-center font-bold dark:text-zinc-300'>Seu carrinho está vazio</p>}
          {cart.map(product => (
            <div key={ product.id } className="flex w-full rounded-lg md:h-20 h-24 justify-between dark:bg-zinc-200">
              <div className='flex justify-center h-full md:h-20 border border-white dark:border-none'>
                <img src={product.thumbnail} width="100%" alt={product.title} />
              </div>

              <div className="flex items-center p-2 gap-10 w-full bg-white dark:bg-black/60">
                <div className='flex flex-col dark:text-zinc-300 w-2/3 justify-around'>
                  <p className='text-sm text-ellipsis w-24 h-11 md:h-auto md:w-auto overflow-hidden md:overflow-visible'>
                    {product.title.slice(0, 45)}{product.title.length > 45 && '...'}
                  </p>
                  <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                </div>

                <div className="flex items-center gap-5 justify-end w-1/3">
                  <button
                    className="text-xl font-bold"
                    onClick={() => handleRemoveQuantity(product)}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    className="text-xl font-bold"
                    onClick={() => handleAddQuantity(product)}
                  >
                    +
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        <button
          className="bg-black/80 dark:bg-purple-700 disabled:cursor-not-allowed hover:bg-black/90 text-white dark:text-zinc-300 rounded-lg py-2 my-5 dark:hover:bg-purple-800 disabled:opacity-50 px-10 transition-colors duration-300"
          onClick={handleFinishCart}
          disabled={cart.length === 0}
        >
          Finalizar compra
        </button>
      </div>
    </div>
  )
}