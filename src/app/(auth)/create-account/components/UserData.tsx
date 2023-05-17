import InputForm from "@/app/components/InputForm";
import { isEmpty } from "lodash";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface Props {
   register: UseFormRegister<any>,
   validateErrors: FieldErrors<FieldValues>
}

export default function UserData(props: Props) {
   const cpfError =  props.validateErrors.cpf?.message?.toString()
   const birthdayError =  props.validateErrors.birthday?.message?.toString()
   const phoneError =  props.validateErrors.phone?.message?.toString()

   return (
      <>
         <h2 className="mb-10 text-orange-500 text-center"> Precisamos de alguns dados pessoais </h2>
         <div className="flex flex-col gap-y-5">
            <InputForm focus label="CPF" name="cpf" type="text" register={props.register} showError errorMessage={cpfError} />
            <InputForm label="Data Nascimento" name="birthday" type="date" register={props.register} showError errorMessage={birthdayError}/>
            <InputForm label="Telefone" name="phone" type="phone" register={props.register} showError errorMessage={phoneError}/>
         </div>
      </>
   )
}