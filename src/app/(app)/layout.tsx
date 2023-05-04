
import Header from './components/Header'

export default function AppLayout({children}: {
  children: React.ReactNode
}) {
  const user = 'Admin';
  return (
      <>
         <Header userName={user} pathImage=''/>
         <div className='flex container mx-auto m-5'>
            {children}
         </div>
      </>
  )
}
