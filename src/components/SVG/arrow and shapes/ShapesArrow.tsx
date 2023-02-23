import styles from "./styles.module.css";

export default function ShapesArrow() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <svg
          width="150"
          height="130"
          viewBox="0 0 150 130"
          className={styles.svg}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M30,120 C75,110 110,65 115,30" 
            style={{ fill: "none", strokeWidth: 2, stroke: "black", strokeLinecap: "round" }}
          />
          <line x1="115" y1="30" x2="95" y2="40" style={{ fill: "none", strokeWidth: 2, stroke: "black", strokeLinecap: "round" }} />
            <line x1="115" y1="30" x2="127" y2="47" style={{ fill: "none", strokeWidth: 2, stroke: "black", strokeLinecap: "round" }} />
            <circle cx="55" cy="60" r="12" stroke="black" strokeWidth="2" fill="none" />
          <g>
            <line x1="105" y1="110" x2="133" y2="110" style={{ fill: "none", strokeWidth: 1.5, stroke: "black", strokeLinecap: "round" }} />
            <line x1="119" y1="96" x2="119" y2="124" style={{ fill: "none", strokeWidth: 1.5, stroke: "black", strokeLinecap: "round" }} />  
          </g>
        </svg>
      </div>
    </div>
  );
}
