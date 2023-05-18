import Box from "../components/Box";
import Button from "@/app/components/Button";

export default function Scheduling() {
  const emptyMessage = 'Clique em agendar para realizar seu primeiro agendamento'
  return (
    <main className="w-full h-full">
    <div className="flex flex-col gap-y-4 items-end h-full w-full">
      <Button redirect="/scheduling/create"> Agendar </Button>
      <Box className="" headerTitle="Agendamentos" emptyMessage={emptyMessage}>

      </Box>
    </div>
        
    </main>
  )
}

