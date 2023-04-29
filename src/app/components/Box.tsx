import { isEmpty } from "lodash";
import { ReactNode } from "react";

interface Props {
   headerTitle?: string
   emptyMessage?: string
   children?: ReactNode
   className?: string
}

export default function Box(props: Props) {
   const shouldDisplayHeader = !isEmpty(props.headerTitle);
   const emptyInfo = isEmpty(props.children);
   return (
   <>
      <div className={`flex flex-col drop-shadow-lg border border-zinc-300 rounded-3xl overflow-hidden h-full ${props?.className ?? ''}`}>
         {shouldDisplayHeader && (
            <div className="h-24 bg-zinc-200 flex justify-center items-center">
               <span className="font-bold text-xl">{props.headerTitle}</span>
            </div>
         )}

         <div className="bg-zinc-100 overflow-auto h-full">
         {emptyInfo  
            ?  <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
                  {props.emptyMessage}
               </div>
            :  props.children
         }
      </div>
      </div>
   </>
   )
}
