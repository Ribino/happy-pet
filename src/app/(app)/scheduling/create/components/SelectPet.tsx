'use client'
import Box from "@/app/(app)/components/Box";
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import { Dispatch, SetStateAction } from "react";
import jwt from 'jwt-decode'
import { parseCookies } from "nookies";
import { Scheduling } from "../page";

interface Props {
   scheduling: Scheduling | undefined
   setScheduling: Dispatch<SetStateAction<Scheduling | undefined>>
}

export interface Pet {
   id: number,
   pathImage: string,
   name: string,
   race: string,
   age: string,
   type: string,
}

export default function SelectPet(props: Props) { 
   const {scheduling, setScheduling} = props;
   const emptyMessage = "Nenhum Pet cadastrado no momento"

   // const res = fetch(`${process.env.HOST}/pet/client/${user?.id}`, {
   //    method: "GET",
   //    headers: {

   //    },
   // })
   
   const pets = [{
      id: 2,
      pathImage: "",
      name: "Alfredo Miguel",
      race: "Golden Retriever",
      age: "2 anos e 6 meses",
      type: "DOG",
    }]

    const petsEmpty:Pet[] = [] 
  
    
    function onSelected(pet: Pet) {
      const newScheduling = {
         pet: isPetSelected(pet) ? undefined : pet
      }
      setScheduling(newScheduling);
    }
  
    function isPetSelected(pet: Pet): boolean {
      return scheduling != null && scheduling.pet?.id == pet.id
    }
   return (
      <>
         <Box emptyMessage={emptyMessage} headerTitle="Meus Pets" className="w-full">
            {
               pets.map((pet) => 
                  <SelectRow onSelected={() => onSelected(pet)} selected={isPetSelected(pet)}>
                     <Column>
                        <Field type="profile" value={pet.name} pathImage={pet.pathImage}/> 
                     </Column>
                     <Column>
                        <Field type="text" value={pet.race}/> 
                     </Column>
                     <Column>
                        <Field type="text" value={pet.age}/> 
                     </Column>
                     <Column flexType="flex-none">
                        <Field type={pet.type}/> 
                     </Column>
                     
                  </SelectRow>
               )   
            }
       </Box>
      </>
   )
}