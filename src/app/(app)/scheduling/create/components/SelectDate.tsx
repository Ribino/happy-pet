import { Dispatch, SetStateAction } from "react"
import { Scheduling } from "../page"

interface Props {
   scheduling: Scheduling | undefined
   setScheduling: Dispatch<SetStateAction<Scheduling | undefined>>
}

export interface Professional {
   id: number,
   name: string
}

export default function SelectDate() {
   return (
      <>
      </>
   )
}