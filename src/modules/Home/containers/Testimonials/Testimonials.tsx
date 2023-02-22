import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SlickSlider from "react-slick";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import { testimonies } from "./data/testimonies";
import Testimony from "./components/Testimony/Testimony";
import Slider from "./components/Slider/Slider";
import styles from "./styles.module.css";

export default function Testimonials() {
  const slider = useRef<SlickSlider | null>(null)
  const [isOnEdge, setIsOnEdge] = useState(0);

  return (
    <>
      <section className={styles.testimonials}>
        <div className={styles.center}>
          <AnimateIn>
          <Slider sliderRef={slider} onEdge={setIsOnEdge}>
            {testimonies.map((testimony) => (
              <div key={testimony.id}>
              <Testimony  {...testimony} />
              </div>
            ))}
          </Slider>
          </AnimateIn>

          <button
            className={`${styles.testimonyButton} ${styles.testimonyBtnLeft}`}
            onClick={() => slider?.current?.slickPrev()}
            style={{opacity: isOnEdge === 0 ?0.3: 1}}
          >
            <Image
              src={"/images/chevron-left.svg"}
              className={styles.mobileChveron}
              width={8}
              height={16}
              alt=""
            />
            <Image
              src={"/images/chevron-left.svg"}
              className={styles.desktopChveron}
              width={27}
              height={44}
              alt=""
            />
          </button>
          <button
            className={`${styles.testimonyButton} ${styles.testimonyBtnRight}`}
            onClick={() => slider?.current?.slickNext()}
            style={{opacity: isOnEdge === 2 ?0.3: 1}}
          >
            <Image
              src={"/images/chevron-right.svg"}
              className={styles.mobileChveron}
              width={8}
              height={16}
              alt=""
            />
            <Image
              src={"/images/chevron-right.svg"}
              className={styles.desktopChveron}
              width={27}
              height={44}
              alt=""
            />
          </button>

          <AnimateIn>
            <div className={styles.button}>
              <Link href="">
                See our Case Studies
                <Image
                  src={"/images/arrow-right-icon.png"}
                  width={20}
                  height={16}
                  alt=""
                />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
