import { IoArrowForward } from "react-icons/io5";

export interface testimonialsProps {
    image: string;
    description: string;
    name: string;
    position: string;
    color: string;
  }

const Testimonials:React.FC<testimonialsProps> = ({
  image,
  description,
  name,
  position,
  color,
}) => {
  return (
    <div className={`people ${`people__${color}`}`}>
      <p className="people__description">{description}</p>
      <div className="people__sub">
          <div className="people__sub--wrapper">
            <img src={image} className="people__sub--image" />
            <div className="people__sub--text">
              <p className="people__sub--title">{name}</p>
              <p className="people__sub--description">{position}</p>
            </div>
          </div>
          <div className="people__sub--wrapper">
          <IoArrowForward />
          </div>
      </div>
    </div>
  );
};


export default Testimonials;
