import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: {
        files: [
            './src/app/**/*.{ts,tsx}',
            './src/components/**/*.{ts,tsx}',
            './src/lib/**/*.{ts,tsx}',
        ],
    },
    theme: {
        screens: {
            sm: { max: '767px' },

            md: { max: '1023px' },

            lg: { max: '1279px' },

            xl: { max: '1535px' },

            '2xl': { min: '1536px' },
        },
        extend: {
            flex: {
                '2': '2 1 0%',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
export default config;
