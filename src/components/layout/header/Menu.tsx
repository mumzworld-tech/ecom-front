import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { useGetCategoriesQuery } from 'src/generated/graphql';

import CloseIcon from '../../../../public/icons/close.svg';
import MenuIcon from '../../../../public/icons/menu.svg';
import UserIcon from '../../../../public/icons/user.svg';

export default function Menu() {
    const { data } = useGetCategoriesQuery();
    const [open, setOpen] = useState(false);

    const items = data?.categories.map((category) => {
        return (
            <div
                key={category.id}
                className='flex flex-1 cursor-pointer items-center justify-center'
            >
                <Link href={`/${category.url_key}`}>
                    <a className='inline-flex min-h-[2.5rem] items-center justify-center border-b-2 border-transparent text-sm uppercase text-gray-100 hover:border-primary-l2 hover:text-primary-l2'>
                        {category.name}
                    </a>
                </Link>
            </div>
        );
    });
    return (
        <>
            {/* Mobile menu */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as='div'
                    className='fixed inset-0 z-40 flex lg:hidden'
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter='transition-opacity ease-linear duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='transition-opacity ease-linear duration-300'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-gray-100 bg-opacity-25' />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter='transition ease-in-out duration-300 transform'
                        enterFrom='-translate-x-full'
                        enterTo='translate-x-0'
                        leave='transition ease-in-out duration-300 transform'
                        leaveFrom='translate-x-0'
                        leaveTo='-translate-x-full'
                    >
                        <div className='relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl'>
                            <header className='relative grid h-14 auto-cols-[3.5rem] grid-flow-col auto-rows-[3.5rem]  grid-cols-[3.5rem_1fr_3.5rem] content-center bg-gray-600 shadow-sm shadow-gray-400'>
                                <button
                                    type='button'
                                    className='leading-1 pointer-events-auto inline-flex cursor-pointer items-center justify-center text-center'
                                    onClick={() => setOpen(false)}
                                >
                                    <span className='inline-flex touch-manipulation select-none items-center justify-center bg-transparent font-medium text-gray-100'>
                                        <CloseIcon
                                            width='14'
                                            height='14'
                                        ></CloseIcon>
                                    </span>
                                </button>
                                <span className='inline-flex items-center text-sm font-bold capitalize'>
                                    Main Menu
                                </span>
                            </header>

                            <div className='min-h-0 overflow-auto opacity-100 transition-opacity'>
                                <ul>
                                    {data?.categories.map((category) => (
                                        <li
                                            key={category.id}
                                            className='flex items-center border-b border-gray-500'
                                        >
                                            <button className='flex w-full flex-auto touch-manipulation select-none items-center justify-start bg-transparent p-4 text-sm'>
                                                {category.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className='border-t-8 border-gray-600 pt-4'>
                                <div className='grid grid-flow-col items-center justify-items-start px-4 py-0 '>
                                    <Link href='/register'>
                                        <a className='inline-flex text-gray-200'>
                                            <UserIcon
                                                width='24'
                                                height='24'
                                            ></UserIcon>
                                            <span className='ml-3 text-primary-l1'>
                                                Register | Sign In
                                            </span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>

            <div className='leading-[0] grid-in-[primary] lg:hidden'>
                <button
                    className='inline-flex cursor-pointer touch-manipulation select-none items-center justify-center justify-self-start text-primary-m1'
                    onClick={() => setOpen(true)}
                >
                    <MenuIcon width='24' height='24'></MenuIcon>
                </button>
            </div>

            <nav className='col-start-3 col-end-10 ml-[-16px] hidden flex-grow flex-wrap justify-self-stretch bg-white grid-in-[nav] lg:flex'>
                {items}
            </nav>
        </>
    );
}
