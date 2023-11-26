import "../css/StoryPage_temp.css";
import PropTypes from "prop-types";

import { useState } from "react";
import StorySlide from "../components/StorySlide";

function StoryPage_temp({ isMobile }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='mainSPT'>
      <h1>test</h1>
      <button onClick={openPopup}>Open Popup</button>
      {isPopupOpen && <StorySlide onClose={closePopup} />}
    </div>
  );
}

StoryPage_temp.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default StoryPage_temp;
