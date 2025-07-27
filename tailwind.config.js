/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
    theme: {
        screens: {
            sm: { min: '1px', max: '768px' },
            md: { min: '768px', max: '1024px' },
            lg: { min: '1024px', max: '1280px' },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
            },
        },
    },
    plugins: [],
}