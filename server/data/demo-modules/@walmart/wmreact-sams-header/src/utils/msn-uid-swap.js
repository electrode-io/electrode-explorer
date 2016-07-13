/**
  Returns configs object with updated uid's for analytics.
  @examples
  import generateLeftHandNavUids from "@walmart/tempo-analytics-utils"
  const newConfigs = generateLeftHandNavUids(configs);
*/


const MSN = "MSN-";
const LNK = "LNK-";

const generateMemberServicesNavUids = (configs) => {
  const updatedConfigs = Object.assign({}, configs);
  const menuLinks = updatedConfigs.menuLinks;

  let menuLinkUidCounter = 1;
  let linkUidCounter = 1;

  if (menuLinks.length) {
    menuLinks.forEach((menulink) => {
      menulink.uid = `${MSN} ${menuLinkUidCounter}`;
      menulink.link.uid = `${MSN} ${menuLinkUidCounter} - ${LNK} ${linkUidCounter}`;

      menuLinkUidCounter++;
      linkUidCounter++;
    });
  }

  return updatedConfigs;
};

export default generateMemberServicesNavUids;
