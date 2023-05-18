import React, { Dispatch, SetStateAction } from "react";
import Box from "../../../components/Box";
import SelectRow from "@/app/(app)/components/Row/SelectRow";
import Column from "@/app/(app)/components/Column";
import Field from "@/app/(app)/components/Field";
import { Pet } from "./SelectPet";
import Textarea from "@/app/components/Textarea";

interface Props {
  selectedService: Service | undefined;
  setSelectedService: Dispatch<SetStateAction<Service | undefined>>;
  selectedPet: Pet | undefined;
}

export interface Service {
  id: number;
  name: string;
  price: number;
  time: number;
  serviceType: string;
}

export default function SelectService(props: Props) {
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
      name: "Banho e Tosa",
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
    props.setSelectedService(isServiceSelected(service) ? undefined : service);
  }

  function isServiceSelected(service: Service): boolean {
    return props.selectedService?.id == service.id;
  }

  return (
    <div className="w-full flex justify-center gap-16">
      <div className="w-full">
        <Box emptyMessage={emptyMessage} headerTitle="Serviços">
          {services.map((object) => (
            <SelectRow
              numberOfColumns={1}
              onSelected={() => onSelected(object)}
              selected={isServiceSelected(object)}
            >
              <Column flexType="flex-none" className="py-0 w-24">
                <Field type="number" value={object.price.toString()} />
              </Column>
              <Column>
                <Field type="text" value={object.name} />
              </Column>
            </SelectRow>
          ))}
        </Box>
      </div>
      <div className="w-full">
        <Field
          type="profile"
          value={props.selectedPet?.name}
          className="w-full bg-white rounded-xl border-solid border-2 shadow-lg p-4"
        />
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
