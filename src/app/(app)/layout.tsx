
import { cookies } from 'next/headers';
import Header from './components/Header'
import { isEmpty, isNull, isUndefined } from 'lodash';
import { redirect } from 'next/navigation';
import { RedirectType } from 'next/dist/client/components/redirect';
import { Suspense } from 'react';
import jwt from 'jwt-decode';
import _ from 'lodash';

export interface UserPayload {
  id: number,
  name: string,
  email: string,
  type: string,
  token: string,
}

export function getToken(): string | undefined {
  return cookies().get('happy-pet.token')?.value;
}

export function decodeToken(){  
  let token = getToken();
  if(isEmpty(token)) {
    return undefined;
  }

  return jwt<UserPayload>(token!)
}

export default function AppLayout({children}: {
  children: React.ReactNode
}) {
  const user = decodeToken()
  console.log(user)
  if(isUndefined(user)) {
    redirect('/signin', RedirectType.replace);
  }

  return (
      <>
        <Suspense fallback={<header  className='bg-teal-700 h-20'/>}>
          <Header userName={user.name} pathImage={''} type={user.type}/>
        </Suspense>
         <div className='flex container mx-auto m-5 w-screen h-[calc(100vh-7.5rem)]'>
            {children}
         </div>
      </>
  )
}
