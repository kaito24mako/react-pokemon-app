import close from "../../../assets/close.png";

function CloseBtn({ handleCloseModal }) {
  return (
    // on click, close modal
    <button className="close-modal-button" onClick={handleCloseModal}>
      <img src={close} alt="Close button" />
    </button>
  );
}

export default CloseBtn;
