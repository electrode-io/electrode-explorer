/**
 *
 *  "configs": {
        "elements": [
          {
            "title": "Your Lists",
            "link": {
              "clickThrough": {
                "type": "url",
                "value": "http://m.samsclub.com/lists"
              },
              "uid": "CiNpAijP"
            },
            "hideIfLoggedIn": "false",
            "linkColor": null,
            "linkHoverColor": null,
            "uid": "CRiCqhUQ"
          }
        ]
      }
 */

const EBN = "EBN-";
const LNK = "LNK-";

const generateEyeBrowNavUids = (configs) => {
  const updatedConfigs = Object.assign({}, configs);
  const updatedConfigsElements = updatedConfigs.elements;

  let elementUidCounter = 1;
  let linkUidCounter = 1;

  if (updatedConfigsElements.length) {
    updatedConfigsElements.forEach((element) => {
      element.uid = `${EBN}${elementUidCounter}`;
      element.link.uid = `${EBN}${elementUidCounter}-${LNK}${linkUidCounter}`;

      elementUidCounter++;
      linkUidCounter++;
    });
  }

  return updatedConfigs;
};

module.exports = generateEyeBrowNavUids;
