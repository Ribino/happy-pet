import InputForm from "@/app/components/InputForm";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
   register: UseFormRegister<FieldValues>
}

export default function User(props: Props) {
   return (
      <div className="grid gap-y-5">
         <InputForm className="col-span-2" label="Nome" name="nome" type="text" required register={props.register}/>   
         <InputForm className="col-span-2" label="Senha" name="password" type="password" required register={props.register}/>
         <InputForm className="col-span-2" label="Confirmar Senha" name="password" type="password" required register={props.register}/>
      </div>
   )
}