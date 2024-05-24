import Button from "./Button";
import { dashboardProps } from "./Dashboard";
const Features: React.FC<dashboardProps> = ({
  color,
  image,
  title,
  description,
}) => {

  return (
    <div className={`features`}>
      <img src={image} className={`features__${color}`} />
      <p className="features__title">{title}</p>
      <p className="features__description">{description?.slice(0, 100)}</p>
      <div>
        <Button title="En savoir plus" type="outline" />
      </div>
    </div>
  );
};
export default Features;
