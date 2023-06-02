'use client'

import Button from "@/app/components/Button"
import InputForm from "@/app/components/InputForm"
import { useRouter } from "next/navigation"
import { setCookie } from "nookies"
import { useForm } from "react-hook-form"

interface DataUser {
  email?: string
  password?: string
}

export default async function Login() {
  const{ register, handleSubmit, formState } = useForm<DataUser>()
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
    console.log(res)
    if(res.ok) {
       const body = await res.json()    
       setCookie(undefined, "happy-pet.token", body.access_token, { 
          maxAge: 60*60*3 // 3 hours
       })
       
       return route.refresh()
    }
    alert('Usuário não existe, crie um para usar nosso sistema')
 }

  return (
    <form className="flex flex-col gap-y-4" onSubmit={handleSubmit(SignIn, () => console.log('invalid'))} noValidate >
      <InputForm label="Email" name="email" type="email" register={register}/>
      <InputForm label="Senha" name="password" type="password" register={register}/>
      <Button className="mt-6 !w-full" type="submit">Entrar</Button>
    </form>
  ) 
}