'use client'
import Box from "./components/Box";
import Row from "./components/Row/Row";
import Column from "./components/Column";
import Field from "./components/Field";
import Calendar from "./components/Calendar/Calendar";
import { useRef, useState } from "react";

interface Data {
   time: string,
   pathImage: string,
   professionalName: string,
   service: string,
   petName: string,
   petType: string,
   selected: boolean
}  

function ForceUpdate() {
   const [value, setValue] = useState(0);
   return () => setValue(value => value + 1);
}

export default function Home() {
   const update = ForceUpdate()
   const data = useRef<Data[]>(
      [
               //  {
               //     time: '11:00',
               //     pathImage:'kelly-perfil.png',
               //     professionalName: 'Kellinguiça', 
               //     service:'Banho & Tosa Higiênica', 
               //     petName: 'Floquinho',
               //     petType: 'DOG',
               //     selected: false
               //  },
               //  {
               //     time: '11:00',
               //     pathImage:'minicraqboqueteiro.jpg',
               //     professionalName: 'Julio Almeida', 
               //     service:'Banho & Tosa Higiênica', 
               //     petName: 'Leo',
               //     petType: 'CAT',
               //     selected: false
               //  },
               //  {
               //     time: '11:00',
               //     pathImage:'',
               //     professionalName: 'Maria Madalena dos Santos Silva', 
               //     service:'Banho & Tosa Higiênica', 
               //     petName: 'Floquinho',
               //     petType: 'DOG',
               //     selected: false
               //  },
      ]
      )

  function selectRow(index: any) {
      data.current.filter((value) => value.selected).forEach(value => value.selected = false)
      data.current[index].selected = !data.current[index].selected
      update()
  }

  const dataEmpty: any[] = []
  const existData = data.current.length > 0 


  const datesWithInfo = [
      new Date(2023, 4, 10),
      new Date(2023, 4, 16),
      new Date(2023, 5, 23) 
  ]

   return (
      <main className="h-screen w-screen">
         <div className="grid xl:grid-cols-5 lg:grid-cols-1 lg:mx-40 xl:mx-20 gap-y-20 gap-x-20 mt-10 xl:h-[32rem]">
         <Box headerTitle="Agendamentos" emptyMessage="Calendario" className="xl:col-span-2">
            <div className="flex flex-col justify-center items-center 2xl:mx-24 xl:mx-14 lg:mx-36">
               <select placeholder="Filtrar" className="bg-orange-400 text-white h-10 w-full mt-5 rounded-lg border border-zinc-500" >
                  <option>Filtrar</option>
                  <option value="A">A</option>  
                  <option value="B">B</option>
               </select>
               <Calendar hightlightDates={datesWithInfo} disabledDates={[new Date(2023, 4, 20)]}/>
            </div>
         </Box>
         <Box headerTitle="Detalhes" emptyMessage="Selecione uma data para visualizar os detalhes" className="xl:col-span-3 xl:col-start-3 ">
            {
               existData &&
               data.current.map( (object, index) =>
                  <Row numberOfColumns={dataEmpty.length} key={index}>
                     <Column flexType="flex-none" applyHighlite={true}>
                        <Field type="text" value={object.time}/>
                     </Column>
                     <Column>
                        <Field type="profile" pathImage={object.pathImage} value={object.professionalName} />
                     </Column>
                     <Column>
                        <Field type="text" value={object.service}/>
                     </Column>
                     <Column>
                        <Field type="text" value={object.petName}/>
                     </Column>
                     <Column flexType="flex-none">
                        <Field type={object.petType} className={`${object.selected ? 'text-orange-200' : 'text-orange-400'}`}/>
                     </Column>
                  </Row>  
               )
            }
         </Box> 
         </div>
      </main>
   )
}

