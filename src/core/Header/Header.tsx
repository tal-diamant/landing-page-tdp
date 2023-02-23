import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { useElementOnScreen } from "@/hooks/useElementOnScreen/useElementOnScreen";
import styles from "./styles.module.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isOnTopDetector = useRef<HTMLDivElement>(null);
  const isOnScreen = useElementOnScreen(isOnTopDetector);
  return (
    <>
      <div ref={isOnTopDetector}></div>
      <section className={`${styles.header} ${isOnScreen? styles.onTop: ''}`}>
        <div className={styles.center}>
          <div className={styles.top}>
            <Link href="">
              <Image
                src={"/images/header-logo-mobile.svg"}
                className={styles.mobileLogo}
                width={48}
                height={48}
                alt=""
              />
              <Image
                src={"/images/header-logo-desktop.svg"}
                className={styles.desktopLogo}
                width={337}
                height={56}
                alt=""
              />
            </Link>
            <div className={styles.hamburger} onClick={() => setIsMenuOpen(true)}>
              <Image
                src={"/images/hamburger-menu.svg"}
                width={48}
                height={48}
                alt=""
              />
            </div>
            <nav className={styles.nav}>
              <ul>
                <li>
                  <Link href="">How it works</Link>
                </li>
                <li>
                  <Link href="">About</Link>
                </li>
                <li>
                  <Link href="">Work</Link>
                </li>
                <li>
                  <Link href="">Pricing</Link>
                </li>
                <li>
                  <Link href="">Blog</Link>
                </li>
              </ul>
              <Link href="" className={styles.navAction}>
                Get started
                <div className={styles.arrowRight}>
                  <Image src={"/images/arrow-right-icon.svg"} width={20} height={15} alt="" />
                </div>
              </Link>
            </nav>
          </div>
        </div>
        <div className={`${styles.content} ${isMenuOpen? styles.menuDown: ''}`}>
          <div className={styles.contentTop}>
            <Link href="">
              <Image src={"/images/header-logo-mobile.svg"} className={styles.mobileLogo} width={48} height={48} alt="" />
            </Link>
            <button className={styles.contentClose} onClick={() => setIsMenuOpen(false)}>
            <Image src={"/images/x.svg"} width={48} height={48} alt="" />
            </button>
          </div>
          <div className={styles.menuContainer}>
            <ul>
              <li>
                <Link href="">How it works</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Work</Link>
              </li>
              <li>
                <Link href="">Pricing</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
            </ul>
            <Link href="" className={styles.navAction}>
              Get started
              <div className={styles.arrowRight}>
                <Image src={"/images/arrow-right-icon.svg"} width={20} height={15} alt="" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
