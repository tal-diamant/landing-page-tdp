import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function CTA() {
  return (
    <>
      <section className={styles.cta}>
        <div className={styles.center}>
          <div className={styles.wrapper}>
            <h2 className={styles.heading}>
              Let’s build something awesome together!
            </h2>
            <p className={styles.support}>
              Try us risk free for 7 days, if you don’t love us, get your money
              back.
            </p>
            <Link href="">
                Get Started
                <Image src={"/images/arrow-right-icon.png"} width={20} height={16} alt="" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
