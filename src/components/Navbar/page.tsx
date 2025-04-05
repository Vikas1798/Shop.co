import React from 'react'
import { UserCircleIcon, ShoppingCartIcon, MagnifyingGlassIcon, ChevronDownIcon, Bars3Icon} from '@heroicons/react/24/solid';
import Link from 'next/link';

const NavBar = () => {
    const categories = [
        {
            name:'Shop',
            option:true
        },
        {
            name:'On Sale'
        },
        {
            name:'New Arrivals'
        },
        {
            name:'Brands'
        }
    ]
    return (
        <nav className='px-2'>
            <section className='container py-4 w-full mx-auto flex lg:grid  lg:grid-cols-10 gap-4 items-center justify-between'>
                    <div className='lg:col-span-4 flex item-center  gap-3 justify-between w-full'>
                        <div className='lg:col-span-1 flex gap-3 items-center'>
                            <Bars3Icon className="flex  lg:hidden h-7 w-7 text-[#252525]" />
                            <Link href="/dashboard"> <h1 className='text-2xl font-extrabold '>SHOP.CO</h1> </Link>
                        </div>
                        <div className='lg:col-span-3 hidden lg:flex gap-4'>
                            {
                                categories?.map((d,i) => (
                                    <div key={i} className='cursor-pointer flex items-center gap-1'>
                                        <p className='text-[#252525] hover:text-[#153865] text-sm line-clamp-1'>{d?.name}</p>
                                        {
                                            d?.option && <ChevronDownIcon className="h-4 w-4 text-[#252525]" />
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='lg:col-span-6 w-full grid grid-cols-1 lg:grid-cols-6 items-center justify-between gap-3'>
                        <div className=' bg-[#EEEEEE] rounded-full hidden lg:flex  items-center gap-2 lg:col-span-5 px-3 py-1'>
                                <MagnifyingGlassIcon className="h-5 w-5 text-[#CECECE]" />
                                <input placeholder='Search for Products, Brands and More' type="text" className='outline-none border-none py-1 w-full text-[#707070] text-sm' />
                        </div>
                        <div className='flex gap-3 justify-end lg:col-span-1 w-full'>
                            <MagnifyingGlassIcon className="flex  lg:hidden h-6 w-6 text-[#252525]" />
                            <ShoppingCartIcon className="h-6 w-6 text-[#252525] hover:text-[#153865] cursor-pointer" />
                            <UserCircleIcon className="h-6 w-6 text-[#252525] hover:text-[#153865] cursor-pointer" />
                        </div>
                    </div>
            </section>
        </nav>
    )
}

export default NavBar;
