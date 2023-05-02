import { TbCat, TbDog } from "react-icons/tb";
import Image from 'next/image';
import Loading from "@/app/components/Loading";

interface Props {
   className?:string,
   type: string,
   value?:string,
   pathImage?:string,
}

enum FieldTypes {
   TEXT = 'text',
   NUMBER = 'number',
   HOUR = 'hour',
   PROFILE = 'profile',
   ICON_DOG = 'DOG',
   ICON_CAT = 'CAT'
}



export default function Field(props: Props) {

   return (
      <>  
         {generateFied(props.type, props.value, props.className, props.pathImage)} 
      </>
   )
}


function generateFied(type: string, value?: string, className?: string, pathImage?: string) {
   const fieldAdjusts = "flex h-full mx-2 y-2 y-2 justify-center items-center"
   switch(type) {
      case FieldTypes.TEXT: 
            return <span className={`text-xs ${fieldAdjusts}`}>{value}</span>
      case FieldTypes.ICON_DOG: 
            return <TbDog className={`icon text-4xl ${fieldAdjusts} ${className}`}/>
      case FieldTypes.ICON_CAT: 
            return <TbCat className={`icon text-4xl ${fieldAdjusts} ${className}`}/>
      case FieldTypes.PROFILE:
            return  <div className="text-xs flex mx-1 y-1 justify-start items-center">               
                           {getProfileIcon(value, pathImage)}  
                           <span className="pl-4 text-left">{value}</span>
                  </div>
      default: 
            return <div className='text-red-600'> type do not exists </div>;
   }
}

function getProfileIcon(value?: string, pathImage?:string) {
   const shouldDisplayImage = !!pathImage;
   if(shouldDisplayImage) {
      return  <Image className="rounded-full h-10 w-10" src={`/${pathImage}`} alt="Profile" width={42} height={42} />
   }

   return   <div className='h-fit w-fit bg-orange-400 rounded-full'>
               <span className='h-10 w-10 flex items-center justify-center font-medium text-lg text-zinc-100'>{value?.slice(0, 1).toUpperCase()}</span>
            </div>
   
}