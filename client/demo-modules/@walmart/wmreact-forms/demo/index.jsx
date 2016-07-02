/* eslint complexity: 0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../src/index";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React }, this.props.scope || {}, libraryScope);
    return (
      <div className="component-documentation">
        {Index.Components.map((component, index) => (
          <div key={index}>
            <h3 id={component.title}>{component.title}</h3>
            {component.examples.map((example, subindex) => (
              <div key={subindex}>
                {example.title ? <h4>{example.title}</h4> : null}
                <Playground codeText={example.code}
                  scope={localScope}
                  noRender={example.noRender}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};

Index.Components = [
  {
    title: "Alert",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/alert.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Alert.png")
    }
  },
  {
    title: "DOB",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/dob.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/DOB.png")
    }
  },
  {
    title: "Email",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/email.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Email.png")
    }
  },
  {
    title: "Field",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/field.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Field.png")
    }
  },
  {
    title: "FirstName",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/firstname.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/FirstName.png")
    }
  },
  {
    title: "LastName",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/lastname.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/LastName.png")
    }
  },
  {
    title: "FullName",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/fullname.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/FullName.png")
    }
  },
  {
    title: "Message",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/message.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Message.png")
    }
  },
  {
    title: "Option",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/option.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Option.png"),
      synonyms: ["checkbox"]
    }
  },
  {
    title: "Options",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/options.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Options.png"),
      synonyms: ["checkbox"]
    }
  },
  {
    title: "PasswordExisting",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/password-existing.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/PasswordExisting.png")
    }
  },
  {
    title: "PasswordWithConfirmation",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/password-with-confirm.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/PasswordWithConfirmation.png")
    }
  },
  {
    title: "Phone",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/phone.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Phone.png")
    }
  },
  {
    title: "RadioTile",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/radio-tile.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/RadioTile.png")
    }
  },
  {
    title: "Radio",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/radio.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Radio.png")
    }
  },
  {
    title: "StoreNumber",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/store-number.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/StoreNumber.png")
    }
  },
  {
    title: "ZipCode",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/zipcode.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/ZipCode.png")
    }
  },
  {
    title: "CreditCardNumber",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/credit-card-number.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/CreditCardNumber.png")
    }
  }
];
