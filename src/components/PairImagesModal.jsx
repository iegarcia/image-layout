import { Button, Image, Modal } from "react-bootstrap";

const PairImagesModal = (props) => {
  const { link, name } = props.content;

  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <Image fluid src={link} alt={name} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PairImagesModal;
