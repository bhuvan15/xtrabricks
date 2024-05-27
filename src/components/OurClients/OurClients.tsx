import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import { ClientsWrapper, ClientsContainer, ClientImageWrapper } from "./OurClients.styles";
import { CLIENTS_INFO } from "@/constants";
import Image from "next/image";

const OurClients: React.FC = () => {
  return (
    <ClientsContainer id="ourClients">
      <CustomHeading heading="Our Clients" />
      <ClientsWrapper>
        {CLIENTS_INFO?.map((item, index) => (
          <ClientImageWrapper key={index}>
            <Image
              alt={item.name}
              src={item.image}
              width={100} 
              height={100} 
              style={{ objectFit: 'contain' }}
            />
          </ClientImageWrapper>
        ))}
      </ClientsWrapper>
    </ClientsContainer>
  );
};

export default OurClients;
