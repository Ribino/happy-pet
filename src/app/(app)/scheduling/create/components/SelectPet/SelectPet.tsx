'use client'
import Box from "@/app/(app)/components/Box";
import { Dispatch, SetStateAction, Suspense } from "react";
import { Scheduling } from "../../page";
import Loading from "@/app/components/Loading";
import ListPet from "./ListPet";

interface Props {
   scheduling: Scheduling | undefined
   setScheduling: Dispatch<SetStateAction<Scheduling | undefined>>
}

export interface Pet {
   id: number,
   pathImage: string,
   name: string,
   race: string,
   birthdate: string,
   type: string,
}

export default function SelectPet(props: Props) { 
   const {scheduling, setScheduling} = props;
   const emptyMessage = "Nenhum Pet cadastrado no momento"
   
      
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
            <Suspense fallback={<Loading/>}>      
               <ListPet onSelected={onSelected} isPetSelected={isPetSelected}/>
            </Suspense>
       </Box>
      </>
   )
}