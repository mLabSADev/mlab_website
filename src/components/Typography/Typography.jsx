import React, { useEffect } from "react";
import "./style.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
/**
 *
 * @param {string} variant h(1-6) | s(1-2) | b(1-2) | button | caption | overline
 * @param {string} color light | dark | gray
 * @returns
 */
export const squareVariants = {
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 20, scale: 0.99 },
};
const Typography = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const textVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0.3 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.p
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={textVariants}
      {...props}
      className={[
        `main-t ${props.variant} ${props.color} ${
          props.center == true ? "center" : null
        } ${
          (props.capitalise ? "sentance-case" : null,
          props.ai ? "ai-font" : null,
          props.boldAi ? "ai-font-bold" : null)
        } ${props.gradient ? "gradientText" : null}`,
      ]}
    >
      {props.children}
    </motion.p>
  );
};

export default Typography;
