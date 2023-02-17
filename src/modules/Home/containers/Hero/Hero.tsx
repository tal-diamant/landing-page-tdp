import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import styles from "./styles.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.center}>
          <h1 className={styles.heading}>
            A UI/UX design subscription so good it should come with a warning
            label
          </h1>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Image
                src={"/images/checkmark-icon.png"}
                width={27}
                height={26}
                alt="checkmark icon"
              />
              No hiring headaches
            </li>
            <li className={styles.listItem}>
              <Image
                src={"/images/checkmark-icon.png"}
                width={27}
                height={26}
                alt="checkmark icon"
              />
              Weekly turnaround times
            </li>
            <li className={styles.listItem}>
              <Image
                src={"/images/checkmark-icon.png"}
                width={27}
                height={26}
                alt="checkmark icon"
              />
              One flat monthly rate
            </li>
          </ul>

          <div className={styles.actionButton}>
            <Link href="#" className={styles.actionButtonLink}>
              START YOUR RISK-FREE TRIAL
              <Image
                src="/images/arrow-right-icon.png"
                width={19}
                height={15}
                alt="arrow right icon"
              />
            </Link>
          </div>

          <ul className={styles.people}>
            <li className={styles.peopleAnimation}>
              <Image
                src="/images/peep1.svg"
                width={134}
                height={180}
                alt="man 1"
              />
            </li>
            <li className={styles.peopleAnimation}>
              <Image
                src="/images/peep2.svg"
                width={134}
                height={180}
                alt="woman 1"
              />
            </li>
            <li className={styles.peopleAnimation}>
              <Image
                src="/images/peep3.svg"
                width={134}
                height={180}
                alt="man 2"
              />
            </li>
            <li className={`${styles.mobileHide} ${styles.peopleAnimation}`}>
              <Image
                src="/images/peep4.svg"
                width={134}
                height={180}
                alt="woman 2"
              />
            </li>
            <li className={`${styles.mobileHide} ${styles.peopleAnimation}`}>
              <Image
                src="/images/peep5.svg"
                width={134}
                height={180}
                alt="man 3"
              />
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
