import React, { PureComponent } from "react";

class AddForm extends PureComponent {
  inputRef = React.createRef();
  // 리액트에서 제공하는 createRef(). React 공식사이트에서 확인.

  onSubmit = (event) => {
    event.preventDefault(); // 리프레쉬 방지
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
    // submit 완료 후에 input 창 비워두게 하는 식
  };
  render() {
    return (
      <form className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        ></input>
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default AddForm;
