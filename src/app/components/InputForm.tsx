import { InputHTMLAttributes, MutableRefObject } from "react"
import { UseFormRegister, FieldValues } from "react-hook-form"

interface Props {
   name: string
   label?: string
   type? : string
   placeholder?: string
   required?: boolean
   register: UseFormRegister<FieldValues>
   className?: string
}

export default function InputForm(props: Props) {

   return (
      <div className={`flex flex-col gap-y-1 w-full ${props.className ?? ''}`}>
            <label className="text-zinc-500">{props.label}</label>
            <input type={props.type}  {...props.register(props.name)} placeholder={props.placeholder}
               required={props.required}
               className={`peer border border-zinc-200 rounded-md shadow-md px-2 py-1 outline-teal-800`} />
      </div>
   )
}