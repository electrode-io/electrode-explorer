import {createAction} from "redux-actions";
import {
  RENDER_BIZ_TOOLS_MOBILE,
  INDEX_SUPER_DEPT_MOBILE,
  RENDER_DEPT_MOBILE,
  INDEX_DEPT_MOBILE,
  BTOOLS_INDEX_MOBILE
} from "../actions/action-types";

export const renderBizToolsMobile = createAction(RENDER_BIZ_TOOLS_MOBILE);
export const indexSuperDeptMobile = createAction(INDEX_SUPER_DEPT_MOBILE);
export const renderDeptMobile = createAction(RENDER_DEPT_MOBILE);
export const indexDeptMobile = createAction(INDEX_DEPT_MOBILE);
export const btoolsIndexMobile = createAction(BTOOLS_INDEX_MOBILE);
