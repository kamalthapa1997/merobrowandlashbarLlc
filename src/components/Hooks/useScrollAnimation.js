// useScrollAnimation.js
import { useEffect } from "react";
import { useAnimation } from "framer-motion";

const useScrollAnimation = (ref, initial, animate) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = ref.current.offsetTop;
      const triggerPosition = elementPosition - window.innerHeight / 2;

      if (scrollPosition > triggerPosition) {
        controls.start({
          ...animate,
          transition: {
            duration: 0.5, // Adjust duration for a smoother effect
            ease: [0.6, 0.05, 0.01, 0.9], // Experiment with different easing functions
          },
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls, ref, animate]);

  return controls;
};

export default useScrollAnimation;
