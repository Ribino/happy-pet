import Link from "next/link";
import FormCreateUser from "./components/FormCreateUser";

export default function CreateUserPage() {
   

   return (
      <>
         <h1 className="text-3xl font-semibold text-teal-800"> Crie a sua conta </h1>
         <FormCreateUser/>
         <div className="flex text-sm mt-8 gap-x-2">
            <span>Já tem uma conta?</span>
            <Link className="text-orange-400 hover:text-orange-500 underline" href={'/signin'}>Clique aqui.</Link>
         </div>
      </>
   )
}


