import InputForm from "@/app/components/InputForm";
import { UseFormRegister, FieldValues } from "react-hook-form";

interface Props {
   register: UseFormRegister<FieldValues>
}

export default function Email(props: Props) {
   return (
      <>
         <InputForm className="w-full" label="Email" name="email" type="email" required register={props.register}/>
      </>
   )
}