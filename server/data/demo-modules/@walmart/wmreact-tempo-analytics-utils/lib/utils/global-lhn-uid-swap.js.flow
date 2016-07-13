/* @flow */
/**
  Returns configs object with updated uid's for analytics.
  @examples
  import generateLeftHandNavUids from "@walmart/tempo-analytics-utils"
  const newConfigs = generateLeftHandNavUids(configs);
*/

const LHN = "LHN-";
const DEPT = "DEPT-";
const CAT = "CAT-";
const IMAGE = "IMAGE";

const generateLeftHandNavUids = (configs: Object) => {
  const updatedConfigs = Object.assign({}, configs);
  const { campaignDepartment, departments = [], optionalDepartment } = updatedConfigs;
  let globalIndex = 1;

  if (campaignDepartment) {
    campaignDepartment.link.uid = `${LHN}1-CD`;
    globalIndex = 2;
  }

  if (departments.length) {
    departments.forEach((superDepartment, index) => {
      const superDepartmentIndex = globalIndex + index;
      const superDepartmentUid = `${LHN}${superDepartmentIndex}`;
      const subDepartments = superDepartment.departments || [];
      superDepartment.uid = superDepartmentUid;

      if (superDepartment.link) {
        superDepartment.link.uid = `${superDepartmentUid}-${IMAGE}`;
      }

      if (subDepartments.length) {
        subDepartments.forEach((subDepartment, subIndex) => {
          const { categories = [], department } = subDepartment;
          const subDepartmentIndex = subIndex + 1;
          const subDepartmentUid = `${superDepartmentUid}-${DEPT}${subDepartmentIndex}`;
          department.uid = subDepartmentUid;

          if (categories.length) {
            categories.forEach((cat, catIndex) => {
              const { category } = cat;
              const categoryIndex = catIndex + 1;
              category.uid = `${subDepartmentUid}-${CAT}${categoryIndex}`;
            });
          }
        });
      }
    });
  }

  if (optionalDepartment) {
    const index = globalIndex + departments.length;
    optionalDepartment.link.uid = `${LHN}${index}-OD`;
  }

  return updatedConfigs;
};

export default generateLeftHandNavUids;
