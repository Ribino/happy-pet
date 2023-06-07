import Link from "next/link";


export default function SuccessfullyCreated() {
 

   return (
      <div className="flex flex-col gap-5 my-44 justify-center items-center w-full">
         <span className="text-3xl text-zinc-700"> Agendamento realizado com sucesso! </span>
         <span className="text-xl text-zinc-500"> Vamos mandar uma mensagem próximo ao dia do agendamento <span className="font-bold text-orange-400">pedindo a sua confirmação</span>!</span>
      </div>
   )
}