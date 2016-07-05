/*global document:false*/
import React from "react";
import Modal from "react-modal";
import {Iframe} from "../src/index";

const markup = `<div><img class="img-hide-alt ministory-stackable-image" src="http://i5.walmartimages.com/dfw/4ff9c6c9-45f3/k2-_ded3bae0-0053-4266-94e2-7bb850a9d563.v1.jpg" /><img class="centered" src="http://i5.walmartimages.com/dfw/4ff9c6c9-a8e5/k2-_c8e25032-e0bf-47f2-9e44-e381c00b5e70.v1.png" alt=""/><a href="http://www.walmart.com/browse/toys/4171?facet=character:Frozen&amp;povid=1225661+%7C+contentZone1+%7C+undefined+%7C+2+%7C+LN-POV+Toys"><img class="fullImg" src="http://i5.walmartimages.com/dfw/4ff9c6c9-be85/k2-_d3a36e28-de77-4ab0-a2ef-b0d960890254.v1.png'" alt=""></a></div>`;
const css = "<link type='text/css' href='//i5.walmartimages.com/dfw/63fd9f59-cf7d/k2-_4bd2a32b-7a6b-4f7d-82e3-f063db356cc0.v1.css' rel='stylesheet'><link type='text/css' href='//i5.walmartimages.com/dfw/63fd9f59-41d0/k2-_78e4c63e-e3c6-420c-bb64-58923a6871dc.v1.css' rel='stylesheet'><link type='text/css' href='http://i5.walmartimages.com/dfw/4ff9c6c9-f782/k2-_f2578c90-74fc-4e9e-9ba9-f252ebe71f32.v1.css' rel='stylesheet'>";
const iframe = `<iframe scrolling="no" frameborder="0" width="100%" allowTransparency="true" marginheight="0" style="border: 0px none; vertical-align: bottom;">
            <!DOCTYPE html>
            <!--[if lt IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7 main-html-body"><![endif]-->
            <!--[if IE 7]> <html class="no-js lt-ie10 lt-ie9 lt-ie8 main-html-body"> <![endif]-->
            <!--[if IE 8]> <html class="no-js lt-ie10 lt-ie9 main-html-body"> <![endif]-->
            <!--[if IE 8]> <html class="no-js lt-ie10 lt-ie9 main-html-body"> <![endif]-->
            <!--[if gt IE 9]><!-->
            <html class="no-js main-html-body" style="height: auto;">
            <!--<![endif]-->
              <head id="iframe-15">
                <base target="_parent">
                <meta charset="utf-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link type="text/css" href="//i5.walmartimages.com/dfw/63fd9f59-cf7d/k2-_4bd2a32b-7a6b-4f7d-82e3-f063db356cc0.v1.css?iframe-15" rel="stylesheet">
                <link type="text/css" href="//i5.walmartimages.com/dfw/63fd9f59-41d0/k2-_78e4c63e-e3c6-420c-bb64-58923a6871dc.v1.css?iframe-15" rel="stylesheet">
                <link type="text/css" href="http://i5.walmartimages.com/dfw/4ff9c6c9-d5e4/k2-_2acac6d4-8673-4ecc-bf05-b8f1349c5f17.v1.css?iframe-15" rel="stylesheet">
              </head>
              <body marginheight="0" style="height: auto; background-color: transparent;">
                <div class="frozen">
                <!-- Begin Content area -->
                <div class="pov">
                <img class="centered" src="http://i5.walmartimages.com/dfw/4ff9c6c9-a8e5/k2-_c8e25032-e0bf-47f2-9e44-e381c00b5e70.v1.png" alt="" />
                <iframe src="http://i5.walmartimages.com/dfw/4ff9c6c9-5143/k2-_60318121-320d-4541-b490-51f49d6e04cb.v1.html" width="100%" height="470" frameborder="0"></iframe>
                </div>
                </div>
              </body>
            </html>
            </iframe>
          `;

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "50%"
  }
};

const modal = `
<button id="myBtn">Open Modal</button>
<div id="myModal" class="modal">
  <div class="modal-content">
    <img class="img-hide-alt ministory-stackable-image" src="http://i5.walmartimages.com/dfw/4ff9c6c9-45f3/k2-_ded3bae0-0053-4266-94e2-7bb850a9d563.v1.jpg" />
  </div>
</div>
<script>
  var modal = document.getElementById('myModal');
  var btn = document.getElementById("myBtn");
  var span = document.getElementsByClassName("close")[0];

  btn.onclick = function() {
   modal.style.display = "block";
   var e = new CustomEvent("toggle_modal", {detail: {height: "300px"}});
   document.dispatchEvent(e);
  };

  window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
     var e = new CustomEvent("toggle_modal", {detail: {height: "19px"}});
     document.dispatchEvent(e);
   }
  };
</script>
`;

const modalCSS = `<style>
.modal {
   display: none;
   position: absolute;
   top: 50%;
   left: 50%;
   right: auto;
   bottom: auto;
   border: 1px solid #ccc;
   background: #fff;
   overflow: auto;
   -webkit-overflow-scrolling: touch;
   border-radius: 4px;
   outline: none;
   padding: 20px;
   margin-right: -50%;
   transform: translate(-50%, -50%);
   width: 50%;
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
</style>`;

export default class Demo extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div className="demo">
        <div>
          <div>
            1 modal inside an iframe
          </div>
          <Iframe iframeId="0" markup={modal} css={modalCSS}/>
        </div>

        <div>
          1 iframe inside a modal:
        </div>
        <button onClick={this.openModal.bind(this)}>Open Modal</button>
        <Modal isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal.bind(this)}
          style={modalStyles}>
          <Iframe iframeId="1" markup={iframe}/>
        </Modal>

        <div>
          <div>
            1 image and 1 video in an iframe:
          </div>
          <Iframe iframeId="2" markup={iframe}/>

          <div>
            2 images and 1 link in an iframe:
          </div>
          <Iframe iframeId="3" markup={markup} css={css}/>
        </div>

      </div>
    );
  }
}
