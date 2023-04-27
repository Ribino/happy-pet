import Box from "./components/Box";
import Row from "./components/Row";
import Column from "./components/Column";
import Field from "./components/Field";

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
  return (
    <main className="h-screen w-screen">
      <div className="grid xl:grid-cols-2 lg:grid-cols-1 lg:mx-40 xl:mx-20 gap-y-20 gap-x-20 mt-10 h-3/5 ">
       <Box headerTitle="Agendamentos" emptyMessage="Calendario">
      </Box>
       <Box headerTitle="Detalhes" emptyMessage="Selecione uma data para visualizar os detalhes">
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

