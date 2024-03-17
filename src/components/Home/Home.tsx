import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const text = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      const typed = new Typed(text.current, {
        strings: [
          "Web Developer",
          "Student",
          "Software Engineer",
          "Freelancer",
          "Designer",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 800,
        loop: true,
      });
      return () => {
        typed.destroy();
      };
    }
  }, [inView]);
  return (
    <div id="home">
      <h1>--Home</h1>

      <h1 ref={ref}>
        Hello! Im Jad, and I am a <span ref={text}></span>
      </h1>
    </div>
  );
}
