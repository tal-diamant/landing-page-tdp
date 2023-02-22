import Image from "next/image";
import { ReactNode, MutableRefObject, Dispatch, SetStateAction } from "react";
import SlickSlider from "react-slick";

interface Props {
  children: ReactNode[];
  sliderRef: MutableRefObject<SlickSlider | null>;
  onEdge: Dispatch<SetStateAction<number>>;
}

export default function Slider({ children, sliderRef, onEdge }: Props) {
  var settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (newIndex: number) => {
      onEdge(newIndex);
    }
  };

  return (
    <>
      <SlickSlider ref={sliderRef} {...settings}>
        {children}
      </SlickSlider>
    </>
  );
}
