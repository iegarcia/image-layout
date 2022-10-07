import React from "react";
import { Button, Image } from "react-bootstrap";

const UnpairImages = ({ content, window, handleViews }) => {
  return (
    <div>
      <Image fluid src={content.link} alt={content.name} />
      <hr />
      <div className="d-flex" style={{ justifyContent: "space-around" }}>
        <Button variant="success" onClick={() => handleViews(content.views++)}>
          Ok
        </Button>
        <Button variant="danger" onClick={() => window.close()}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default UnpairImages;
