import InputForm from "@/app/components/InputForm";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

interface Props {
   register: UseFormRegister<any>,
   validateErrors: FieldErrors<FieldValues>
}

export default function User(props: Props) {
   const nameError =  props.validateErrors.name?.message?.toString()
   const passwordError =  props.validateErrors.password?.message?.toString()
   const passwordConfirmError =  props.validateErrors.passwordConfirm?.message?.toString()
   return (
      <>
      <h2 className="mb-10 text-orange-500 text-center">Agora, informe seus dados de usuário </h2>
      <div className="flex flex-col gap-y-5">
         <InputForm focus className="col-span-2" label="Nome" name="name" type="text" register={props.register} showError errorMessage={nameError}/>   
         <InputForm className="col-span-2" label="Senha" name="password" type="password" register={props.register} showError errorMessage={passwordError} />
         <InputForm className="col-span-2" label="Confirmar Senha" name="passwordConfirm" type="password" register={props.register} showError errorMessage={passwordConfirmError}/>
      </div>
      </>
   )
}