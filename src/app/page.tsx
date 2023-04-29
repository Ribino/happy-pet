import Box from "./components/Box";
import Row from "./components/Row";
import Column from "./components/Column";
import Field from "./components/Field";
import Button from "./components/Button";
import Calendar from "./components/Calendar/Calendar";

export default function Home() {
  const dataEmpty: any[] = []
  const data = [
                  ['11:00',  'kelly-perfil.png','Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['12:00', 'minicraqboqueteiro.jpg','Julio', 'Banho & Tosa Higiênica', 'Léo', 'CAT'],
                  ['11:00',  'minicraqboqueteiro.jpg','Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['11:00',  'kelly-perfil.png','Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['11:00',  '','Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['11:00',  'minicraqboqueteiro.jpg','Maria Madalena dos Santos Silva Pinto Saurino Joao Claudio', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['11:00',  '','Maria Madalena dos Santos Silva', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['11:00',  'minicraqboqueteiro.jpg','Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['11:00',  'minicraqboqueteiro.jpg','Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
                  ['11:00',  'minicraqboqueteiro.jpg','Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', 'DOG'],
              ]
  const existData = data.length > 0 


  const datesWithInfo = [
      new Date(2023, 4, 10),
      new Date(2023, 4, 16),
      new Date(2023, 5, 23) 
  ]

   return (
      <main className="h-screen w-screen">
         <div className="grid xl:grid-cols-5 lg:grid-cols-1 lg:mx-40 xl:mx-20 gap-y-20 gap-x-20 mt-10 h-3/6">
         <Box headerTitle="Agendamentos" emptyMessage="Calendario" className="xl:col-span-2">
            <div className="flex flex-col justify-center items-center 2xl:mx-24 xl:mx-14 lg:mx-36">
               <select placeholder="Filtrar" className="bg-orange-400 text-white h-10 w-full mt-5 rounded-lg border border-zinc-500" >
                  <option>Filtrar</option>
                  <option value="A">A</option>  
                  <option value="B">B</option>
               </select>
               <Calendar multipleSelect hightlightDates={datesWithInfo} disabledDates={[new Date(2023, 4, 15)]}/>
            </div>
         </Box>
         <Box headerTitle="Detalhes" emptyMessage="Selecione uma data para visualizar os detalhes" className="xl:col-span-3 xl:col-start-3">
            {
               existData &&
               data.map( (array, index) =>
                  <Row numberOfColumns={array.length} key={index} >
                     <Column flexType="flex-none" applyHighlite={true}>
                        <Field type="text" value={array[0]}/>
                     </Column>
                     <Column>
                        <Field type="profile" value={array[2]} pathImage={array[1]} />
                     </Column>
                     <Column>
                        <Field type="text" value={array[3]}/>
                     </Column>
                     <Column>
                        <Field type="text" value={array[4]}/>
                     </Column>
                     <Column flexType="flex-none">
                        <Field type={array[5]}/>
                     </Column>
                  </Row>  
               )
            }
         </Box> 
         </div>
      </main>
   )
}

