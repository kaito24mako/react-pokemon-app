import close from "../../../assets/icons/button/close.png";

import { playClickSound } from "../../audio/click";

function CloseBtn({ closeModal }) {
  return (
    <button
      className="close-modal-button"
      onClick={() => {
        closeModal();
        playClickSound();
      }}
    >
      <img src={close} alt="Close button" />
    </button>
  );
}

export default CloseBtn;
