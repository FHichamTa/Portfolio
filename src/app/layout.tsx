import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Hicham TAAFRAOUTI',
  description: 'IT Student Portfolio',
  icons: {
    icon: [
      {
        url: '/favicon.png', // Nous allons créer ce fichier
        type: 'image/png',
        sizes: '32x32',
      }
    ],
  },
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}