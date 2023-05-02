import InputForm from "@/app/components/InputForm";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
   register: UseFormRegister<FieldValues>
}

export default function Address(props: Props) {
   return (
      <div className="grid gap-y-5">
         <InputForm label="CEP" name="cep" type="text" register={props.register} />
         <InputForm label="Endereço" name="address" type="text" register={props.register} />
      </div>
   )
}