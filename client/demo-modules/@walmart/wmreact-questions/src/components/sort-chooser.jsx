import React from "react";
import Chooser from "@walmart/wmreact-chooser";

/**
@private
*/
export default class SortChooser extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <label>
          <span className="font-semibold valign-middle hide-content-max-xs">
            {this.props.title}
          </span>
          <Chooser className="chooser-alt">
            {this.props.options.map((option, index) => {
              return (
                <Chooser.Option
                  checkboxName={option.id}
                  value={option.id}
                  key={index}>
                  {option.title}
                </Chooser.Option>
              );
            })}
          </Chooser>
        </label>
      </div>
    );
  }
}

SortChooser.displayName = "SortChooser";

SortChooser.propTypes = {
  options: React.PropTypes.array,
  title: React.PropTypes.string,
  className: React.PropTypes.string
};

SortChooser.defaultProps = {
  options: [],
  title: "Sort by: "
};
