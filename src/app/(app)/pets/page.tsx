import WorkInProgress from "@/app/components/WorkInProgress";
import { Suspense } from "react";

export default function Pets() {
  return (
    <main className="flex h-full w-full justify-center items-center">
      <Suspense fallback={<>Loading...</>}>
        <WorkInProgress/>
      </Suspense>
    </main>
  )
}
