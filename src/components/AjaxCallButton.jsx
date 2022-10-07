import { Button } from "react-bootstrap";

const AjaxCallButton = () => {
  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("ajaxText").innerHTML = this.responseText;
    };
    xhttp.open("GET", "http://localhost:3000/home.json");
    xhttp.send();
  }

  return (
    <div>
      <Button variant="danger" onClick={loadDoc}>
        Cargar Texto” y textarea
      </Button>
      <br />
      <br />
      <textarea name="text" id="ajaxText" cols="35" rows="5"></textarea>
    </div>
  );
};

export default AjaxCallButton;
