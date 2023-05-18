import Box from "../components/Box";
import Button from "@/app/components/Button";

export default function Scheduling() {
  const emptyMessage = 'Clique em agendar para realizar seu primeiro agendamento'
  return (
    <main className="h-screen w-screen">
    <div className="flex flex-col gap-4 items-end h-full w-full">
      <Button redirect="/scheduling/create"> Agendar </Button>
      <Box className="h-3/4 w-full" headerTitle="Agendamentos" emptyMessage={emptyMessage}>

      </Box>
    </div>
        
    </main>
  )
}

