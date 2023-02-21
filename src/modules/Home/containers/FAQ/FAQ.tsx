import Image from "next/image";
import Link from "next/link";
import { useState, useCallback } from "react";
import FAQItem from "./components/FAQItem";
import AnimateIn from "@/components/AnimateIn/AnimateIn";
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
          <AnimateIn>
            <h2 className={styles.heading}>
              Our most frequently asked questions
            </h2>
          </AnimateIn>
          {faqsData.map(({ question, answer, id }, i) => (
            <AnimateIn key={id}>
            <FAQItem
              question={question}
              answer={answer}
              onOpen={() => toggle(i)}
              isOpen={i === currentFAQ}
            />
            </AnimateIn>
          ))}
        </div>
      </section>
    </>
  );
}
