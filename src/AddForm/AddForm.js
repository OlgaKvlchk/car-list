import React from "react";
import "./AddForm.css";

class AddForm extends React.Component {
  render() {
    return (
      <form className="item-add-form">
        <h1 className="item-add-form-label">CAR LIST</h1>
        <button className="item-add-form-button">ADD CAR</button>
      </form>
    );
  }
}

export default AddForm;
