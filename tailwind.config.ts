import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const generatePixelSpacing = () => {
    const spacing: Record<string, string> = {}
    for (let i = 1; i <= 1000; i++) {
        spacing[i.toString()] = `${i}px`
    }
    return spacing
}

const config = {
    content: [
        './app/**/*.{ts,tsx}',
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    safelist: [
        {
            pattern: /^(w|h|ml|mr|mt|mb|p|pt|pb|px|py|m|gap)-\d+$/,
        },
    ],
    theme: {
        extend: {
            spacing: {
                ...defaultTheme.spacing,
                ...generatePixelSpacing(),
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