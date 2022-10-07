import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { createRoot } from "react-dom/client";

import { images } from "../assets/data";

import PairImagesModal from "../components/PairImagesModal";
import UnpairImages from "../components/UnpairImages";
import VisitsCounter from "../components/VisitsCounter";
import AjaxCallButton from "../components/AjaxCallButton";

const Home = () => {
  const [views, setViews] = useState(0);
  const [modalShow, setModalShow] = useState(false);
  const [pairImage, setPairImage] = useState("");

  const action = (id) => {
    let pair = images[id - 1].id % 2 === 0;
    if (pair) {
      pairImages(images[id - 1]);
    } else {
      unpairImages(images[id - 1]);
    }
  };

  const unpairImages = (img) => {
    let imageWindow = window.open("", `${img.name}`, "width=800,height=400");
    let link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute(
      "href",
      "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
    );
    link.setAttribute(
      "integrity",
      "sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
    );
    link.setAttribute("crossorigin", "anonymous");
    imageWindow.document.head.append(link);

    let div = document.createElement("div");
    let root = createRoot(div);
    div.innerHTML = `${root.render(
      <UnpairImages content={img} window={imageWindow} handleViews={setViews} />
    )}`;
    imageWindow.document.body.append(div);
  };

  const pairImages = (img) => {
    setViews(img.views++);
    setModalShow(true);
    setPairImage(img);
  };

  return (
    <div>
      <Container>
        <h1 className="text-light">Image Viewer</h1>
        <hr />
        <Row xs={1} md={2} lg={6} className="justify-content-center">
          {images.map((img) => {
            return (
              <Col key={img.id}>
                <Image
                  thumbnail
                  src={img.link}
                  alt={img.name}
                  onClick={() => {
                    action(img.id);
                  }}
                />

                <p className="text-light">
                  <strong>{img.description}</strong>
                </p>
                <VisitsCounter id={img.id} />
              </Col>
            );
          })}
        </Row>
        <PairImagesModal
          content={pairImage}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <hr />
        <AjaxCallButton />
      </Container>
    </div>
  );
};

export default Home;
