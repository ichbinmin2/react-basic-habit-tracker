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
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      } else {
        return item;
      }
    });
    this.setState({ habits: habits });
  };

  handleDecrement = (habit) => {
    // 함수가 habit을 인자로 어떻게 받는지 모르겠다.??? 콜백함수 복습하기
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      } else {
        return item;
      }
    });
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
      if (habit.count !== 0) {
        return { ...habit, count: (habit.count = 0) };
        // 엘리쌤 답 : return { ...habit, count: 0 };
      } else {
        return habit;
      }
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
