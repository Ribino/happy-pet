import { Dispatch, SetStateAction, Suspense, useState } from "react"
import { Scheduling } from "../../page"
import Row from "@/app/(app)/components/Row/Row"
import Column from "@/app/(app)/components/Column"
import Field from "@/app/(app)/components/Field"
import Calendar from "@/app/(app)/components/Calendar/Calendar"
import Box from "@/app/(app)/components/Box"
import Loading from "@/app/components/Loading"
import ListProfessional, { Professional } from "./ListProfessional"

interface Props {
   scheduling: Scheduling | undefined
   setScheduling: Dispatch<SetStateAction<Scheduling | undefined>>
}

export default function SelectDate(props: Props) {
   const {scheduling, setScheduling} = props
   const [selectedDate, setSelectedDate] = useState<Date>();


   function onSelectedProfessional(professional: Professional) {
      const newScheduling: Scheduling = { 
        pet: scheduling?.pet,
        service: scheduling?.service,
        date: selectedDate,
        observation: scheduling?.observation,
        professional: isProfessionalSelected(professional) ? undefined : professional
      }
  
      setScheduling(newScheduling);
    }
  
   function isProfessionalSelected(professional: Professional): boolean {
      return scheduling != null && scheduling.professional?.id == professional.id && scheduling.professional.availableHour == professional.availableHour;
   }
   

   return (
      <div className="grid grid-rows-5 grid-flow-col w-full gap-8 justify-center">
         <div className="mt-3 row-span-1 col-span-1 w-96">
            <Row applyShadow>
               <Column applyHighlite flexType="flex-none" className="!py-4">
                  <Field type="price" value={scheduling?.service?.price}/>
               </Column>
               <Column>
                  <Field type="text" value={scheduling?.service?.name}/>
               </Column>
            </Row>
         </div>
         <div className="flex row-span-4 col-span-1 items-center justify-center w-96">
            <Calendar showBackground
               setSelectedDate={setSelectedDate}
               selectedDate={selectedDate}/>
         </div>
         <div className="row-span-1 col-span-1">
            <Row applyShadow>
               <Column>
                  <Field
                     type="profile"
                     value={scheduling?.pet?.name} 
                     pathImage={scheduling?.pet?.pathImage}
                     className="px-1 py-1.5 !text-base"/>
               </Column>
            </Row>
         </div>
         <div className="row-span-4 col-span-1 w-96">
            <Box headerTitle="Profissionais" emptyMessage="Escolha uma data">
               <Suspense fallback={<Loading />}>
                  {/*@ts-ignore*/ }
                  <ListProfessional 
                     isProfessionalSelected={isProfessionalSelected} 
                     onSelected={onSelectedProfessional}
                     selectedDate={selectedDate}
                     selectedServiceId={scheduling?.service?.id} />
               </Suspense>
            </Box>
         </div>
      </div>
   )
}