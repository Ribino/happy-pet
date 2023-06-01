"use client";
import { useState } from "react";
import Button from "@/app/components/Button";
import { isEmpty } from "lodash";
import SelectPet from "./components/SelectPet/SelectPet";
import WorkInProgress from "@/app/components/WorkInProgress";
import { useRouter } from "next/navigation";
import SelectService from "./components/SelectService/SelectService";
import ProgressStepBar from './components/ProgressStepBar/ProgressStepBar';
import SelectDate from "./components/SelectDate/SelectDate";
import ConfirmScheduling from "./components/ConfirmScheduling";
import { Professional } from "./components/SelectDate/ListProfessional";
import { Service } from "./components/SelectService/ListService";
import { Pet } from "./components/SelectPet/ListPet";
import { getToken } from "../../components/Utils";

export interface Scheduling {
  pet?: Pet,
  service?: Service,
  observation?: string,
  professional?: Professional,
  date?: Date
}

export default function CreateScheduling() {  
  const route = useRouter()
  const [step, setStep] = useState(1);
  const [scheduling, setScheduling] = useState<Scheduling>();
 
  function backStep(): void {
    if (step === 1) {
      return route.push("/scheduling");
    }
    setStep((value) => value - 1);
  }

  async function nextStep() {
    if(step === 4) {
      if(await createScheduling()) {
        return route.push("/scheduling");
      }
      alert('Erro interno ao criar o agendamento, por favor tente mais tarde')
      return;
    }
    setStep((value) => value + 1);
  }

  async function createScheduling(): Promise<boolean> {
    const token = getToken();
   
    if(!isEmpty(token)) {
      const createScheduling = {
        date: scheduling?.date,
        start: scheduling?.professional?.availableHour,
        end: (scheduling?.professional?.availableHour! + scheduling?.service?.time!),
        petId: scheduling?.pet?.id,
        professionalId: scheduling?.professional?.id,
        serviceId: scheduling?.service?.id
      }
     
      const res = await fetch(`${process.env.HOST}/scheduling`, {
        method: "POST",
        headers: {
           "Authorization": `Bearer ${token}`,
           "Content-Type": "application/json" 
        },
        body: JSON.stringify(createScheduling)
      })
     
      return res.ok
    }
    return false
  }

  function disableButton():boolean{
    switch(step){
      case 1:
        return isEmpty(scheduling?.pet)
      case 2:
        return isEmpty(scheduling?.service)
      case 3:
        return isEmpty(scheduling?.professional)
      default:
        return false
  }
  }
  function renderStep():JSX.Element {
    switch (step) {
      case 1:
        return (
          <SelectPet
            scheduling={scheduling}
            setScheduling={setScheduling}
          />
        );
      case 2:
        return (
          <SelectService
            scheduling={scheduling}
            setScheduling={setScheduling}
          />
        );
      case 3:
        return (
          <SelectDate 
            scheduling={scheduling}
            setScheduling={setScheduling}
          />
        );
      case 4: 
          return (
            <ConfirmScheduling scheduling={scheduling!}/>
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
        <Button disabled={disableButton()} action={nextStep}> { step == 4 ? 'Confirmar' : 'Avançar >' } </Button>
       </div>
     </div>
   )
 }
 

