'use client'
import { UserPayload } from "@/app/(app)/layout";
import { isEmpty } from "lodash";
import { parseCookies, destroyCookie } from "nookies";
import { useState } from "react";
import jwt from 'jwt-decode';
import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

export function ForceUpdate() {
   const [value, setValue] = useState(0);
   return () => setValue(value => value + 1);
}

export function getToken(): string {
  const storageCookies = parseCookies()
  return storageCookies['happy-pet.token']
}

export function decodeToken(): { user: UserPayload; token: string; } | undefined {  
  let token = getToken();
  if(isEmpty(token)) {
    return undefined;
  }
  
  const user = jwt<UserPayload>(token)

  return { user , token }
}

export function destroyToken() {
  destroyCookie(null, 'happy-pet.token')
}