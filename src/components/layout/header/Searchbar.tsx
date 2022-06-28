import * as React from 'react';

import SearchIcon from '../../../../public/icons/search.svg';

export default function Searchbar() {
    return (
        <div className='relative z-30 mt-2 flex h-10 w-full flex-col grid-in-[search] lg:mt-0 lg:h-12 lg:w-max xl:w-[687px]'>
            <input
                type='search'
                className='md:h12 inline-flex h-10 w-full max-w-full flex-shrink-0 flex-grow-0 basis-full select-none rounded-l border border-gray-500 bg-white px-3 text-sm font-medium leading-6 text-gray-200 outline-none md:py-3.5'
                placeholder='What are you looking for?'
                autoComplete='off'
                autoCorrect='off'
                autoCapitalize='off'
                spellCheck='false'
            />
            <button
                type='submit'
                title='Submit your search query'
                className='absolute top-0 right-0 h-10 w-10 rounded-r bg-primary-l2 text-white md:h-12 md:w-12'
            >
                <span className='inline-flex touch-manipulation items-center justify-center align-middle'>
                    <SearchIcon width='14' height='14' />
                </span>
            </button>
        </div>
    );
}
