import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import { isEmpty, isUndefined } from "lodash";
import { useRef } from "react";
import { getToken } from "../../../../components/Utils";

interface Props {
   onSelected: (professional: Professional) => void,
   isProfessionalSelected: (professional: Professional) => boolean,
   selectedDate?: Date,
   selectedServiceId?: Number 
 }

export interface Professional {
   id: number,
   name: string,
   pathImage?: string,
   availableHour: number
}

export default async function ListProfessional(props: Props) {
   const { onSelected, isProfessionalSelected, selectedDate, selectedServiceId } = props
   const emptyMessage = isUndefined(selectedDate) ? 'Escolha uma data' : 'Não há profissionais disponíveis para este dia'
   const professionals = useRef<Professional[]>();

   if (!isUndefined(selectedDate)) {
      await getProfessionalsByServiceAndDate();
   }

   function parseResponseJsonToViewList(professionalsAvailableJson: any): Professional[] {
      let professionals: Professional[] = new Array();
      for(let professionalAvailable of professionalsAvailableJson) {
         for(let hour of professionalAvailable.hours) {
            const professional: Professional = {
               id: professionalAvailable.id,
               availableHour: hour,
               name: professionalAvailable.user.name,
               pathImage: professionalAvailable.user.imagePath
            }
            professionals.push(professional)
         }
      }
      return professionals
   }

   async function getProfessionalsByServiceAndDate() {
      const token = getToken();
      if (!isEmpty(token)) {
         const res = await fetch(`${process.env.HOST}/professional/available?serviceId=${selectedServiceId}&date=${selectedDate?.toISOString()}`, {
            method: "GET",
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
      
         if(res.ok) {
            professionals.current = parseResponseJsonToViewList(await res.json())
         }
      }
   }

   return( 
   <>
      {
         !isEmpty(professionals.current)
         ? professionals.current!.map((professional) => 
            <SelectRow 
               key={professional.id}
               onSelected={() => onSelected(professional)} 
               selected={isProfessionalSelected(professional)}>
               <Column applyHighlite flexType="flex-none">
                  <Field type="hour" value={professional.availableHour} />
               </Column>
               <Column className="sm:w-fit md:w-fit lg:w-80 xl:w-96">
                  <Field type="profile" value={professional.name} pathImage={professional.pathImage} />
               </Column>
            </SelectRow>
      )
         :  <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
               {emptyMessage}
            </div>
      }
   </>
)}