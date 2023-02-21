import Image from "next/image";
import styles from "./styles.module.css";

interface Props {
    question: string;
    answer: string;
    isOpen: boolean;
    onOpen: () => void;
}

export default function FAQItem({question, answer, isOpen, onOpen}: Props) {
  return (
    <div className={styles.faqItem}>
      <div className={styles.QuestionAndArrow} onClick={onOpen}>
        <h3 className={styles.question}>
          {question}
        </h3>
        <Image src={"/images/faq-arrow.svg"} className={`${styles.arrow} ${isOpen? styles.arrowUp: ''}`} width={27} height={20} alt="" />
      </div>
      <div className={styles.answerWrapper}>
        <p className={`${styles.answer} ${isOpen? styles.answerVisible: ''}`}>{answer}</p>
      </div>
    </div>
  );
}
