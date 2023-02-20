import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Fit() {
  return (
    <>
      <section className={styles.fit}>
        <div className={styles.center}>
          <h3 className={styles.heading}>
            How to know if TDP is right for your startup
          </h3>
          <div className={styles.chatBubbles}>

            <div className={styles.bubbleWrapLeft}>
              <Link href="" className={`${styles.bubble} ${styles.bubbleLeft}`}>
                You want a new, innovative, and user-centered UX strategy for an
                existing product
              </Link>
            </div>

            <div className={styles.bubbleWrapRight}>
              <Link href="" className={`${styles.bubble} ${styles.bubbleRight}`}>
                You want to understand where users struggle when using your
                product
              </Link>
            </div>

            <div className={styles.bubbleWrapLeft}>
              <Link href="" className={`${styles.bubble} ${styles.bubbleLeft}`}>
                You want to translate complex data into an easy-to-understand
                dashboard
              </Link>
            </div>

            <div className={styles.bubbleWrapRight}>
              <Link href="" className={`${styles.bubble} ${styles.bubbleRight}`}>
                You need additional design resources that synergize with your
                (already) amazing design team
              </Link>
            </div>

            <div className={styles.bubbleWrapLeft}>
              <Link href="" className={`${styles.bubble} ${styles.bubbleLeft}`}>
                You‘re researching how UX can impact you business growth
              </Link>
            </div>

            <div className={styles.bubbleWrapRight}>
              <Link href="" className={`${styles.bubble} ${styles.bubbleRight}`}>
                You want to understand your users and design products that meet
                their needs{" "}
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
