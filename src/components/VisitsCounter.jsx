import { Image } from "react-bootstrap";
import eye from "../assets/eye.svg";
import { images } from "../assets/data";

const VisitsCounter = ({ id }) => {
  return (
    <div>
      <Image src={eye} alt="views" width="37px" />
      <p className="text-light">{images[id - 1].views} </p>
    </div>
  );
};

export default VisitsCounter;
