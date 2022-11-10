import { IProducts } from '../interfaces/IProducts';

interface IProductCardProps {
  product: IProducts;
  handleAddToCart: (product: IProducts) => void;
}

export function ProductCard({ product, handleAddToCart }: IProductCardProps) {
  return (
    <div key={ product.id } className="flex flex-col md:w-[30%] w-full rounded-lg dark:hover:shadow-zinc-700 hover:shadow-lg shadow">
      <div className='md:h-64 h-full rounded-md'>
        <img src={product.thumbnail} width="100%" alt={product.title} />
      </div>

      <div className='flex flex-col p-6 md:p-2 dark:text-zinc-300 border-t border-zinc-300 bg-white dark:bg-black/60 md:h-40 justify-around rounded-br-md rounded-bl-md'>
        <p className='text-emerald-700 text-base font-semibold'>{product.shipping.free_shipping && 'Frete grátis'}</p>
        <p className='text-sm'>{product.title.slice(0, 40)}...</p>
        <p>{product.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        <button
          onClick={() => handleAddToCart(product)}
          className='bg-black/80 dark:bg-purple-700 py-2 rounded-lg hover:bg-black/90 dark:hover:bg-purple-800 transition-colors text-white'>
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}