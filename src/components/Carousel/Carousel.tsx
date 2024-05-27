import React, { useEffect, useState } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ButtonWrapper, CarouselContainer, CarouselItem, CarouselItemContainer, CarouselWrapper } from "./Carousel.styles";
import PaginationDots from "./PaginationDots"; // Import the PaginationDots component

type PropType = {
  children?: React.ReactNode;
  options?: EmblaOptionsType;
  autoPlay?: boolean;
  stopOnLastSnap?: boolean;
  stopOnInteraction?: boolean;
  showControls?: boolean;
  slidesToShow?: number;
  showBottomDots?: boolean
};

const Carousel: React.FC<PropType> = (props) => {
  const {
    children,
    options,
    autoPlay = true,
    stopOnInteraction = true,
    stopOnLastSnap = false,
    showControls = false,
    slidesToShow = 1,
    showBottomDots = false
  } = props;

  const [activeIndex, setActiveIndex] = useState(0);

  const emblaOptions: EmblaOptionsType = {
    ...options,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(
    emblaOptions,
    autoPlay ? [Autoplay({ stopOnLastSnap, stopOnInteraction })] : []
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.scrollTo(0);
    emblaApi.reInit();
  }, [children, emblaApi, slidesToShow]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    return () => {emblaApi && emblaApi.off("select", onSelect)};
  }, [emblaApi]);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <CarouselContainer className="embla">
      <CarouselWrapper className="embla__viewport" ref={emblaRef}>
        <CarouselItemContainer className="embla__container" slidesToShow={slidesToShow}>
          {React.Children.map(children, (child) => (
            <CarouselItem className="embla__slide" slidesToShow={slidesToShow}>
              {child}
            </CarouselItem>
          ))}

          {Array(slidesToShow - (React.Children.count(children) % slidesToShow))
            .fill(null)
            .map((_, index) => (
              <div key={`empty-${index}`} />
            ))}
        </CarouselItemContainer>
      </CarouselWrapper>
      {showControls && (
        <ButtonWrapper className="embla__controls">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </ButtonWrapper>
      )}
      {/* Render pagination dots */}
      {showBottomDots &&  <PaginationDots totalSlides={Math.ceil(React.Children.count(children) / slidesToShow)} activeIndex={activeIndex} onClick={(index) => emblaApi?.scrollTo(index)} />}
     
    </CarouselContainer>
  );
};

export default Carousel;