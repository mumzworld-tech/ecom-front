import Link from 'next/link';
import useBreakpoint from 'src/hooks/useBreakpoint';
import { clsxm } from 'src/lib/clsxm';

import LogoLarge from '../../../../public/images/logo-large.svg';
import LogoSmall from '../../../../public/images/logo-small.svg';

export default function Logo() {
    const { type: screenType } = useBreakpoint('lg');

    const isDesktop = screenType === 'Desktop';

    return (
        <Link href='/'>
            <a
                className={clsxm(
                    'min-w-max justify-self-start pb-1.5 grid-in-[logo] lg:p-0',
                    screenType === 'None' && 'hidden'
                )}
            >
                {isDesktop ? (
                    <LogoLarge
                        width='225'
                        height='49'
                        alt='Mumzworld Ecom Front'
                    />
                ) : (
                    <LogoSmall
                        width='149'
                        height='22'
                        alt='Mumzworld Ecom Front'
                    />
                )}
            </a>
        </Link>
    );
}
