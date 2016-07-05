
/**
 *
 *  "configs": {
   "SubMenu": [{
     "link": {
       "linkText": "Your Account",
       "title": "Your Account",
       "clickThrough": {
         "type": "url",
         "value": "account"
       },
       "uid": "c5SoiEZ9"
     },
     "uid": "BY447SQL"
   }]
 }
 */

const ACN = "ACN-";
const LNK = "LNK-";

const generateAccountNavUids = (configs) => {
  const updatedConfigs = Object.assign({}, configs);
  const updatedConfigsElements = updatedConfigs.SubMenu;

  let subMenuUidCounter = 1;
  let linkUidCounter = 1;

  if (updatedConfigsElements.length) {
    updatedConfigsElements.forEach((subMenu) => {
      subMenu.uid = `${ACN} ${subMenuUidCounter}`;
      subMenu.link.uid = `${ACN} ${subMenuUidCounter} - ${LNK} ${linkUidCounter}`;
      subMenuUidCounter++;
      linkUidCounter++;
    });
  }

  return updatedConfigs;
};

export default generateAccountNavUids;
