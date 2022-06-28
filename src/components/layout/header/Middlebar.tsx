import * as React from 'react';
import Menu from 'src/components/layout/header/Menu';

import Actions from './Actions';
import Logo from './Logo';
import Searchbar from './Searchbar';

export default function Middlebar() {
    return (
        <header className='sticky top-0 z-10 grid h-auto min-h-[6rem] w-full auto-cols-fr justify-center border-b border-gray-600 bg-white px-4 text-gray-200 lg:min-h-[8rem] lg:px-8'>
            <div className='grid h-auto w-full max-w-screen-2xl grid-cols-[min-content]  grid-rows-[auto] content-center items-center gap-x-2.5 justify-self-center border-0 grid-areas-[primary_logo_actions,search_search_search] lg:grid-cols-[min-content_auto_min-content] lg:grid-rows-1 lg:gap-x-8 lg:grid-areas-[logo_search_actions,nav_nav_nav]'>
                <Logo />
                <Searchbar />
                <Actions />
                <Menu />
            </div>
        </header>
    );
}
