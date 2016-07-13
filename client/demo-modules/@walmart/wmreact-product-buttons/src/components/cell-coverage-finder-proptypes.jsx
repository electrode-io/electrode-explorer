import { PropTypes } from "react";
import {
  CELL_COVERAGE_FINDER_PROMPTED,
  CELL_COVERAGE_FINDER_CLOSED,
  CELL_COVERAGE_FINDER_LOADING
} from "../enums/cell-coverage-action-status";

const CellCoverageFinderPropTypes = {
  /*
    The postal zip code.
  */
  zipCode: PropTypes.string,
  /*
    Determines the state in which the component should be rendered.
  */
  status: PropTypes.oneOf([
    CELL_COVERAGE_FINDER_PROMPTED,
    CELL_COVERAGE_FINDER_LOADING,
    CELL_COVERAGE_FINDER_CLOSED]),
  /*
    The information message in the flyout.
  */
  heading: PropTypes.node,
  /*
    Callback handler when zip code is searched for onLocationUpdated.
  */
  onLocationUpdate: PropTypes.func,
  /*
    Label for the zip code search button
  */
  searchButtonLabel: PropTypes.string,
  /*
    Callback handler when the flyout is closed.
  */
  onFlyoutClosed: PropTypes.func,
  /*
    Calllback handler for the flyout trigger element.
  */
  onClick: PropTypes.func
};

export default CellCoverageFinderPropTypes;
