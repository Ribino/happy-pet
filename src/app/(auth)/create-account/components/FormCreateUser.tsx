'use client'
import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import { useRouter } from "next/navigation";
import Email from "./Email";
import User from "./User";
import UserData from "./UserData";
import Address from "./Address";
import { date, object, ref, string } from "yup";
import { yupResolver } from '@hookform/resolvers/yup'
import { isEmpty } from "lodash";


const createUserFormSchema = object({
   email: string().required('Por favor, preencher o e-mail').email('Informe um formato de e-mail válido'),
   name: string().required('Por favor, preencha seu nome'),
   password: string()
   .min(8, 'A senha deve ter no inimo de 8 caracteres')
   .matches(/[a-z]/, 'Pelo menos uma letra minuscula')
   .matches(/[A-Z]/, 'Pelo menos uma letra maiscula')
   .matches(/[a-zA-Z]+[^a-zA-Z\s]+[^0-9]/, 'Pelo menos um caracter especial (@,!,#, etc).'),
   passwordConfirm: string().equals([ref('password')], "Senhas diferentes"),
   cpf: string().length(14, 'CPF precisa ter 12 números').required('Por favor, preencher o CPF'),
   phone: string().required('Por favor, preencher o telefone'),
   birthday: date().typeError('O campo precisa ser uma data'),
   cep: string().length(9, "CEP precisa ter 5 números"),
   address: string(),
   district: string()
})

export default function FormCreateUser() {
   const route = useRouter();
   const [step, setStep] = useState(1)
   const [loading, setLoading] = useState(false)
   const {
      register, 
      handleSubmit,
      formState: {errors}
   } = useForm({
         resolver: yupResolver(createUserFormSchema),
         mode: "onBlur"
         
   })

   function handleSubmitForm(data: any) {
      if(!isEmpty(errors)) return;
      console.log(data)
      route.push('/signin')
   }

   async function nextStep() {
      setStep((value) => value + 1);
   }

   function disableNextButton(): boolean {
      if(step === 1 && !isEmpty(errors.email?.message)) {
         return true;
      }
      if(step === 2 && ![errors.name?.message, errors.password?.message, errors.passwordConfirm?.message].every(value => isEmpty(value))) {
         return true;
      }
      if(step === 3 && ![errors.cpf?.message, errors.phone?.message, errors.birthday?.message].every(value => isEmpty(value))) {
         return true;
      }
      return false;
   }


   function renderSteps() {
      switch(step) {
         case 1:
            return <Email validateErrors={errors} register={register} />  
         case 2:
            return <User validateErrors={errors} register={register}/>
         case 3:
            return <UserData validateErrors={errors} register={register} />
         case 4:
            return <Address validateErrors={errors}  register={register} />
      }
   }

   return (
      <div className="w-5/6 h-full">
         <button disabled={step === 1} className="text-teal-800 text-3xl disabled:text-teal-800/30" onClick={() => setStep((value) => value - 1)}> 
            <MdOutlineNavigateBefore/>
         </button>
         <form className="px-12 my-2 w-full h-full transition-all" onSubmit={handleSubmit(handleSubmitForm)} noValidate>
           
               {
                  <React.Fragment>
                     {renderSteps()}     
                  </React.Fragment>
               }
               <div className="flex justify-center mt-14">
                  {
                     step == 4 
                     ?  <Button className="" type="submit"> Criar Conta </Button>
                     :  <Button disabled={disableNextButton()} className="!rounded-full !w-12 !h-12 !p-0" type="button" action={() => !loading && nextStep()}>
                              {loading
                                 ? <Loading />
                                 : <MdOutlineNavigateNext className="h-full w-full" />}
                        </Button>
                  
                  }
               </div>
        
         </form>
      </div>
   )
}

