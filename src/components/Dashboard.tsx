export interface dashboardProps {
  color: string;
  image: string;
  title?: string;
  description?: string;
}

const Dashboard: React.FC<dashboardProps> = ({ color, image }) => {
  return <div className={`dashboard dashboard__${color}`}>
    <img src={image}/>
  </div>;
};

export default Dashboard;
