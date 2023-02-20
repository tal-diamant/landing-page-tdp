import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Info() {
  return (
    <>
      <section className={styles.info}>
        <div className={styles.center}>
          <h3 className={styles.heading}>
            Testimonials section
          </h3>
        </div>
      </section>
    </>
  );
}
