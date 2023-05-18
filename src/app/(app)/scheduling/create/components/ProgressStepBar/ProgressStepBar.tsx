import { MdCalendarMonth, MdOutlineCleaningServices, MdPets } from "react-icons/md";
import StepChoosePet from "./StepChoosePet";
import StepChooseService from "./StepChooseService";
import StepChooseDate from "./StepChooseDate";

interface Props {
   step: number
}

export default function ProgressStepBar(props: Props) {

   return (
      <>
         <div className="flex flex-row items-center">
            <StepChoosePet actual={props.step == 1} choosed={props.step > 1}/>
            <StepChooseService actual={props.step == 2} choosed={props.step > 2}/>
            <StepChooseDate actual={props.step == 3} choosed={props.step > 3} />
         </div>
      </>
   )
}