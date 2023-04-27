
import Header from './components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Happy Pet',
  description: 'O seu pet feliz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = 'Admin';
  return (
    <html lang="en">
      <body className={inter.className}>
          <Header userName={user} pathImage=''/>
          <div className='flex container mx-auto m-5'>
            {children}
          </div>
      </body>
    </html>
  )
}
