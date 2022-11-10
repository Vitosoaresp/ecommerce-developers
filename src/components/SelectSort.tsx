import { Dispatch, SetStateAction } from 'react';

interface ISelectSortProps {
  sortBySelect: string;
  setSortBySelect: Dispatch<SetStateAction<string>>;
}

export function SelectSort({ sortBySelect, setSortBySelect }: ISelectSortProps) {

  return (
    <p className='flex gap-2 justify-end dark:text-zinc-300'>
      Classificar por
      <select
        name="filterProducts"
        id="filterProducts"
        className='bg-transparent border-none dark:text-zinc-300 cursor-pointer focus:outline-none'
        value={sortBySelect}
        onChange={e => setSortBySelect(e.target.value)}
      >
        <option value="1" className='dark:bg-black'>Mais relevantes</option>
        <option value="2" className='dark:bg-black'>Menor preço</option>
        <option value="3" className='dark:bg-black'>Maior preço</option>
      </select>
    </p>
  )
}