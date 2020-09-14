import React from "react";
import "./App.css";
import AppHeader from "../AppHeader/AppHeader";
import AddForm from "../AddForm/AddForm";
import CarList from "../CarList/CarList";

class App extends React.Component {
  render() {
    return (
      <div className="car-app">
        <AppHeader />
        <AddForm />
        <CarList />
      </div>
    );
  }
}

export default App;
