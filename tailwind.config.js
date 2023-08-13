/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: {
                        default: 'rgb(8, 9, 117)',
                        lighter: 'rgb(15, 16, 231)',
                        light: 'rgb(13, 14, 193)',
                        dark: 'rgb(10, 10, 154)',
                        darker: 'rgb(6, 6, 102)',
                    },
                    yellow: {
                        default: 'rgb(255, 222, 0)',
                        lighter: 'rgb(253, 255, 0)',
                        light: 'rgb(255, 239, 0)',
                        dark: 'rgb(204, 177, 0)',
                        darker: 'rgb(178, 155, 0)',
                    },
                    red: {
                        default: 'rgb(234, 11, 15)',
                        lighter: 'rgb(255, 43, 10)',
                        light: 'rgb(255, 11, 11)',
                        dark: 'rgb(182, 8, 11)',
                        darker: 'rgb(157, 7, 10)'
                    }
                }
            },
            backgroundImage: {
                hero: "url('/hero.jpg')",
            }
        },
    },
    plugins: [],
}
