import React, { Dispatch, SetStateAction, Suspense } from "react";
import Box from "../../../../components/Box";
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import Textarea from "@/app/components/Textarea";
import { Scheduling } from "../../page";
import Row from "@/app/(app)/components/Row/Row";
import ListService, { Service } from "./ListService";
import Loading from "@/app/components/Loading";

interface Props {
  scheduling: Scheduling | undefined
  setScheduling: Dispatch<SetStateAction<Scheduling | undefined>>
}

export default function SelectService(props: Props) {
  const {scheduling, setScheduling} = props;
  const emptyMessage = "Nenhum serviço cadastrado no momento";

  function onSelected(service: Service) {
    const newScheduling = { 
      pet: scheduling?.pet,
      service: isServiceSelected(service) ? undefined : service
    }

    setScheduling(newScheduling);
  }

  function isServiceSelected(service: Service): boolean {
    return scheduling != null && scheduling.service?.id == service.id;
  }

  return (
    <div className="w-full flex justify-center gap-16">
      <div className="w-full">
        <Box emptyMessage={emptyMessage} headerTitle="Serviços">
          {
            <Suspense fallback={<Loading/>}>
              <ListService isServiceSelected={isServiceSelected} onSelected={onSelected}/>
            </Suspense>
          }
        </Box>
      </div>
      <div className="w-full">
        <Row applyShadow>
          <Column>
            <Field
                type="profile"
                value={scheduling?.pet?.name} 
                pathImage={scheduling?.pet?.pathImage}
                className="px-1 py-1.5 !text-base"/>
          </Column>
        </Row>
        <br />
        <span className="text-base">Observações</span>
        <Textarea
          className="w-full h-72 mt-2 bg-white rounded-xl border-solid border-2 shadow-xl p-2" 
          placeholder="Alguma observação para o cuidado do seu pet?"
         />
        
      </div>
    </div>
  );
}
