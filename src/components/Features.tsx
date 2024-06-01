import Button from "./Button";
import { dashboardProps } from "./Dashboard";
import { motion } from "framer-motion";
const easing = [0.175, 0.85, 0.42, 0.96];

const fadeInUp={
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5, // L'animation durera 0.5 seconde
      ease: easing,

    },
  },
}
const Features: React.FC<dashboardProps> = ({
  color,
  image,
  title,
  description,
}) => {

  return (
    <motion.div className={`features`} variants={fadeInUp}>
      <img src={image} className={`features__${color}`} />
      <p className="features__title">{title}</p>
      <p className="features__description">{description?.slice(0, 100)}</p>
      <div>
        <Button title="En savoir plus" type="outline" />
      </div>
    </motion.div>
  );
};
export default Features;
