import Image from "next/image";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
import styles from "./styles.module.css";

export default function Process() {
  return (
    <>
      <section className={styles.process}>
        <Parallax translateY={['-138px', '70px']}>
          <div style={{position: "absolute", top: 0, left: 60}}>
            <Image src={"/images/dots.png"} width={183} height={110} alt="" />
          </div>
        </Parallax>
        <Parallax translateY={['60px', '-200px']}>
          <div style={{position: "absolute", top: 60, left: 0}}>
            <Image src={"/images/wave.png"} width={199} height={116} alt="" />
          </div>
        </Parallax>
        <Parallax translateY={['20px', '200px']}>
          <div style={{position: "absolute", top: 0, right: 0}}>
            <Image src={"/images/small-grid.png"} width={269} height={277} alt="" />
          </div>
        </Parallax>
        <div className={styles.center}>
          <AnimateIn>
          <h3 className={styles.heading}>
            How signing up with The Design Project works
          </h3>
          </AnimateIn>
          <AnimateIn>
          <p className={styles.support}>
            Take a minute to imagine how you’d feel watching your user count
            grow, and retention rates stay consistently high. When you
            prioritize effective UX, better retention and growth are natural
            consequences. Backed by countless hours of research and testing, TDP
            blends UX, UI, and Product design into a deliciously smooth process
            that fuels productivity and success.
          </p>
          </AnimateIn>

          <div className={styles.articles}>
            <AnimateIn>
            <article className={styles.article}>
              <h3 className={styles.articleNumber}>01</h3>
              <h4 className={styles.articleHeading}>
                Sign up for one of our services
              </h4>
              <p className={styles.articleText}>
                Sign up for one of our affordable subscription plans—which offer
                a variety of options to fit your unique needs.
              </p>
              <div className={styles.imageContainer}>
                <div className={styles.image}>
                  <Image src={"/images/monitor.svg"} width={189} height={168} alt=""/>
                </div>
              </div>
            </article>
            </AnimateIn>

            <AnimateIn>
            <article className={styles.article}>
              <h3 className={styles.articleNumber}>02</h3>
              <h4 className={styles.articleHeading}>Meet your perfect match</h4>
              <p className={styles.articleText}>
                We match you with the best TDP design expert for your needs.
                Then we schedule a call to learn about your startup.
              </p>
              <div className={styles.imageContainer}>
                <div className={styles.image}>
                  <Image src={"/images/laptop-girl.svg"} width={222} height={162} alt=""/>
                </div>
              </div>
            </article>
            </AnimateIn>

            <AnimateIn>
            <article className={styles.article}>
              <h3 className={styles.articleNumber}>03</h3>
              <h4 className={styles.articleHeading}>
                The first sprint begins (hold on tight)
              </h4>
              <p className={styles.articleText}>
                TDP manages the project, learns the intimate details of what
                your users want, and delivers impactful design iterations.
              </p>
              <div className={styles.imageContainer}>
                <div className={styles.image}>
                  <Image src={"/images/laptop-avatars.svg"} width={227} height={166} alt=""/>
                </div>
              </div>
            </article>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
