import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-350px" });
  return (
    <div className="gallery">
      <section>
        <ul className="flex flex-wrap justify-center">
          <li className="mx-6 my-2">
            <img
              className="gallery-img"
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/370254927_684705200122341_1019706399711921925_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=J1WivILbHZcAX-j9Txh&_nc_ht=scontent-den2-1.xx&oh=03_AdTXOWs6oh6RfnXyDk8quiDOMeI-KQE5yTCdaay2M87pUQ&oe=65E7A898"
              alt="facial, wax, and permanent makeup before and after"
            />
          </li>
          <li className="mx-6 my-2">
            <img
              className="gallery-img"
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/411585489_1982457728794652_5859701963256710179_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=65Tk7ZVVYyUAX8R4m9b&_nc_ht=scontent-den2-1.xx&oh=03_AdQj-EdedmhVCUUol_lDwBFEmtRHtr3e4tZa5MzK5sMD0w&oe=65E7A011"
              alt="facial, wax, and permanent makeup before and after"
            />
          </li>
          <li className="mx-6 my-2">
            <img
              className="gallery-img"
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/411911282_339586135653756_2662049491611092167_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=pBVGsMrKK-0AX-PxMy4&_nc_ht=scontent-den2-1.xx&oh=03_AdS1VUq2k_dXMIMj80JeE4RDJ0NWEn5nmlLLypJ1TK5jZw&oe=65E79E18"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/411765823_343505581963392_1611699380495687713_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=O7-YqWZMqyMAX8aR6_m&_nc_ht=scontent-den2-1.xx&oh=03_AdTklN83gfEqJaE6vT2le_WN9cfJ2gaYgpBuCTicxJ45lA&oe=65E7845E"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/411946167_1372081773681470_1632010180132395110_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=qjYXkFkoIkMAX_YnV9g&_nc_ht=scontent-den2-1.xx&oh=03_AdR2Qy1Od2SrYDVEc9DT891qCwNJSBHti542nI1lQ53TIw&oe=65E77ACD"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/413371994_245803498552896_8965325193929307918_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=xZHvjD7ZA5QAX-QZuqg&_nc_ht=scontent-den2-1.xx&oh=03_AdQE2z8jUQd0wczDpIq0NrqHB6ixwpi0xjpUIufH7xzAzg&oe=65E78588"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/411921749_1376080853302048_7231323581501126918_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=103&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=qVeWhp8kScgAX-U2P9P&_nc_ht=scontent-den2-1.xx&oh=03_AdTfoKUFpDAo507c3jA3InQSU1Xd_o3rUGPFbiZ4crmFIA&oe=65E7AA21"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/346120875_257348780103988_993754234629024321_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=sBWtklgRw68AX_1glBN&_nc_ht=scontent-den2-1.xx&oh=03_AdTN_5N90J8dLbLkUYq-a1B9mKT3ZYR07m_CNcasgU-MJw&oe=65E7A32B"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/411599741_388901333525932_977968389369539979_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=8rSAOUMfdd8AX9v8NDt&_nc_ht=scontent-den2-1.xx&oh=03_AdQoskDdDzVL2vWHkyMI-49ukZqHKDTM9BGzAAlcv2sBhg&oe=65E7987D"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/420728349_2195524780793226_7601130403994228160_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=Ax5E0_1ntDQAX89OfMS&_nc_oc=AQnsW4x5fslgcUmK4pHIJ0zbQVprg62FzHtbrrvkDMUwXuPjmbR9JPDd8Hcrni3UV2w&_nc_ht=scontent-den2-1.xx&oh=03_AdRXMTvEoUKFwlVyPHGCYOy6zwQ71_WbIQYSVrPjZ0OTeQ&oe=65E79DB1"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/420715699_7458431084201698_7430721430396280229_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=zaEKS5hjZncAX9a6bXI&_nc_ht=scontent-den2-1.xx&oh=03_AdTfyhzXY9cnUsGByxmmLn7JZ9aMAHpdIv1n9m_S9iOPnw&oe=65E79113"
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
              src="https://scontent-den2-1.xx.fbcdn.net/v/t1.15752-9/421205364_1737647296745210_9033208102220993354_n.jpg?stp=dst-jpg_p1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=k8GpA3yt5c0AX91Nfcc&_nc_ht=scontent-den2-1.xx&oh=03_AdSHBFJs9yunY_apM8qqT63gtKWYMTVzc1iS5jD8Okm8DQ&oe=65E7AD44"
              alt="facial, wax, and permanent makeup before and after"
            />
          </motion.li>
        </ul>
      </section>
    </div>
  );
}
