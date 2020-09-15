import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import AddForm from "../AddForm/AddForm";
import CarList from "../CarList/CarList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
    };
  }

  componentDidMount() {
    this.getCars();
  }

  getCars = async () => {
    const response = await fetch("/api/car", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    const { cars } = await response.json();
    this.setState({
      cars,
    });
  };

  render() {
    return (
      <div className="car-app">
        <AppHeader />
        <AddForm
          setCarList={(cars) => this.setState({ cars })}
          cars={this.state.cars}
        />
        <CarList
          setCarList={(cars) => this.setState({ cars })}
          cars={this.state.cars}
        />
      </div>
    );
  }
}

export default App;
