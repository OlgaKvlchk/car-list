import React from "react";
import "./AddForm.css";
import AddModal from "../AddModal/AddModal";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleClickOpen(e) {
    e.preventDefault();
    this.setState({ open: true });
  }

  addCar = async (newCar) => {
    console.log(newCar);
    const body = JSON.stringify(newCar);
    const response = await fetch("/api/car", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body,
    });
    const { car } = await response.json();
    this.props.setCarList([car, ...this.props.cars]);
    this.handleClose();
    console.log(car);
  };

  render() {
    return (
      <form className="item-add-form">
        <h1 className="item-add-form-label">CAR LIST</h1>
        <button
          variant="outlined"
          color="primary"
          className="item-add-form-button"
          onClick={this.handleClickOpen.bind(this)}
        >
          ADD CAR
        </button>
        <AddModal
          title="Add car"
          buttonName="Ok"
          onSave={this.addCar}
          onClose={this.handleClose.bind(this)}
          open={this.state.open}
        />
      </form>
    );
  }
}

export default AddForm;
