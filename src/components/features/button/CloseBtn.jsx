import close from "../../../assets/icons/button/close.png";

import { playClickSound } from "../../audio/click";

function CloseBtn({ handleCloseModal }) {
  return (
    // on click, close modal
    <button
      className="close-modal-button"
      onClick={() => {
        handleCloseModal();
        playClickSound();
      }}
    >
      <img src={close} alt="Close button" />
    </button>
  );
}

export default CloseBtn;
