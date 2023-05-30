"use client";
import { useState } from "react";
import Button from "@/app/components/Button";
import { isEmpty } from "lodash";
import SelectPet, { Pet } from "./components/SelectPet/SelectPet";
import WorkInProgress from "@/app/components/WorkInProgress";
import { useRouter } from "next/navigation";
import SelectService, { Service } from "./components/SelectService/SelectService";
import ProgressStepBar from './components/ProgressStepBar/ProgressStepBar';
import SelectDate, { Professional } from "./components/SelectDate/SelectDate";
import ConfirmScheduling from "./components/ConfirmScheduling";
import { parseCookies } from "nookies";
import { UserPayload } from "../../layout";
import jwt from 'jwt-decode';


export function ForceUpdate() {
   const [value, setValue] = useState(0);
   return () => setValue(value => value + 1);
}

export function getToken(): string {
  const storageCookies = parseCookies()
  return storageCookies['happy-pet.token']
}

export function decodeToken(): { user: UserPayload; token: string; } | undefined {  
  let token = getToken();
  if(isEmpty(token)) {
    return undefined;
  }
  
  const user = jwt<UserPayload>(token)

  return { user , token }
}

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

  function nextStep(): void {
    if(step === 4) {
      return route.push("/scheduling");
    }
    setStep((value) => value + 1);
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
 

