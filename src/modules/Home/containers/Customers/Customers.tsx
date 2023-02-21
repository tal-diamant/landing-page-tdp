import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.css";

export default function Customers() {
  return (
    <>
      <section className={styles.customers}>
        <div className={styles.center}>
          <AnimateIn>
            <h2 className={styles.heading}>
              We helped our customers raise $1B+
            </h2>
          </AnimateIn>
          <div className={styles.imageContainer}>
            <AnimateIn>
              <div className={styles.img}>
                <Link href="" className={styles.imgLink}>
                  <Image
                    src={"/images/y-combinator.svg"}
                    width={250}
                    height={100}
                    alt="some company logo"
                  />
                </Link>
              </div>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.img}>
              <Link href="" className={styles.imgLink}>
                <Image
                  src={"/images/sequoia.svg"}
                  width={250}
                  height={100}
                  alt="some company logo"
                />
              </Link>
            </div>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.img}>
              <Link href="" className={styles.imgLink}>
                <Image
                  src={"/images/redpoint.svg"}
                  width={250}
                  height={100}
                  alt="some company logo"
                />
              </Link>
            </div>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.img}>
              <Link href="" className={styles.imgLink}>
                <Image
                  src={"/images/a16z.svg"}
                  width={250}
                  height={100}
                  alt="some company logo"
                />
              </Link>
            </div>
            </AnimateIn>

          </div>
        </div>
      </section>
    </>
  );
}
