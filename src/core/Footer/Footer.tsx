import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.css";

export default function Footer() {
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.center}>
          <div className={styles.leftColumn}>
            <AnimateIn>
            <div className={styles.footerLogo}>
              <Image
                className={styles.logoMobile}
                src={"/images/footer-logo.svg"}
                width={232}
                height={26}
                alt=""
              />
              <Image
                className={styles.logoDesktop}
                src={"/images/footer-logo.svg"}
                width={571}
                height={63}
                alt=""
              />
            </div>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.footerSocial}>
              <ul>
                <li>
                  <Link href="">
                    <Image
                      src={"/images/envelope-icon.svg"}
                      width={25}
                      height={25}
                      alt=""
                    />
                    our@landingpage.com
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Image
                      src={"/images/insta-icon.svg"}
                      width={25}
                      height={25}
                      alt=""
                    />
                    @landingpage.com
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <Image
                      src={"/images/linkedin-icon.svg"}
                      width={25}
                      height={25}
                      alt=""
                    />
                    The Landing Page
                  </Link>
                </li>
              </ul>
            </div>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.footerCTA}>
              <Link href="">
                <span>contact us</span>
                <Image
                  src={"/images/arrow-right-thick.svg"}
                  width={23}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            </AnimateIn>
          </div>


          <div className={styles.rightColumn}>
            <AnimateIn>
            <ul>
              <li>
                <Link href="">How it works</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Our work</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
              <li>
                <Link href="">Contact us</Link>
              </li>
            </ul>
            </AnimateIn>

            <AnimateIn>
            <div className={styles.mobileCTA}>
              <Link href="">
                <span>contact us</span>
                <Image
                  src={"/images/arrow-right-thick.svg"}
                  width={23}
                  height={20}
                  alt=""
                />
              </Link>
            </div>
            </AnimateIn>
          </div>
        </div>

        <AnimateIn>
        <div className={styles.bottom}>
          <p> © 2022 The Landing Page Project</p>
        </div>
        </AnimateIn>
      </section>
    </>
  );
}
