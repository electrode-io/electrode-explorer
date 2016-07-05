import {Component, PropTypes} from "react";

export default class StateWrapper extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = props.initialState;
    this._refs = {};
  }

  render() {
    return this.props.render(
      this.state,
      this.setState.bind(this),
      this._refs,
      (key) => (ref) => this._refs[key] = ref
    );
  }
}

StateWrapper.propTypes = {
  render: PropTypes.func.isRequired,
  initialState: PropTypes.any
};

