import { useRef, useState, useEffect } from "react";
import { useElementOnScreen } from "@/hooks/useElementOnScreen/useElementOnScreen";

interface Props {
  children: React.ReactNode;
}

export default function AnimateIn({ children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useElementOnScreen(ref, "-20px");
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    if(onScreen){
        console.log(onScreen);
        setSeen(true);
    }
  },[onScreen]);

  return (
    <div
      ref={ref}
      style={{
        opacity: seen ? 1 : 0,
        translate: seen ? "none" : "0 2rem",
        transition: "250ms ease-in-out",
      }}
    >
      {children}
    </div>
  );
}
