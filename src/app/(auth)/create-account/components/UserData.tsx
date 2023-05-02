import InputForm from "@/app/components/InputForm";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
   register: UseFormRegister<FieldValues>
}

export default function UserData(props: Props) {
   return (
      <div className="grid gap-y-5">
         <InputForm label="CPF" name="cpf" type="text" required register={props.register}/>
         <InputForm label="Telefone" name="phone" type="phone" required register={props.register}/>
         <InputForm label="Data Nascimento" name="birthday" type="date" required register={props.register}/>
      </div>
   )
}