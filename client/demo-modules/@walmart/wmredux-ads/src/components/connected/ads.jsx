import {connect} from "react-redux";
import {Ads} from "@walmart/wmreact-ads";
export default connect(({ads}) => ({ads}))(Ads);
