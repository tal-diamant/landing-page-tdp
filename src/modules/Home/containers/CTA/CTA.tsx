import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.css";

export default function CTA() {
  return (
    <>
      <section className={styles.cta}>
        <div className={styles.center}>
          <div className={styles.wrapper}>
            <AnimateIn>
            <h2 className={styles.heading}>
              Let’s build something awesome together!
            </h2>
            </AnimateIn>

            <AnimateIn>
            <p className={styles.support}>
              Try us risk free for 7 days, if you don’t love us, get your money
              back.
            </p>
            </AnimateIn>

            <AnimateIn>
            <Link href="">
                Get Started
                <Image src={"/images/arrow-right-thick.svg"} width={20} height={16} alt="" />
            </Link>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
