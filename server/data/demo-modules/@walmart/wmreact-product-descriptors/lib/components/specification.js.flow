/* @flow */
import React from "react";

import Table from "@walmart/wmreact-table/lib/components/table";

/**
This componet display the specification chart of an item.
```jsx
<Specification
  specifications={specsData}
/>
*/

const Specification = (props) => {

  const {specifications, stripeStyle} = props;
  const specRows = specifications.map((specification, idx) => {
    return (
      <Table.Row key={`spec-${idx}`}>
        <Table.Cell className="display-name">
          {specification.DisplayName}
        </Table.Cell>
        <Table.Cell className="value font-semibold">
          {specification.Value.reduce((previous, current) => `${previous}, ${current}`)}
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <Table striped={stripeStyle} className="specification">
      <Table.Body>
        {specRows}
      </Table.Body>
    </Table>
  );
};

Specification.propTypes = {
  /**
   specification data
  */
  specifications: React.PropTypes.arrayOf(React.PropTypes.shape({
    DisplayName: React.PropTypes.string.isRequired,
    Value: React.PropTypes.array.isRequired
  })).isRequired,
  /**
   style. Could be "odd", "even", "light-odd", "light-even"
  */
  stripeStyle: React.PropTypes.string
};

Specification.defaultProps = {
  stripeStyle: "odd"
};

export default Specification;
