import {
  RENDER_BIZ_TOOLS_MOBILE,
  INDEX_SUPER_DEPT_MOBILE,
  RENDER_DEPT_MOBILE,
  INDEX_DEPT_MOBILE,
  BTOOLS_INDEX_MOBILE
} from "../actions/action-types";

export default (bizToolsMob = {}, action) => {
  let result;

  const actionModified = {
    type: action.type
  };

  if (action.payload === undefined) {
    actionModified.payload = null;
  } else {
    actionModified.payload = action.payload;
  }

  switch (actionModified.type) {
  case RENDER_BIZ_TOOLS_MOBILE:
    result = {
      ...bizToolsMob,
      renderBusinessTools: actionModified.payload
    };

    break;

  case INDEX_SUPER_DEPT_MOBILE:
    result = {
      ...bizToolsMob,
      superDeptIndex: actionModified.payload
    };

    break;

  case RENDER_DEPT_MOBILE:
    result = {
      ...bizToolsMob,
      renderDept: actionModified.payload
    };

    break;

  case INDEX_DEPT_MOBILE:
    result = {
      renderBusinessTools: bizToolsMob.renderBusinessTools,
      superDeptIndex: bizToolsMob.superDeptIndex,
      renderDept: bizToolsMob.renderDept,
      deptIndex: actionModified.payload,
      btoolsIndex: bizToolsMob.btoolsIndex
    };

    break;

  case BTOOLS_INDEX_MOBILE:
    result = {
      ...bizToolsMob,
      btoolsIndex: actionModified.payload
    };

    break;


  default :
    result = {
      renderBusinessTools: false,
      superDeptIndex: null,
      renderDept: false,
      deptIndex: null,
      btoolsIndex: null
    };

    break;
  }

  return result;
};
