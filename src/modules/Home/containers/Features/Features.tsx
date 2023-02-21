import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.css";

export default function Features() {
  return (
    <>
      <section className={styles.features}>
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
            <div className={styles.svg}></div>
            <h4 className={styles.subHeading}>Costs 70% less</h4>
            <p className={styles.support}>
              We developed highly-optimized design processes to let us work fast
              and deliver incredible results—and we pass those savings on to you
            </p>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.svg}></div>
            <h4 className={styles.subHeading}>Adaptable and scalable</h4>
            <p className={styles.support}>
              High-velocity is crucial to a startup’s success, and that’s why
              TDP delivers new designs every week so your momentum never falters
            </p>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.svg}></div>
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
