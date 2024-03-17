import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./About.css";
import { useInView } from "react-intersection-observer";

export default function About() {
  const hobbies = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  useEffect(() => {
    if (inView) {
      const typed = new Typed(hobbies.current, {
        strings: [
          "Coding",
          "Formula 1",
          "Listening To Juice wrld",
          "Cars",
          "Vedio Games",
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
    <div id="about">
      <h1>--About</h1>
      <h1 ref={ref}>
        I am a 13 year old kid that likes <span ref={hobbies}></span>
      </h1>
    </div>
  );
}
