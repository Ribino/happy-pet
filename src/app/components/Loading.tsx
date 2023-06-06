import { isNumber } from "lodash";
import { AiOutlineLoading } from "react-icons/ai";

interface Props {
   height?: number,
   width?: number
}

export default function Loading(props: Props) {
   const height = isNumber(props.height) ? props.height : 20
   const width = isNumber(props.width) ? props.width : 20

   return ( 
      <div className="flex w-full h-full items-center justify-center">
         <AiOutlineLoading className={`h-${height} w-${width} motion-safe:animate-spin p-1`}/>
      </div>
)}