import React from "react";
import { fetchJSON } from "@walmart/electrode-fetch";

export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    };
  }

  componentWillMount() {
    return fetchJSON(`http://localhost:3000/portal/data/orgs.json`)
      .then((res) => {
        const menu = res.orgs;
        console.log("menu", menu);
        this.setState({ menu });
      }).catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { menu } = this.state;
    console.log("render menu", menu);
//change a to react router Link obv
// Plus submodules
//           return (<div className="repoLink"><a href={"/portal/" + repo.link}>{repo.name}</a></div>);
 

    return (
      <div className="portalMenu">
      {menu && Object.keys(menu).map((org) => {
        <span>
          <div className="orgName">{org}</div>
        </span>
      })}
      </div>
    );
  }
} 
