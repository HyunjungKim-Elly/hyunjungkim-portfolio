import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
    content: [
        './app/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './**/*.{ts,tsx}',
    ],
    theme: {
        screens: {
            'sm': { min: '1px', max: '768px' },
            'md': { min: '768px', max: '1024px' },
            'lg': { min: '1024px' },
        },
        extend: {
            spacing: {
                ...defaultTheme.spacing,
            },
            backgroundImage: {
                'gradient-radial':
                    'radial-gradient(circle at center, #0f172a 0%, #020617 100%)',
            },
        },
    },
    plugins: [],
};

export default config;