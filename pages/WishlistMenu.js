import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeartCirclePlus, faPlane } from "@fortawesome/free-solid-svg-icons";

const WishlistMenu = () => {
  return (
    <div>
      <FontAwesomeIcon className="icon" icon={faStar} />
      <FontAwesomeIcon icon={faHeartCirclePlus} />
      <FontAwesomeIcon icon={faPlane} />
    </div>
  );
};

export default WishlistMenu;
