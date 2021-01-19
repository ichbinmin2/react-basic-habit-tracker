import React, { Component } from "react";

class Habit extends Component {
  state = {
    count: 0,
  };
  handleIncrement = () => {
    // state object 안에 있는 count를 증가 한뒤 state를 업데이트 한다.
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };

  handleDecrement = () => {
    // state object 안에 있는 count를 감소 한뒤 state를 업데이트 한다.
    const count = this.state.count - 1;
    this.setState({
      count: count < 0 ? 0 : count,
    });
    console.log(this.state.count);
  };
  render() {
    console.log(this.props.habit);
    // habits component에서 props로 전달받은 habit 인자 데이터가 각각 출력된다.
    const { name, count } = this.props.habit;
    // 비동기 처리
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
