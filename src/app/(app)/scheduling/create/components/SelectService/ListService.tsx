import React, { useRef } from "react";
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import { isEmpty } from "lodash";
import { ForceUpdate, getToken } from "../../../../components/Utils";
import Loading from "@/app/components/Loading";

interface Props {
  onSelected: (service: Service) => void,
  isServiceSelected: (service: Service) => boolean
}

export interface Service {
  id: number;
  name: string;
  price: number;
  time: number;
  serviceType: string;
}

export default function ListService(props: Props) {
  const update = ForceUpdate();
  const { onSelected, isServiceSelected } = props
  const emptyMessage = "Nenhum serviço cadastrado no momento";
  const services = useRef<Service[]>();
  
  async function getServices() {
    const token = getToken();
      if(!isEmpty(token)) {
         const res = await fetch(`${process.env.HOST}/service`, {
            method: "GET",
            headers: {
               Authorization: `Bearer ${token}`
            }
         })
         if(res.ok) {
           services.current = await res.json();
         }
         update();
      }
  }

  if(isEmpty(services.current)) {
    getServices();
  }

  return (
    <>
      {
        !isEmpty(services.current)
          ? services.current!.map((service) => 
          <SelectRow key={service.id}
            onSelected={() => onSelected(service)}
            selected={isServiceSelected(service)}
          >
            <Column flexType="flex-none" applyHighlite className="w-20 !py-3.5">
              <Field type="price" value={service.price} />
            </Column>
            <Column>
              <Field type="text" value={service.name} />
            </Column>
          </SelectRow>
          )
          : services.current 
            ? <div className="h-full flex justify-center items-center italic text-neutral-600 text-sm">
                {emptyMessage}
              </div> 
            : <Loading /> 
      }
    </> 
  );
}
