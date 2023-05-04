import { InputHTMLAttributes, MutableRefObject } from "react"
import { UseFormRegister, FieldValues } from "react-hook-form"

interface Props {
   name: string
   label?: string
   type? : string
   placeholder?: string
   disabled?: boolean
   register: UseFormRegister<FieldValues>
   className?: string,
   focus?: boolean,
   showError?: boolean
   errorMessage?:string
}

export default function InputForm(props: Props) {
   return (
      <div className={`flex flex-col gap-y-1 w-full ${props.className ?? ''}`}>
            <label className="text-zinc-500">{props.label}</label>
            <input type={props.type}  {...props.register(props.name)} placeholder={props.placeholder} 
               disabled={props.disabled} autoFocus={props.focus} lang="pt-br"
               className={`peer border border-zinc-200 rounded-md shadow-md px-2 py-1 outline-teal-800`} />
            <span className={`${props.showError ? 'visible' : 'invisible'} transition-all text-sm text-red-500 font-semibold`}>{props.errorMessage}</span>
      </div>
   )
}