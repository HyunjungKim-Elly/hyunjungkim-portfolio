import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config = {
    content: [
        './app/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    theme: {
        screens: {
            'sm': { max: '767px' },
            'md': { min: '768px', max: '1023px' },
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
} as Config

export default config