import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/app/**/*.{ts,tsx}',
        './src/components/**/*.{ts,tsx}',
        './src/app/(**)/**/*.{ts,tsx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {},
    plugins: [],
    corePlugins: {
        preflight: false,
    },
};
export default config;
