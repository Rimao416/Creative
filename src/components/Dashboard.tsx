import {motion} from "framer-motion"

export interface dashboardProps {
  color: string;
  image: string;
  title?: string;
  description?: string;
}
const fadeInUp = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Dashboard: React.FC<dashboardProps> = ({ color, image }) => {
  return <div className={`dashboard dashboard__${color}`}>
    <motion.img variants={fadeInUp} src={image}/>
  </div>;
};

export default Dashboard;
