'use client'
import Button from "@/app/components/Button"
import InputForm from "@/app/components/InputForm"
import { FormEvent, useRef } from 'react';
import Link from "next/link";
import { useForm } from "react-hook-form"
import { useCookies } from 'react-cookie';
import { rest } from "lodash";
import { redirect, useRouter } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect";

class DataUser {
   email?: string
   password?: string
}

export default function SignIn() {
   
   const user = useRef<DataUser>()
   const{ register, handleSubmit } = useForm()
   const [cookies, setCookie, removeCookie] = useCookies(['user-auth']);
   const route = useRouter()

   async function SignIn(data: DataUser) {
   
      const res = await fetch(`${process.env.HOST}/auth/signin`, {
         headers: {
            "Content-Type": "application/json"
         },
         method: "POST",
         body: JSON.stringify(data),
         mode: "cors",

      });
      console.log(res);
      if(res.ok) {
         res.json().then(body => setCookie("user-auth", body.access_token))
         route.push('/')
         return;
      }
      alert('Usuário não existe, crie um para usar nosso sistema')
   }

   return (
      <div className="">
         <h1 className="flex justify-center text-3xl font-semibold text-teal-800 mb-14">Olá, seja bem vindo! </h1>
         <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(SignIn)} noValidate>
            <InputForm label="Email" name="email" type="email" register={register}/>
            <InputForm label="Senha" name="password" type="password" register={register}/>
            <Button className="mt-6" type="submit">Entrar</Button>
            <div className="flex justify-center gap-x-2 text-sm">
               <span>Não tem cadastro?</span>
               <Link className="text-orange-400 hover:text-orange-500 transition-all underline" href="/create-account">Registre-se</Link>
            </div>
            <Link className="flex underline text-orange-400 hover:text-orange-500 text-sm justify-center" href={''}>Esqueceu a senha?</Link>
         </form>
      </div>
   )
}