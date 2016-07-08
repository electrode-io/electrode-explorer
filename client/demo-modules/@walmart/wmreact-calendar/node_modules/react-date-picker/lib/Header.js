'use strict';

var React = require('react');
var P = React.PropTypes;
var onEnter = require('./onEnter');

module.exports = React.createClass({

  displayName: 'DatePickerHeader',

  propTypes: {
    onChange: P.func,
    onPrev: P.func,
    onNext: P.func,
    colspan: P.number,
    children: P.node
  },

  render: function render() {

    var props = this.props;

    return React.createElement(
      'div',
      { className: 'dp-header' },
      React.createElement(
        'div',
        { className: 'dp-nav-table' },
        React.createElement(
          'div',
          { className: 'dp-row' },
          React.createElement(
            'div',
            {
              tabIndex: '1',
              role: 'link',
              className: 'dp-prev-nav dp-nav-cell dp-cell',
              onClick: props.onPrev,
              onKeyUp: onEnter(props.onPrev)
            },
            props.prevText
          ),
          React.createElement(
            'div',
            {
              tabIndex: '1',
              role: 'link',
              className: 'dp-nav-view dp-cell',
              colSpan: props.colspan,
              onClick: props.onChange,
              onKeyUp: onEnter(props.onChange)
            },
            props.children
          ),
          React.createElement(
            'div',
            {
              tabIndex: '1',
              role: 'link',
              className: 'dp-next-nav dp-nav-cell dp-cell',
              onClick: props.onNext,
              onKeyUp: onEnter(props.onNext)
            },
            props.nextText
          )
        )
      )
    );
  }

});