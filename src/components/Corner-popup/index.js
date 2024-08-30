import React, { useState, useEffect } from "react";
import Button from "../../reusecore/Button";
import { ReactComponent as CloseIcon } from "./closeIcon.svg";
import popupImageSmall from "./power-of-meshplay-small.png";
import CornerPopupWrapper from "./popup.style";

const CornerPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("showPopup")) {
      setTimeout(() => {
        setShowPopup(true);
      }, 8000);
      localStorage.setItem("showPopup", true);
    } else setShowPopup(false);
  },[]);

  return (
    showPopup &&
    <CornerPopupWrapper>
      <div>
        <div className="popup">
          <div className="popup-inner">
            <div className="close-btn" onClick={() => setShowPopup(false)}>
              <CloseIcon />
            </div>
            <a href="https://play.meshplay.khulnasoft.com/">
              <img className="popup-image" src={popupImageSmall} />
            </a>
            <Button primary className="explore-playground-button" title="Access Playground" url="https://play.meshplay.khulnasoft.com/" />
          </div>
        </div>
      </div>
    </CornerPopupWrapper>
  );
};

export default CornerPopup;
