import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import FAQItem from "./components/FAQItem";
import styles from "./styles.module.css";
import { faqsData } from "./data/faqs";

export default function FAQ() {
  const [currentFAQ, setCurrentFAQ] = useState<number | null>(null);
  const toggle = useCallback(
    (index: number) => {
      setCurrentFAQ((current) => (current !== index ? index : null));
    },
    [currentFAQ]
  );
  
  return (
    <>
      <section className={styles.faq}>
        <div className={styles.center}>
          <h2 className={styles.heading}>
            Our most frequently asked questions
          </h2>
          {faqsData.map(({ question, answer, id }, i) => (
            <FAQItem
              key={id}
              question={question}
              answer={answer}
              onOpen={() => toggle(i)}
              isOpen={i === currentFAQ}
            />
          ))}
        </div>
      </section>
    </>
  );
}
