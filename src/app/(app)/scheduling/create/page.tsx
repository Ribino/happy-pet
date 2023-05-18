'use client'
import { useState } from "react";
import Button from "@/app/components/Button";
import { isEmpty } from 'lodash';
import SelectPet from "./components/SelectPet";
import WorkInProgress from "@/app/components/WorkInProgress";
import { useRouter } from "next/navigation";



interface Pet {
  id: number,
  pathImage: string,
  name: string,
  race: string,
  age: string,
  type: string,
}

export default function CreateScheduling() {  
  const route = useRouter()
  const [step, setStep] = useState(1);
  const [selectedPet, setSelectedPet] = useState<Pet>()




  function backStep() {
    if(step === 1) {
      return route.push('/scheduling')
    }
    setStep(value => value - 1);
  }

  function renderStep() {
    switch(step) {
      case 1: return <SelectPet selectedPet={selectedPet} setSelectedPet={setSelectedPet}/>
      default: return <WorkInProgress/>
    }
  }

   return (
     <div className="flex flex-col w-full items-center gap-y-20">
      <div>
         <div className="rounded-full w-12 h-12 bg-slate-500"> </div>
      </div>
        {renderStep()}
       <div className="flex gap-4">
        <Button secundary action={backStep}> { step == 1 ? 'Cancelar' : '< Voltar' }</Button>
        <Button disabled={isEmpty(selectedPet)} action={() => setStep(value => value + 1)}> Avançar {'>'} </Button>
       </div>
     </div>
   )
 }
 