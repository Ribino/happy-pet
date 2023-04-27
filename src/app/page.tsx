import Box from "./components/Box";
import Row from "./components/Row";
import { TbCat, TbDog } from 'react-icons/tb';
import Image from 'next/image';

export default function Home() {
  const data = [['11:00',  <Image className=" rounded-full" src={`/minicraqboqueteiro.jpg`} alt="Profile" width={46} height={46}/>  ,'Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', <TbDog/>],
                ['11:00', <Image className=" rounded-full" src={`/minicraqboqueteiro.jpg`} alt="Profile" width={46} height={46}/> ,'Kellinguiça', 'Banho & Tosa Higiênica', 'Floquinho', <TbCat/>]]
  return (
    <main className="h-screen">
      <div className="grid grid-cols-2 gap-y-20 gap-x-20 mt-10 h-3/5">
       <Box headerTitle="Agendamentos"/>
       <Box headerTitle="Detalhes">
        {
          data.map( (object, index) =>
            <Row values={object} key={index} highlightFirstColumn={true} />
          ) 
        }
       </Box>
      </div>
    </main>
  )
}

