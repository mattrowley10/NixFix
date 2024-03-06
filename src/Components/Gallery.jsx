import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Gallery() {
  const ref = useRef(null);
  const getMarginThreshold = () => {
    return window.innerWidth > 768 ? "-350px" : "-150px";
  };
  const isInView = useInView(ref, { once: true, margin: getMarginThreshold() });
  return (
    <div className="gallery">
      <section>
        <ul className="flex flex-wrap justify-center">
          <li className="mx-6 my-2">
            <img
              className="gallery-img"
              src="/BFA1.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </li>
          <li className="mx-6 my-2">
            <img
              className="gallery-img"
              src="/BFA2.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </li>
          <li className="mx-6 my-2">
            <img
              className="gallery-img"
              src="/BFA3.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </li>
          <motion.li
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA5.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
          <motion.li
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA6.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
          <motion.li
            ref={ref}
            initial={{ x: -1000, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA7.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
          <motion.li
            animate={isInView ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
            transition={{ duration: 2 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA8.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
          <motion.li
            animate={isInView ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
            transition={{ duration: 2 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA9.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
          <motion.li
            animate={isInView ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
            transition={{ duration: 2 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA10.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
          <motion.li
            animate={isInView ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
            transition={{ duration: 4 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA11.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
          <motion.li
            animate={isInView ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
            transition={{ duration: 4 }}
            className="mx-6 my-2"
          >
            <img
              className="gallery-img"
              src="/BFA12.jpeg"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
        </ul>
      </section>
    </div>
  );
}
