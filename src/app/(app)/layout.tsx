
import { cookies } from 'next/headers';
import Header from './components/Header'
import { isEmpty } from 'lodash';
import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect';
import { Suspense } from 'react';

export default function AppLayout({children}: {
  children: React.ReactNode
}) {
  const token = cookies().get('happy-pet.token')?.value;
  
  if(isEmpty(token)) {
    redirect('/signin', RedirectType.push);
  }

  const user = 'Admin';
  return (
      <>
        <Suspense fallback={<header  className='bg-teal-700 h-20'/>}>
          <Header userName={user} pathImage=''/>
        </Suspense>
         <div className='flex container mx-auto m-5 w-screen h-[calc(100vh-7.5rem)]'>
            {children}
         </div>
      </>
  )
}
