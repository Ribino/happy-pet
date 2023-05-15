
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
   title: 'Happy Pet',
   description: 'O seu pet feliz'
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  const user = 'Admin';
  return (
      <html lang="pt-br">
         <body className={inter.className}>    
            {children}
         </body>
      </html>
  )
}
