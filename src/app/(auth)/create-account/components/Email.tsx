import InputForm from "@/app/components/InputForm";
import { isEmpty } from "lodash";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { object, string } from "yup";

interface Props {
   register: UseFormRegister<any>,
   validateErrors: FieldErrors<FieldValues>,
   alreadyExists: boolean
}
export default function Email(props: Props) {
   const errorMessage = props.alreadyExists ? "Já existe este e-mail cadastrado no sistema" :  props.validateErrors.email?.message?.toString()
   const showError = !isEmpty(errorMessage)
   return (
      <>
         <h2 className="mb-10 text-orange-500 text-center">Primeiro, informe um e-mail </h2>
         <InputForm focus className="w-full" label="E-mail" name="email" type="email" register={props.register} showError errorMessage={errorMessage}/>
      </>
   )
}