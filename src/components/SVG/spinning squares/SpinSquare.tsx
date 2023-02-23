import styles from "./styles.module.css";

export default function SpinSquare() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <svg
          width="150"
          height="130"
          viewBox="0 0 150 130"
          className={styles.one}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="37.5"
            y="27.5"
            width="75"
            height="75"
            style={{ fill: "none", strokeWidth: 3, stroke: "rgb(0,0,0)" }}
          />
        </svg>

        <svg
          width="150"
          height="130"
          viewBox="0 0 150 130"
          className={styles.two}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="37.5"
            y="27.5"
            width="75"
            height="75"
            style={{ fill: "none", strokeWidth: 3, stroke: "rgb(0,0,0)" }}
          />
        </svg>

        <svg
          width="150"
          height="130"
          viewBox="0 0 150 130"
          className={styles.mid}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="62.25"
            y="52.5"
            width="25"
            height="25"
            style={{ fill: "none", strokeWidth: 3, stroke: "rgb(0,0,0)" }}
          />
        </svg>
      </div>
    </div>
  );
}
