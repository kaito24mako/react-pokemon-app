import close from "../../../assets/icons/button/close.png";

import { playClickSound } from "../../audio/click";

function CloseBtn({ handleCloseModal }) {
  return (
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
