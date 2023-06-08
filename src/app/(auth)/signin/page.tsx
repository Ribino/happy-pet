import Link from "next/link";
import Login from "./components/Login";
import { cookies } from "next/headers";
import { isEmpty } from "lodash";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";

export default function SignIn() {
   
   const token = cookies().get('happy-pet.token')?.value
   if (!isEmpty(token)) {
      return redirect('/')
   }

   return (
      <div className="">
         <h1 className="flex justify-center text-3xl font-semibold text-teal-800 mb-14">Olá, seja bem vindo! </h1>
         <Suspense fallback={<Loading/>}>
            {/*@ts-expect-error */}
            <Login />
         </Suspense>
         <div className="flex justify-center my-3 gap-x-2 text-sm">
            <span>Não tem cadastro?</span>
            <Link className="text-orange-400 hover:text-orange-500 transition-all underline" href="/create-account">Registre-se</Link>
         </div>
         <Link className="flex underline text-orange-400 hover:text-orange-500 text-sm justify-center" href={''}>Esqueceu a senha?</Link>
      </div>
   )
}