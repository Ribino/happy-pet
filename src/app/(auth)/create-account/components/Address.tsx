import InputForm from "@/app/components/InputForm";
import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";
import { TbRegistered } from "react-icons/tb";

interface Props {
   register: UseFormRegister<any>,
   validateErrors: FieldErrors<FieldValues>
}

export default function Address(props: Props) {
   const cepError =  props.validateErrors.cep?.message?.toString()
   const addressError =  props.validateErrors.address?.message?.toString()
   const districtError =  props.validateErrors.district?.message?.toString()

   return (
      <>
         <h2 className="mb-10 text-orange-500 text-center"> Para finalizar, informe seu endereço </h2>
         <div className="flex flex-col gap-y-5">
            <InputForm focus label="CEP" name="cep" type="text" register={props.register} showError errorMessage={cepError}/>
            <InputForm label="Endereço" name="address" type="text" register={props.register} showError errorMessage={addressError}/>
            <InputForm label="Bairro" name="district" type="text" register={props.register} showError errorMessage={districtError}/>
         </div>
      </>
   )
}