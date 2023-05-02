'use client'
import Button from "@/app/components/Button";
import Loading from "@/app/components/Loading";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md"
import { useRouter } from "next/navigation";
import Email from "./Email";
import User from "./User";
import UserData from "./UserData";
import Address from "./Address";

export default function FormCreateUser() {
   const route = useRouter();
   const [step, setStep] = useState(1)
   const loadingRef = useRef(false)
   const [loading, setLoading] = useState(false)
   const {register , handleSubmit}= useForm()
   
   function handleSubmitForm(data: any) {
      console.log(data)
      route.push('/signin')
   }

   async function validateStep() {
      setLoading(true)
      await setTimeout(() => {
         setStep((value) => value + 1)
         setLoading(false)
      },1000)
   }


   function renderSteps(step: number) {
      switch(step) {
         case 1:
            return <Email register={register}/>  
         case 2:
            return <User register={register}/>
         case 3:
            return <UserData register={register} />
         case 4:
            return <Address register={register} />
      }
   }

   return (
      <div className="w-5/6 h-full">
         <button disabled={step === 1} className="text-teal-800 text-3xl disabled:text-teal-800/30" onClick={() => setStep((value) => value - 1)}> 
            <MdOutlineNavigateBefore/>
         </button>
         <form className="px-12 my-2 w-full h-full transition-all" onSubmit={handleSubmit(handleSubmitForm)}>
           
               {
                  renderSteps(step)
               }
               <div className="flex justify-center mt-14">
                  {
                     step == 4 
                     ?  <Button className="!w-fit" type="submit"> Cadastrar </Button>
                     :  <Button className="!rounded-full !w-12 !h-12 !p-0" type="button" action={() => validateStep()}>
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


