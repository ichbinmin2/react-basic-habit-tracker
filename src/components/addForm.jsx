import React from "react";

const AddForm = (props) => {
  const inputRef = React.createRef();
  // 리액트에서 제공하는 createRef(). React 공식사이트에서 확인.

  const onSubmit = (event) => {
    event.preventDefault(); // 리프레쉬 방지
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = "";
    // submit 완료 후에 input 창 비워두게 하는 식
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="add-input"
        placeholder="Habit"
      ></input>
      <button className="add-button">Add</button>
    </form>
  );
};

export default AddForm;
