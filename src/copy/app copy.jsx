import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits.jsx";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    // console.log(`handleIncrement ${habit.count}`);
    const habits = [...this.state.habits];
    // '...'은 Spread Operator 하는 연산자이다.
    const index = habits.indexOf(habit);
    habits[index].count++;
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    // console.log(`handleDencrement ${habit.name}`);
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({
      habits: habits,
    });
  };

  handleDelete = (habit) => {
    console.log(`handleIDelete ${habit.name}`);
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // habits.splice(habits[index], 1);
    // this.setState({
    //   habits: habits,
    // });
    // => 위에서 아래로 차례대로 지워지지만 아래에서부터는 원하는 인덱스가 지워지지 않는다.
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({
      habits: habits,
    });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({
      habits: habits,
    });
  };

  handleReset = () => {
    const habits = this.state.habits.map((habit) => {
      habit.count = 0;
      return habit;
    });
    this.setState({ habits: habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
