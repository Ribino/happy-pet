import React, { Dispatch, SetStateAction } from "react";
import Box from "../../../components/Box";
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import Textarea from "@/app/components/Textarea";
import { Scheduling } from "../page";
import Row from "@/app/(app)/components/Row/Row";

interface Props {
  scheduling: Scheduling | undefined
  setScheduling: Dispatch<SetStateAction<Scheduling | undefined>>
}

export interface Service {
  id: number;
  name: string;
  price: number;
  time: number;
  serviceType: string;
}

export default function SelectService(props: Props) {
  const {scheduling, setScheduling} = props;
  const emptyMessage = "Nenhum serviço cadastrado no momento";
 
  const services = [
    {
      id: 2,
      name: "Banho",
      price: 69.99,
      time: 30,
      serviceType: "PETSHOP",
    },
    {
      id: 3,
      name: "Banho & Tosa Trimming",
      price: 69.99,
      time: 50,
      serviceType: "PETSHOP",
    },
    {
      id: 4,
      name: "Tosa",
      price: 20.69,
      time: 30,
      serviceType: "PETSHOP",
    },
    {
      id: 5,
      name: "Banho Premium",
      price: 84.94,
      time: 30,
      serviceType: "PETSHOP",
    },
    {
      id: 6,
      name: "Pet sitter",
      price: 104.94,
      time: 30,
      serviceType: "PETSHOP",
    },
    {
      id: 7,
      name: "Pet Walker",
      price: 184.94,
      time: 30,
      serviceType: "PETSHOP",
    },
  ];

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
          {services.map((service) => (
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
          ))}
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
