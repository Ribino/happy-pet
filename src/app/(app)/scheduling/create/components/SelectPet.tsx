'use client'
import Box from "@/app/(app)/components/Box";
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
   selectedPet: Pet | undefined
   setSelectedPet: Dispatch<SetStateAction<Pet | undefined>>
}

interface Pet {
   id: number,
   pathImage: string,
   name: string,
   race: string,
   age: string,
   type: string,
}

export default function SelectPet(props: Props) { 
   const pets = [{
      id: 2,
      pathImage: "",
      name: "Alfredo Miguel",
      race: "Golden Retriever",
      age: "2 anos e 6 meses",
      type: "DOG",
    }]
  
    
    function onSelected(index: number) {
      props.setSelectedPet(isPetSelected(pets[index]) ? undefined : pets[index]) 
    }
  
    function isPetSelected(pet: Pet): boolean {
      return props.selectedPet?.id == pet.id
    }
   return (
      <>
         <Box emptyMessage="Nenhum Pet cadastrado no momento" headerTitle="Meus Pets">
            {
               pets.length > 0 && 
               pets.map((object, index) => 
                  <SelectRow key={index} numberOfColumns={pets.length} selected={isPetSelected(object)} onSelected={() => onSelected(index)}> 
                     <Column flexType="flex-none">
                        <Field type="profile" pathImage={object.pathImage} value={object.name} />
                     </Column>
                     <Column >
                        <Field type="text" value={object.race} />
                     </Column>
                     <Column >
                        <Field type="text" value={object.age} />
                     </Column>
                     <Column flexType="flex-none">
                        <Field type={object.type}/>
                     </Column>
                  </SelectRow>
               )
            }
       </Box>
      </>
   )
}