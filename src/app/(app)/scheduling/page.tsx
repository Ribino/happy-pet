import Box from "../components/Box";
import Button from "@/app/components/Button";
import ListScheduling from "./ListScheduling";
import { Suspense } from "react";
import Loading from "@/app/components/Loading";

interface ListScheduling {
  id: number,
  petImage: string,
  petName: string,
  serviceName: string,
  professionalName: string,
  date: string,
  time: number
}

export default async function Scheduling() {

  return (
    <main className="w-full h-full">
    <div className="flex flex-col px-52 gap-y-4 items-end w-full h-full">
      <Button redirect="/scheduling/create"> Agendar </Button>
      <Box className="w-full h-3/4" headerTitle="Agendamentos">
        <Suspense fallback={<Loading/>}>
          {/* @ts-expect-error */}
          <ListScheduling  />
        </Suspense>
      </Box>
    </div>
        
    </main>
  )
}

