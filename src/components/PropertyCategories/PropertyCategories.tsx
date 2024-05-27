import { PROPERTY_CATEGORIES } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import CustomHeading from "../CustomHeading/CustomHeading";
import {
  CategoriesWrapper,
  CategoryItemButton,
  CategoryItemButtonText,
  CategoryItemImageWrapper,
  CategoryItemLocation,
  CategoryItemTitle,
  CategoryItemType,
  CategoryItemWrapper,
  CategoryListWrapper,
} from "./PropertyCategory.styles";
import RightArrow from "../../../public/assets/svg/RightArrow";


const PropertyCategories = () => {
  const router = useRouter();
  return (
    <CategoriesWrapper id={"propertyCategories"}>
      <CustomHeading heading="Find the property of your dreams" />
      <CategoryListWrapper>
        {PROPERTY_CATEGORIES.map((item, index) => {
          return (
            <CategoryItemWrapper key={index}>
              <CategoryItemImageWrapper>
                <Image
                  src={item.image}
                  alt={item.title}
                  layout={"responsive"}
                  objectFit={"cover"}
                  width={406}
                  height={306}
                  loading={"eager"}
                />
              </CategoryItemImageWrapper>

              <CategoryItemTitle>
                {item.title}
              </CategoryItemTitle>

              <CategoryItemLocation>
                {item.location}
              </CategoryItemLocation>

              <CategoryItemType>
                {item.type}
              </CategoryItemType>

              {item.ctaTitle && (
                <CategoryItemButton onClick={() => router.push(item.ctaLink)}>
                  <CategoryItemButtonText>
                    {item.ctaTitle}
                  </CategoryItemButtonText>
                  <RightArrow />
                </CategoryItemButton>
              )}
            </CategoryItemWrapper>
          );
        })}
      </CategoryListWrapper>
    </CategoriesWrapper>
  );
};

export default PropertyCategories;