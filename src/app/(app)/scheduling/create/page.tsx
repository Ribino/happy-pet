"use client";
import { useState } from "react";
import Button from "@/app/components/Button";
import { isEmpty } from "lodash";
import SelectPet, { Pet } from "./components/SelectPet";
import WorkInProgress from "@/app/components/WorkInProgress";
import { useRouter } from "next/navigation";
import SelectService, { Service } from "./components/SelectService";

import ProgressStepBar from './components/ProgressStepBar/ProgressStepBar';


export default function CreateScheduling() {  
  const route = useRouter()
  const [step, setStep] = useState(1);
  const [selectedPet, setSelectedPet] = useState<Pet>();
  const [selectedService, setSelectedService] = useState<Service>();
  
  function backStep() {
    if (step === 1) {
      return route.push("/scheduling");
    }
    setStep((value) => value - 1);
  }

  function disableButton(){
    switch(step){
      case 1:
        return isEmpty(selectedPet)
      case 2:
        return isEmpty(selectedService)
      default:
        return false
  }
  }
  function renderStep() {
    switch (step) {
      case 1:
        return (
          <SelectPet
            selectedPet={selectedPet}
            setSelectedPet={setSelectedPet}
          />
        );
      case 2:
        return (
          <SelectService
            selectedService={selectedService}
            setSelectedService={setSelectedService}
            selectedPet={selectedPet}
          />
        );
      default:
        return <WorkInProgress />;
    }
  }

   return (
     <div className="flex flex-col px-52 w-full items-center gap-y-20">
       <ProgressStepBar step={step}/>
        {renderStep()}
       <div className="flex gap-4">
        <Button secundary action={backStep}> { step == 1 ? 'Cancelar' : '< Voltar' }</Button>
        <Button disabled={disableButton()} action={() => setStep(value => value + 1)}> { step == 4 ? 'Confirmar' : 'Avançar >' } </Button>
       </div>
     </div>
   )
 }
 
