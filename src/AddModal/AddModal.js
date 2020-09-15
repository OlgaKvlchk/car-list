import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import "./AddModal.css";

class AddModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      carNumber: "",
      engineType: "",
      model: "",
    };
    this.onChangeBrand = this.onChangeBrand.bind(this);
    this.onChangeCarNumber = this.onChangeCarNumber.bind(this);
    this.onChangeEngineType = this.onChangeEngineType.bind(this);
    this.onChangeModel = this.onChangeModel.bind(this);
  }

  onChangeBrand(event) {
    this.setState({ brand: event.target.value });
  }

  onChangeCarNumber(event) {
    this.setState({ carNumber: event.target.value });
  }

  onChangeEngineType(event) {
    this.setState({ engineType: event.target.value });
  }

  onChangeModel(event) {
    this.setState({ model: event.target.value });
  }

  componentDidUpdate(prevProps) {
    if (this.props.car !== prevProps.car) {
      console.log(this.props.car);
      this.setState(this.props.car);
    }
  }

  render() {
    return (
      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{this.props.title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            label="Brand"
            type="text"
            value={this.state.brand}
            onChange={this.onChangeBrand}
          />
          <TextField
            autoFocus
            margin="dense"
            name="carNumber"
            label="Car Number"
            type="text"
            value={this.state.carNumber}
            onChange={this.onChangeCarNumber}
          />
          <FormControl className="engine-type-select">
            <InputLabel id="engineType">Engine Type</InputLabel>
            <Select
              labelId="engineType"
              value={this.state.engineType}
              onChange={this.onChangeEngineType}
            >
              <MenuItem value={"GAS"}>GAS</MenuItem>
              <MenuItem value={"HYBRID"}>HYBRID</MenuItem>
              <MenuItem value={"FUEL"}>FUEL</MenuItem>
            </Select>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            name="model"
            label="Model"
            type="text"
            value={this.state.model}
            onChange={this.onChangeModel}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => this.props.onSave(this.state)} color="primary">
            {this.props.buttonName}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default AddModal;
