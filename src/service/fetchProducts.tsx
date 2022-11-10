import { IProducts } from '../interfaces/IProducts';


export const categories = [
  { id: 'MLB1648', name: 'Tecnologia', url: 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1648'},
  { id: 'MLB1196', name: 'Livros', url: 'https://api.mercadolibre.com/sites/MLB/search?category=&q=livro%20para%20desenvolvedor' },
  { id: 'MLB31447', name: 'Camisas', url: 'https://api.mercadolibre.com/sites/MLB/search?category=&q=camisas%20para%20desenvolvedor' },
  { id: 'MLB192368', name: 'Copos', url: 'https://api.mercadolibre.com/sites/MLB/search?category=&q=canecas%20para%20devs' },
]

export const fetchAllProducts = async (): Promise<IProducts[]> => {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/search?category=&q=desenvolveor');
  const data = await response.json();
  return data.results;
};

export const fetchProductsByCategoryId = async (categoryId: string): Promise<IProducts[]> => {
  const category = categories.find(category => category.id === categoryId);
  const url = category?.url as string;
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}
