# Modal

Generic modal interface components.

## Installation

```
npm install @walmart/wmreact-modal
```

## Full-Featured Example

```js

import Container from "@walmart/wmreact-modal/lib/components/container";
import Modal from "@walmart/wmreact-modal/lib/components/modal";
import Layout from "@walmart/wmreact-modal/lib/components/layout";
import ButtonGroup from "@walmart/wmreact-modal/lib/components/button-group";

...

class ExampleModal extends React.Component {
  render() {
    const {dismissAction, confirmAction, closeModalAction} = this.props;

    const dismiss = () => {
      dismissAction();
      closeModalAction();
    };

    const confirm = () => {
      confirmAction();
      closeModalAction();
    };

    const layout = () => this.refs.layout.layout();

    return (
      <Container freezeScroll onClose={dismiss}>
        <Modal size="medium" onClose={dismiss}>
          <Layout
            ref="layout"
            divided
            shadows
            margins
            maxHeight={800}
            minHeight={500}
            minBodyHeight={400}
            header={<h2>Modal Header</h2>}
            body={<div><Button onClick={layout}>trigger layout</Button></div>}
            footer={<div>Modal Footer</div>}
            actions={
              <ButtonGroup>
                <Button inverse onClick={dismiss}>Cancel</Button>
                <Button primary onClick={confirm}>Continue</Button>
              </ButtonGroup>
            }
          />
        </Modal>
      </Container>
    );
  }
}
```

## Scripts

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

To run the demo:

```
builder run demo
```

To view the demo, navigate to `http://localhost:4000`

To view the demo with hot reload enabled, navigate to `http://localhost:4000/webpack-dev-server/`

To run tests:

```
builder run test
```

To build /lib:

```
builder run build
```

##npm link

When using npm link, you must delete react from `zeus-components-layout/node_modules/`. This is because npm link is just a symlink, not a proper `npm install`.

You must also run `builder run build`

## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues).

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)