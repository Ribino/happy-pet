import Button from "@/app/components/Button";
import WorkInProgress from "@/app/components/WorkInProgress";
import { Suspense } from "react";
import Box from "../components/Box";

export default function Pets() {
  return (
    <main className="w-full h-full">
    <div className="flex flex-col px-52 gap-y-4 items-end w-full h-full">
      <Button> Cadastrar </Button>
      <Box className="w-full !h-4/5" headerTitle="Pet" emptyMessage="Clique em cadastrar para adicionar seu primeiro Pet"/>
    </div>
        
    </main>
  )
}
