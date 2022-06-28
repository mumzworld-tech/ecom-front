/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            primary: {
                DEFAULT: '#004B87',
                l1: '#004B87',
                l2: '#0070BE',
                l3: '#637AA6',
                m1: '#C30045',
                m2: '#C94477',
                m3: '#E76F7F',
            },
            positive: {
                l1: '#009959',
                l2: '#5AA399',
            },
            gray: {
                100: '#282828',
                200: '#555555',
                300: '#828282',
                400: '#CECECE',
                500: '#DCE1E5',
                600: '#F3F5F6',
            },
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            red: colors.red,
        },
        screens: {
            xs: '480px',
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1024px',
            '2xl': '1280px',
            '3xl': '1440px',
        },
        extend: {},
    },
    plugins: [require('@savvywombat/tailwindcss-grid-areas')],
};
