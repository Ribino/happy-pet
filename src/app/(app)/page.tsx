'use client'
import Box from "./components/Box";
import Calendar from "./components/Calendar/Calendar";
import { useState } from 'react';
import { MdCalendarMonth, MdExpandMore } from 'react-icons/md'
import { isUndefined } from "lodash";

interface Data {
   time: string,
   pathImage: string,
   professionalName: string,
   service: string,
   petName: string,
   petType: string,
   selected: boolean
}  

export default function Home() {
   const [selectDate, setSelectedDate] = useState<Date>();
   const emptyMessage = isUndefined(selectDate) ? "Selecione uma data para visualizar os detalhes" : "Não há registros para esta data"

  const datesWithInfo = [
      new Date(2023, 5, 10),
      new Date(2023, 5, 16),
      new Date(2023, 5, 23) 
  ]

   return (
      <main className="w-full">
         <div className="grid xl:grid-cols-5 lg:grid-cols-1 lg:mx-40 xl:mx-20 gap-y-20 gap-x-20 mt-10 xl:h-[32rem] ">
         <Box headerTitle="Agendamentos" emptyMessage="Calendario" className="xl:col-span-2">
            <div className="flex flex-col justify-center items-center 2xl:mx-24 xl:mx-14 lg:mx-36 ">
               <div className="flex px-2 justify-between items-center h-9 w-full mt-5 bg-orange-400 rounded-xl text-white"> 
                  <div className="flex items-center gap-2">
                     <MdCalendarMonth className="text-2xl"/>
                     <span className="text-sm">Ver todos</span>
                  </div>
                  <MdExpandMore />
               </div>
               <Calendar setSelectedDate={setSelectedDate} selectedDate={selectDate} hightlightDates={datesWithInfo} />
            </div>
         </Box>
         <Box headerTitle="Detalhes" emptyMessage={emptyMessage} className="xl:col-span-3 xl:col-start-3">
            {
               // existData &&
               // data.current.map( (object, index) =>
               //    <Row key={index}>
               //       <Column flexType="flex-none" applyHighlite={true}>
               //          <Field type="text" value={object.time}/>
               //       </Column>
               //       <Column>
               //          <Field type="profile" pathImage={object.pathImage} value={object.professionalName} />
               //       </Column>
               //       <Column>
               //          <Field type="text" value={object.service}/>
               //       </Column>
               //       <Column>
               //          <Field type="text" value={object.petName}/>
               //       </Column>
               //       <Column flexType="flex-none">
               //          <Field type={object.petType} className={`${object.selected ? 'text-orange-200' : 'text-orange-400'}`}/>
               //       </Column>
               //    </Row>  
               // )
            }
         </Box> 
         </div>
      </main>
   )
}

