import { MdCalendarMonth, MdOutlineCleaningServices, MdPets } from "react-icons/md";

interface Props {
   actual: boolean
   choosed: boolean
}

export default function StepChoosePet(props: Props) {
   let iconStyle = 'text-zinc-500';
   let backgroundIconStyle = 'bg-zinc-200';
   let progressBarStyle = 'bg-zinc-200';
   
   if(props.actual) {
      iconStyle = 'text-teal-700'
      backgroundIconStyle = 'bg-white'
      progressBarStyle = 'bg-zinc-200'
   }

   if(props.choosed) {
      iconStyle = 'text-white'
      backgroundIconStyle = 'bg-teal-700'
      progressBarStyle = 'bg-teal-700'
   }

   return (
      <>
         <div className={`flex justify-center items-center rounded-full w-12 h-12 z-10 transition-all
            ${backgroundIconStyle}`}> 
            <MdPets className={`w-2/4 h-max transition-all ${iconStyle}`} />
         </div>
         <div className={`w-60 h-4 -m-1 transition-all ${progressBarStyle}`}/>
      </>
   )
}