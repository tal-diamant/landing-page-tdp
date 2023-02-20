import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export default function Process() {
  return (
    <>
      <section className={styles.process}>
        <div className={styles.center}>
          <h3 className={styles.heading}>
            How signing up with The Design Project works
          </h3>
          <p className={styles.support}>
            Take a minute to imagine how you’d feel watching your user count
            grow, and retention rates stay consistently high. When you
            prioritize effective UX, better retention and growth are natural
            consequences. Backed by countless hours of research and testing, TDP
            blends UX, UI, and Product design into a deliciously smooth process
            that fuels productivity and success.
          </p>
          <div className={styles.articles}>
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
                {/* <Image src={} width={} height={} alt=""/> */}
                <div className={styles.image}></div>
              </div>
            </article>

            <article className={styles.article}>
              <h3 className={styles.articleNumber}>02</h3>
              <h4 className={styles.articleHeading}>Meet your perfect match</h4>
              <p className={styles.articleText}>
                We match you with the best TDP design expert for your needs.
                Then we schedule a call to learn about your startup.
              </p>
              <div className={styles.imageContainer}>
                <div className={styles.image}></div>
              </div>
            </article>

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
                <div className={styles.image}></div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
