import Box from "../components/Box";
import Button from "@/app/components/Button";
import { isEmpty, isUndefined } from "lodash";
import { decodeToken } from "../layout";
import { getToken } from "../layout";
import Row from "../components/Row/Row";
import Column from "../components/Column";
import Field from "../components/Field";
import { MdNavigateNext } from "react-icons/md"
import { DateTime } from 'luxon'

interface ListScheduling {
  id: number,
  petImage: string,
  petName: string,
  serviceName: string,
  professionalName: string,
  date: string,
  time: number,
}

export default async function ListScheduling() {
  const emptyMessage = 'Clique em agendar para realizar seu primeiro agendamento'
  let schedulings: ListScheduling[] = []
  const token = getToken()
  const user = decodeToken()

  if(!isUndefined(user)){
    const res = await fetch(`${process.env.HOST}/scheduling/client/${user.id}`, {
      method: "GET",
      headers: {
         Authorization: `Bearer ${token}`
      },
      cache: "no-store",
    })

    if(res.ok){
      schedulings = await res.json();
    }
  }
  
  function formatScheduleDate(scheduling: ListScheduling): string {
      return DateTime.fromISO(scheduling.date, {locale: 'pt-BR'}).toFormat('dd/MM/yyyy').concat(' ').concat(scheduling.time.toPrecision(2)).concat(':00');
  }


  return (
      <>
        {
          !isEmpty(schedulings)
          ? schedulings.map( scheduling => 
            <Row key={scheduling.id}>
              <Column>
                <Field type="profile" pathImage={scheduling.petImage} value={scheduling.petName}/>
              </Column>
              <Column>
                <Field type="text" value={scheduling.serviceName}/>
              </Column>
              <Column>
                <Field type="text" value={scheduling.professionalName}/>
              </Column>
              <Column>
                <Field type="text" value={formatScheduleDate(scheduling)}/>
              </Column>
              <Column flexType="flex-none">
                <button className="flex items-center text-center align-middle justify-center w-full h-full">
                  <MdNavigateNext className="text-3xl text-teal-800"/>
                </button>
              </Column>
            </Row>
          )
         : <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
               {emptyMessage}
            </div> 
        }
      </>
  )
}

