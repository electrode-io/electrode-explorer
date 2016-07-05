import {connect} from "react-redux";
import Ads from "../ads";
export default connect(({ads}) => ({ads}))(Ads);
