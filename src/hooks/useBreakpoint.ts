import { useEffect, useState } from 'react';

type WindowBreakpoints = {
    width: number;
    height: number;
    type: string;
};

const useBreakpoint = (size: string): WindowBreakpoints => {
    const [windowDimensions, setWindowDimensions] = useState<WindowBreakpoints>(
        {
            width: 0,
            height: 0,
            type: 'None',
        }
    );

    useEffect(() => {
        const screens: Record<string, number> = {
            xs: 480,
            sm: 640,
            md: 768,
            lg: 960,
            xl: 1024,
            '2xl': 1280,
            '3xl': 1440,
        };

        function handleResize(): void {
            const type =
                window.innerWidth < screens[size] ? 'Mobile' : 'Desktop';
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                type,
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return (): void => window.removeEventListener('resize', handleResize);
    }, [size]);

    return windowDimensions;
};

export default useBreakpoint;
