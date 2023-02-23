import Image from "next/image";
import Link from "next/link";
import { Parallax } from 'react-scroll-parallax';
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import SpinSquare from "@/components/SVG/spinning squares/SpinSquare";
import ShapesArrow from "@/components/SVG/arrow and shapes/ShapesArrow";
import styles from "./styles.module.css";

export default function Features() {
  return (
    <>
      <section className={styles.features}>
        <Parallax translateY={['100px', '-200px']}>
        <div style={{position: "absolute", top: 20, left: 20}}>
          <Image src={"/images/triangles.png"} width={60} height={59} alt="" />
        </div>
        </Parallax>
        <Parallax speed={-13}>
        <div style={{position: "absolute", top: 20, right: 20}}>
          <Image src={"/images/right-angle.png"} width={46} height={43} alt="" />
        </div>
        </Parallax>
        <Parallax translateY={['110px', '255px']}>
        <div style={{position: "absolute", bottom: -40, right: 0}}>
          <Image src={"/images/square.png"} width={97} height={108} alt="" />
        </div>
        </Parallax>
        <div className={styles.center}>
          <AnimateIn>
          <h3 className={styles.heading}>
            A diverse team of passionate UX nerds who are here to help your
            startup succeed
          </h3>
          </AnimateIn>
          <AnimateIn>
          <p className={styles.text}>
            From ideation to expansion, TDP understands the unique demands of
            your startup—providing you with optimized design strategies and fast
            turnarounds for an affordable monthly subscription.{" "}
          </p>
          </AnimateIn>
          <div className={styles.featuresCol}>
            <AnimateIn>
            <div className={styles.svg}>
              <ShapesArrow />
            </div>
            <h4 className={styles.subHeading}>Costs 70% less</h4>
            <p className={styles.support}>
              We developed highly-optimized design processes to let us work fast
              and deliver incredible results—and we pass those savings on to you
            </p>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.svg}>
              <SpinSquare />
            </div>
            <h4 className={styles.subHeading}>Adaptable and scalable</h4>
            <p className={styles.support}>
              High-velocity is crucial to a startup’s success, and that’s why
              TDP delivers new designs every week so your momentum never falters
            </p>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.svg}>
              <Image src={"/images/feature3.svg"} width={150} height={130} alt="" />
            </div>
            <h4 className={styles.subHeading}>Fast turnaround times</h4>
            <p className={styles.support}>
              TDP was built for flexibility—we quickly adapt and grow as you
              grow
            </p>
            </AnimateIn>

          </div>
        </div>
      </section>
    </>
  );
}
