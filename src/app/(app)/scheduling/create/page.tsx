'use client'
import { useState } from "react";
import Button from "@/app/components/Button";
import { isEmpty } from 'lodash';
import SelectPet from "./components/SelectPet";

interface Pet {
  id: number,
  pathImage: string,
  name: string,
  race: string,
  age: string,
  type: string,
}

export default function CreateScheduling() {  
  const [selectedPet, setSelectedPet] = useState<Pet>()

   return (
     <div>
      <div>
      
      </div>
       <SelectPet selectedPet={selectedPet} setSelectedPet={setSelectedPet}/>
       <div className="flex gap-5">
        <Button secundary>Cancelar</Button>
        <Button disabled={isEmpty(selectedPet)}> Avançar</Button>
       </div>
     </div>
   )
 }
 