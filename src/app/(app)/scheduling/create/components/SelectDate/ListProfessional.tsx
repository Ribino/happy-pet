import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import { isEmpty, isUndefined, update } from "lodash";
import { useRef } from "react";
import { ForceUpdate, getToken } from "../../../../components/Utils";
import Loading from "@/app/components/Loading";
import useSWR from 'swr'

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

function useProfessional(serviceId: Number | undefined, selectedDate: Date | undefined) {
   const token = getToken();
   const shouldFetch = !(isUndefined(serviceId) || isUndefined(selectedDate) || isEmpty(token))
   const { data, error, isLoading} = useSWR(shouldFetch ? `${process.env.HOST}/professional/available?serviceId=${serviceId}&date=${selectedDate.toISOString()}` : null, 
      (url: string) => fetch(url, {
         method: "GET",
         headers: {
         Authorization: `Bearer ${token}`
         }
      }).then(res => res.json()) 
   )

   return {
      professionalJson: data,
      isLoading,
      error
   }
}

export default function ListProfessional(props: Props) {
   const { onSelected, isProfessionalSelected, selectedDate, selectedServiceId } = props
   const { professionalJson, error, isLoading} =  useProfessional(selectedServiceId, selectedDate)

   if(isUndefined(selectedDate)) {
      return (
         <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
            Escolha uma data
         </div>
      )
   }

   if(isLoading) {
      return (<Loading />)
   }

   if(!isEmpty(error)) {
      return (
         <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
            {error}
         </div>
      )
   }

   let professionals: Professional[] = new Array();
   for(let professionalAvailable of professionalJson) {
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

   if(isEmpty(professionals)) {
      return (
         <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
               Não há profissionais disponíveis para este dia
         </div>
      )
   }

   return( 
   <>
      {
         professionals.map((professional, index) => 
            <SelectRow 
               key={index}
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
      }
   </>
)}