
import { cookies } from 'next/headers';
import Header from './components/Header'
import { isEmpty } from 'lodash';
import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect';

export default function AppLayout({children}: {
  children: React.ReactNode
}) {
  const token = cookies().get('user-auth')?.value;
  
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
