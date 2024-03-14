import type { Metadata } from 'next';

import '@/app/index.css';
import Navbar from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

export const metadata: Metadata = {
    title: {
        default: 'Next App Homepage',
        template: '%s | Next,js 14',
    },
    description: 'next app starter app description',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <div className="container">
                    <Navbar />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}
