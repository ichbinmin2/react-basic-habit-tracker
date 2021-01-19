import React, { PureComponent } from "react";

class Navbar extends PureComponent {
  render() {
    return (
      <header className="navbar">
        <i className="fas fa-leaf navbar-logo" />
        <span className="title">Habit Tracker</span>
        <span className="total-count">{this.props.totalCount}</span>
      </header>
    );
  }
}

export default Navbar;
