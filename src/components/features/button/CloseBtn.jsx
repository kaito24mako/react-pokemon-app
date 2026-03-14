import close from "../../../assets/icons/button/close.png";

function CloseBtn({ closeModal }) {
  return (
    <button
      className="close-modal-button"
      onClick={() => {
        closeModal();
      }}
    >
      <img src={close} alt="Close button" />
    </button>
  );
}

export default CloseBtn;
