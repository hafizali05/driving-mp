import React, { Component } from "react";
import { connect } from "react-redux";

class DriverList extends Component {
  renderList() {
    return this.props.drivers.map(driver => {
      return (
        <li key={driver.name} className={"list-group-item"}>
          {driver.title}
        </li>
      );
    });
  }

  render() {
    return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    drivers: state.drivers
  };
}

export default connect(mapStateToProps)(DriverList);
