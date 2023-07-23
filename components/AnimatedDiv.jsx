
import { motion } from 'framer-motion';

const AnimatedDiv = () => {
  return (
    <div className="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
      <motion.div
        className="top-border wow fadeInDown animated"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="right-border wow fadeInRight animated"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="bottom-border wow fadeInUp animated"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      ></motion.div>
      <motion.div
        className="left-border wow fadeInLeft animated"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      ></motion.div>
    </div>
  );
};

export default AnimatedDiv;
