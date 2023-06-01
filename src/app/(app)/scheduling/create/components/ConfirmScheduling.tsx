import { Dispatch, SetStateAction } from "react"
import { Scheduling } from '../page';
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import Row from "@/app/(app)/components/Row/Row";
import moment from "moment";

interface Props {
   scheduling: Scheduling
}

export default function ConfirmScheduling(props: Props) {
   const { pet, service, professional, date } = props.scheduling

   return (
      <div className="flex flex-col gap-10 justify-center items-center w-full">
         <div className="grid w-96">
            <Field className="!text-lg font-semibold" type="text" value={'Agendar para'}/>
            <Row applyShadow>
               <Column>
                  <Field type="profile" value={pet?.name} pathImage={pet?.pathImage}/>
               </Column>
            </Row> 
         </div>
         <div className="grid w-96">
            <Field className="!text-lg font-semibold" type="text" value={'O Serviço'}/>
            <Row applyShadow>
               <Column flexType="flex-none" className="!py-5 !px-2">
                  <Field type="price" value={service?.price} />
               </Column>
               <Column>
                  <Field type="text" value={service?.name} />
               </Column>
            </Row>
         </div>
         <div className="grid w-96">
            <Field className="!text-lg font-semibold" type="text" value={'Com o Profissional'}/>
            <Row applyShadow>
               <Column>
                  <Field type="profile" value={professional?.name} pathImage={professional?.pathImage}/>
               </Column>
            </Row>
         </div>
         <span className="flex italic text-xl text-zinc-600"> Dia {moment(date).format('DD/MM/yyyy')} ás <span className="text-orange-400 text-xl ml-2">{professional?.availableHour}:00h</span>? </span>
      </div>
   )
}