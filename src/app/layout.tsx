
import Header from './components/header'
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
          <Header userName={user} userPhoto=''/>
          <div className='container mx-auto'>
            {children}
          </div>
      </body>
    </html>
  )
}
