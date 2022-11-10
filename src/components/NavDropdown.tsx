import { Menu, Transition } from '@headlessui/react'
import { CaretDown } from 'phosphor-react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export function NavDropDown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex items-center w-full justify-center rounded-md bg-transparent px-4 py-2 md:text-lg text-base font-bold dark:text-zinc-300 text-zinc-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 group">
            Categorias
            <CaretDown
              className="ml-2 -mr-1 h-5 w-5 text-gray-900 dark:text-violet-200 dark:hover:text-violet-100 hover:animate-bounce group-hover:animate-bounce"
              aria-hidden="true"
              weight='bold'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-zinc-300 dark:bg-gray-900/90 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/category/MLB31447/products"
                    className={`${
                      active ? 'dark:bg-violet-500 bg-black/70 text-white' : ' dark:text-zinc-300 dark:bg-gray-900 text-gray-900'
                    } group flex w-full  bg-zinc-300 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Camisas
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/category/MLB192368/products"
                    className={`${
                      active ? 'dark:bg-violet-500 bg-black/70 text-white' : 'text-gray-900 dark:text-zinc-300 dark:bg-gray-900'
                    } group flex w-full bg-zinc-300  items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Copos
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/category/MLB1196/products"
                    className={`${
                      active ? 'dark:bg-violet-500 bg-black/70 text-white' : 'text-gray-900 dark:text-zinc-300 dark:bg-gray-900'
                    } group flex w-full bg-zinc-300  items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Livros
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/category/MLB1648/products"
                    className={`${
                      active ? 'dark:bg-violet-500 bg-black/70 text-white' : 'text-gray-900 dark:text-zinc-300 dark:bg-gray-900'
                    } group flex w-full bg-zinc-300  items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Tecnologia
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
