import { MdCalendarMonth } from "react-icons/md";

interface Props {
   actual: boolean
   choosed: boolean
}

export default function StepChooseDate(props: Props) {
   let iconStyle = 'text-zinc-500';
   let backgroundIconStyle = 'bg-zinc-200';
   
   if(props.actual) {
      iconStyle = 'text-teal-700'
      backgroundIconStyle = 'bg-white'
   }

   if(props.choosed) {
      iconStyle = 'text-white'
      backgroundIconStyle = 'bg-teal-700'
   }

   return (
      <>
        <div className={`flex justify-center items-center rounded-full w-12 h-12 z-10 transition-all
            ${backgroundIconStyle}`}> 
            <MdCalendarMonth className={`w-2/4 h-max transition-all ${iconStyle}`} />
         </div>
      </>
   )
}