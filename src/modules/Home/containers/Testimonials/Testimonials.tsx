import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Testimonials() {
  return (
    <>
      <section className={styles.testimonials}>
        <div className={styles.center}>
          <article className={styles.testimony}>
            <h4 className={styles.text}>
              TDP helped identify the main pain points and designed a new UX
              that is accessible and easy to understand. The redesign pushed us
              forward on our mission to be able to verify 100% of IDs in
              real-time, and we raised over $100M in funding.
            </h4>
            <div className={styles.profile}>
              <div className={styles.profileImage}>
                <Image
                  src={"/images/testimony1.png"}
                  width={74}
                  height={74}
                  alt=""
                />
              </div>
              <div className={styles.profileInfo}>
                <h5>Erick Desoto</h5>
                <h6>VP of Product at Socure</h6>
              </div>
            </div>
          </article>
          <div className={styles.button}>
            <Link href="">
                See our Case Studies
                <Image src={"/images/arrow-right-icon.png"} width={20} height={16} alt="" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
