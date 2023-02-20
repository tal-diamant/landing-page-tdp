import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Info() {
  return (
    <>
      <section className={styles.info}>
        <div className={styles.center}>
          <h3 className={styles.heading}>
            How accessible UX design is changing the businesses for the better
          </h3>

          <div className={styles.infoGrid}>
            {/* 1 */}
            <article className={`${styles.gridItem} ${styles.card1}`}>
              <div className={`${styles.imageSmall}`}>
                <Image
                  src={"/images/card-small-image1.png"}
                  width={380}
                  height={563}
                  alt=""
                />
              </div>
              <div className={styles.image}>
                <Image
                  src={"/images/card-image1.png"}
                  width={1293}
                  height={563}
                  alt=""
                />
              </div>
              <div className={styles.card}>
                <h5 className={styles.cardSubheading}>Socure</h5>
                <h4 className={styles.cardHeading}>
                  A predictive analytics platform for consumers digital identity
                  verification
                </h4>
                <Link href={""} className={styles.cardLink}>
                  Read Case Study
                  <svg
                    width="24"
                    height="13"
                    viewBox="0 0 24 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8526 7.02139C23.1584 6.71564 23.1584 6.21991 22.8526 5.91416L17.87 0.931603C17.5643 0.625849 17.0686 0.625849 16.7628 0.931603C16.4571 1.23736 16.4571 1.73308 16.7628 2.03884L21.1917 6.46777L16.7628 10.8967C16.4571 11.2025 16.4571 11.6982 16.7628 12.0039C17.0686 12.3097 17.5643 12.3097 17.87 12.0039L22.8526 7.02139ZM0.604492 7.25071H22.299V5.68484H0.604492V7.25071Z"
                      fill="white"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>

            {/* 2 */}
            <article className={`${styles.gridItem} ${styles.card2}`}>
              <div className={`${styles.imageSmall} ${styles.imageSmall2}`}>
                <Image
                  src={"/images/card-small-image2.png"}
                  width={380}
                  height={563}
                  alt=""
                />
              </div>
              <div className={`${styles.image} ${styles.image2}`}>
                <Image
                  src={"/images/card-image2.png"}
                  width={1293}
                  height={563}
                  alt=""
                />
              </div>
              <div className={`${styles.card} ${styles.cardRight}`}>
                <h5 className={styles.cardSubheading}>JupiterOne</h5>
                <h4 className={styles.cardHeading}>
                  Automates security reporting and analysis, with dozens of
                  managed integrations and apps
                </h4>
                <Link href={""} className={styles.cardLink}>
                  Read Case Study
                  <svg
                    width="24"
                    height="13"
                    viewBox="0 0 24 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8526 7.02139C23.1584 6.71564 23.1584 6.21991 22.8526 5.91416L17.87 0.931603C17.5643 0.625849 17.0686 0.625849 16.7628 0.931603C16.4571 1.23736 16.4571 1.73308 16.7628 2.03884L21.1917 6.46777L16.7628 10.8967C16.4571 11.2025 16.4571 11.6982 16.7628 12.0039C17.0686 12.3097 17.5643 12.3097 17.87 12.0039L22.8526 7.02139ZM0.604492 7.25071H22.299V5.68484H0.604492V7.25071Z"
                      fill="white"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>

            {/* 3 */}
            <article className={`${styles.gridItem} ${styles.card3}`}>
              <div className={`${styles.imageSmall}`}>
                <Image
                  src={"/images/card-small-image3.png"}
                  width={380}
                  height={563}
                  alt=""
                />
              </div>
              <div className={styles.image}>
                <Image
                  src={"/images/card-image3.png"}
                  width={1293}
                  height={563}
                  alt=""
                />
              </div>
              <div className={styles.card}>
                <h5 className={styles.cardSubheading}>Oxio</h5>
                <h4 className={styles.cardHeading}>
                  First carrier-as-a-service platform for brands and
                  enterprises.
                </h4>
                <Link href={""} className={styles.cardLink}>
                  Read Case Study
                  <svg
                    width="24"
                    height="13"
                    viewBox="0 0 24 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.8526 7.02139C23.1584 6.71564 23.1584 6.21991 22.8526 5.91416L17.87 0.931603C17.5643 0.625849 17.0686 0.625849 16.7628 0.931603C16.4571 1.23736 16.4571 1.73308 16.7628 2.03884L21.1917 6.46777L16.7628 10.8967C16.4571 11.2025 16.4571 11.6982 16.7628 12.0039C17.0686 12.3097 17.5643 12.3097 17.87 12.0039L22.8526 7.02139ZM0.604492 7.25071H22.299V5.68484H0.604492V7.25071Z"
                      fill="white"
                    ></path>
                  </svg>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
