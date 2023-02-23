import Image from "next/image";
import styles from "./styles.module.css";

interface Props {
  testimony: string;
  fullName: string;
  details: string;
  picture: string;
  id: number;
}

export default function Testimonials({
  testimony,
  fullName,
  details,
  picture,
}: Props) {

  return (
    <>
      <article className={styles.testimony}>
        <h4 className={styles.text}>{testimony}</h4>
        <div className={styles.profile}>
          <div className={styles.profileImage}>
            <Image src={`/images/${picture}`} width={74} height={74} alt="" />
          </div>
          <div className={styles.profileInfo}>
            <h5>{fullName}</h5>
            <h6>{details}</h6>
          </div>
        </div>
      </article>
    </>
  );
}
