import StepChoosePet from "./StepChoosePet";
import StepChooseService from "./StepChooseService";
import StepChooseDate from "./StepChooseDate";

interface Props {
   step: number
}

export default function ProgressStepBar({step}: Props) {
   
   return (
      <>
         <div className="flex flex-row items-center">
            <StepChoosePet actual={step == 1} choosed={step > 1}/>
            <StepChooseService actual={step == 2} choosed={step > 2}/>
            <StepChooseDate actual={step == 3} choosed={step > 3} />
         </div>
      </>
   )
}