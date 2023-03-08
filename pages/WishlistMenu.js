import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faHeartCirclePlus, faPlane } from "@fortawesome/free-solid-svg-icons";

const WishlistMenu = ({ onFavoriteClick, onCollectedClick, onOTWClick }) => {
  const handleFavoriteClick = () => {
    onFavoriteClick();
  };

  const handleCollectedClick = () => {
    onCollectedClick();
  };

  const handleOTWClick = () => {
    onOTWClick();
  };

  return (
    <div className="pc-option-menu">
      <FontAwesomeIcon className="icon" icon={faStar} onClick={handleFavoriteClick} />
      {/* on click save to the appropriate list */}
      <FontAwesomeIcon icon={faHeartCirclePlus} onClick={handleCollectedClick} />
      <FontAwesomeIcon icon={faPlane} onClick={handleOTWClick} />
    </div>
  );
};

export default WishlistMenu;
