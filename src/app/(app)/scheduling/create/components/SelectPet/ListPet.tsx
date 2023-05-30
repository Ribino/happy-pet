
import jwt from 'jwt-decode'
import { parseCookies } from "nookies";
import { isEmpty, isUndefined } from "lodash";
import {DateTime} from 'luxon';
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import { useRef } from 'react';
import { ForceUpdate, decodeToken, getToken } from '../../page';

interface Props {
   onSelected: (pet: Pet) => void,
   isPetSelected: (pet: Pet) => boolean
}

export interface Pet {
   id: number,
   pathImage: string,
   name: string,
   race: string,
   birthdate: string,
   type: string,
}

export default function ListPet(props: Props) { 
   const update = ForceUpdate();
   const { onSelected, isPetSelected } = props;
   
   const pets = useRef<Pet[]>();
   
   async function getUserPets() {
      const decode = decodeToken();
      if(!isUndefined(decode)) {
         const { user, token } = decode;
         const res = await fetch(`${process.env.HOST}/pet/client/${user.id}`, {
            method: "GET",
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         pets.current = await res.json();
         update();
      }
   }

   if (isEmpty(pets.current)) {
      getUserPets();
   }
   

   function getPetAge(jsonBirthdate: string): string{
      const now = DateTime.local({locale: 'pt-br'});
      const birthdate = DateTime.fromISO(jsonBirthdate, {locale: 'pt-br'})
      const duration = now.diff(birthdate);

      return duration.shiftTo("years", "months").toHuman({maximumFractionDigits: 0}).replace(',', ' e');
   }
    
   return (
      <>
         {
            pets.current && 
            pets.current.map((pet) => 
               <SelectRow
                  key={pet.id} 
                  onSelected={() => onSelected(pet)} 
                  selected={isPetSelected(pet)}>
                  <Column>
                     <Field type="profile" value={pet.name} pathImage={pet.pathImage}/> 
                  </Column>
                  <Column>
                     <Field type="text" value={pet.race}/> 
                  </Column>
                  <Column>
                     <Field type="text" value={getPetAge(pet.birthdate)}/> 
                  </Column>
                  <Column flexType="flex-none">
                     <Field type={pet.type}/> 
                  </Column>
                  
               </SelectRow>
            )   
         }
      </>
   )
}