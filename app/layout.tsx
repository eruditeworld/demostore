import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Nabila Khan | Organic Henna Products & Online Mehndi Academy',
  description: 'Pure Henna. Beautiful Art. Learn, Create & Grow. Premium organic henna products and professional online Mehndi education by Nabila Khan.',
  openGraph: {
    title: 'Nabila Khan | Organic Henna Products & Online Mehndi Academy',
    description: 'Pure Henna. Beautiful Art. Learn, Create & Grow. Premium organic henna products and professional online Mehndi education by Nabila Khan.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nabila Khan | Organic Henna Products & Online Mehndi Academy',
    description: 'Pure Henna. Beautiful Art. Learn, Create & Grow. Premium organic henna products and professional online Mehndi education by Nabila Khan.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
