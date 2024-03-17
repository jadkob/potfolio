import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Typed from "typed.js";
import "./Skills.css";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  const text = useRef(null);
  useEffect(() => {
    if (inView) {
      const typed = new Typed(text.current, {
        strings: [
          "HTML",
          "CSS",
          "JavaScript",
          "React",
          "Svelte",
          "Firebase",
          "Python",
          "Php",
        ],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 800,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [inView]);
  return (
    <div id="skills">
      <h1>--Skills</h1>
      <h1 ref={ref}>
        I am fluent in <span ref={text}></span>
      </h1>
    </div>
  );
}
