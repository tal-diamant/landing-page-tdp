import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <>
      <section className={styles.header}>
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
            <div className={styles.hamburger}>
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
                <Link href="" className={styles.navAction}>Get started</Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
