
import { cookies } from 'next/headers';
import Header from './components/Header'
import { isEmpty } from 'lodash';
import { redirect } from 'next/navigation';

export default function AppLayout({children}: {
  children: React.ReactNode
}) {
  const token = cookies().get('happy-pet.token')?.value;
  
  if(isEmpty(token)) {
    redirect('/signin');
  }

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
