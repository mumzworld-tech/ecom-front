import Link from 'next/link';
import * as React from 'react';

import CheckSuccessIcon from '../../../../public/icons/check-success.svg';
import DashDotIcon from '../../../../public/icons/dash-dot.svg';
import DeliveryTruckIcon from '../../../../public/icons/truck.svg';

const links = [
    { href: '/', label: 'Register' },
    { href: '/', label: 'Login' },
];

export default function Topbar() {
    return (
        <header className='top-0 hidden bg-primary-l1 text-white lg:block'>
            <div className='my-0 mx-auto grid max-w-screen-2xl grid-cols-[auto_auto_auto] grid-rows-[2rem] items-center justify-items-start gap-x-0 p-0 text-sm leading-8 sm:gap-x-2'>
                <Link href='/'>
                    <a className='font-semibold'>Community</a>
                </Link>

                <div className='flex items-center gap-3 justify-self-start'>
                    <div className='ml-4 flex cursor-pointer items-center gap-1'>
                        <span className='inline-flex touch-manipulation items-center justify-center text-white'>
                            <DeliveryTruckIcon width='19' height='16' />
                        </span>
                        <span className='flex items-center gap-1 font-bold'>
                            Free fast delivery
                        </span>
                    </div>
                    <div className='ml-4 flex cursor-pointer items-center gap-1'>
                        <span className='inline-flex touch-manipulation items-center justify-center text-white'>
                            <CheckSuccessIcon width='19' height='18' />
                        </span>
                        <span className='flex items-center gap-1 font-bold'>
                            Best prices everyday
                        </span>
                    </div>
                    <div className='ml-4 flex cursor-pointer items-center gap-1'>
                        <span className='inline-flex touch-manipulation items-center justify-center text-white'>
                            <DashDotIcon width='16' height='16' />
                        </span>
                        <span className='flex items-center gap-1 font-bold'>
                            Widest choice
                        </span>
                    </div>
                </div>
                <div className='flex justify-self-end'>
                    <ul className='flex items-center justify-between space-x-4 font-semibold'>
                        {links.map(({ href, label }) => (
                            <li key={`${href}${label}`}>
                                <Link href={href}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}
