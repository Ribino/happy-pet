interface Props {
   className?:string,
   type: string,
   value?:string,
   label?:string
}

enum InputTypes {
   TEXT = 'text',
   NUMBER = 'number',
   TEXT_AREA = 'textArea',
   SELECT_ITEM = 'selectItem',
   SELECT_MULTIPLE = 'selectMultiple',
   RADIO_BUTTON = 'radioButton'
}



export default function Field(props: Props) {

   return (
      <>  
         {generateFied(props.type, props.value, props.label, props.className)} 
      </>
   )
}

function generateFied(type: string, value?: string, label?: string, className?: string) {
   switch(type) {
      case InputTypes.TEXT: 
            return <div className="flex flex-col"> 
                     <label>{label}</label>
                     <input type="text" className={`border rounded-md shadow-lg border-zinc-400 w-64`} value={value}/>
                   </div> 
      default: 
            return <div className='text-red-600'> type do not exists </div>;
   }
}