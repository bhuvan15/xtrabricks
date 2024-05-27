import React from "react";
import Carousel from "../Carousel/Carousel";
import { EmblaOptionsType } from "embla-carousel";
import Image from "next/image";
import { BannerItem } from "./PromotionalBanner.styles";

const PromotionalBanner: React.FC<{data: any; id?: string}> = ({data, id}) => {
  const OPTIONS: EmblaOptionsType = {};
  return (
    <div id={id}>
    <Carousel options={OPTIONS}>
      {data?.map((item: any, index: number) => (
        <BannerItem
          key={index}
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <Image
            alt={item.name}
            src={item.image}
            layout="responsive"
            width={1920}
            height={1080}
            loading={'eager'}
          />
        </BannerItem>
      ))}
    </Carousel>
    </div>
  );
};

export default PromotionalBanner;
