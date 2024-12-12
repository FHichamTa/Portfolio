import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Hicham TAAFRAOUTI',
  description: 'IT Student Portfolio',
  icons: [{
    rel: 'icon',
    type: 'image/png',
    url: '/favicon.png',
  }],
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