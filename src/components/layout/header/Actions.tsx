import Link from 'next/link';
import * as React from 'react';

import CartIcon from '../../../../public/icons/cart.svg';
import HeartIcon from '../../../../public/icons/heart.svg';

export default function Actions() {
    return (
        <div className='relative grid w-max grid-flow-col items-center justify-items-end gap-x-4 justify-self-end pb-1.5 grid-in-[actions] lg:p-0'>
            <Link href='/wishlist'>
                <a className='relative flex text-gray-300'>
                    <span className='inline-flex touch-manipulation items-center justify-center align-middle text-gray-200'>
                        <HeartIcon width='24' height='24' />
                    </span>
                </a>
            </Link>

            <Link href='/cart'>
                <a className='relative flex'>
                    <span className='inline-flex touch-manipulation items-center justify-center bg-white align-middle font-light text-gray-200'>
                        <CartIcon width='24' height='24' />
                    </span>
                </a>
            </Link>
        </div>
    );
}
