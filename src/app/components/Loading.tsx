import { AiOutlineLoading } from "react-icons/ai";

export default function Loading() {
   return ( 
      <div className="flex w-full h-full items-center justify-center">
         <AiOutlineLoading className="h-20 w-20 motion-safe:animate-spin p-1"/>
      </div>
)}