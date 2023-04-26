import Box from "./components/box";

export default function Home() {
  return (
    <main className="h-screen">
      <h1 className="flex items-center justify-center"> Home Page </h1>

      <div className="grid grid-cols-2 gap-y-20 gap-x-20 m-10 h-3/5">
       <Box headerTitle="Agendamentos">
       </Box>
       <Box headerTitle="Detalhes"/>
      </div>
    </main>
  )
}
