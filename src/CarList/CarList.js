import React from "react";
import "./CarList.css";
import {
  Grid,
  Table,
  TableHeaderRow,
  PagingPanel,
} from "@devexpress/dx-react-grid-material-ui";
import {
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
} from "@devexpress/dx-react-grid";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddModal from "../AddModal/AddModal";

import Paper from "@material-ui/core/Paper";

const columns = [
  { name: "brand", title: "Brand" },
  { name: "carNumber", title: "Car Number" },
  { name: "engineType", title: "Engine Type" },
  { name: "model", title: "Model" },
  { name: "actions", title: "Actions" },
];

const { sorting, setSorting } = { columnName: "model", direction: "asc" };
const { currentPage, setCurrentPage } = [0];
const { pageSize, setPageSize } = [5];
const pageSizes = [5, 10, 15];

class CarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      editCar: {},
    };
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleClickOpen(editCar) {
    console.log(editCar);
    this.setState({ open: true, editCar: editCar });
  }

  ActionCell = ({ row, column, ...restProps }) =>
    column.name === "actions" ? (
      <Table.Cell>
        <IconButton aria-label="delete" onClick={() => this.deleteCar(row)}>
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit" onClick={() => this.handleClickOpen(row)}>
          <EditIcon />
        </IconButton>
      </Table.Cell>
    ) : (
      <Table.Cell row={row} column={column} {...restProps} />
    );

  deleteCar = async (car) => {
    const response = await fetch(`/api/car/${car.id}`, {
      method: "DELETE",
    });
    const carList = this.props.cars.filter((item) => item.id !== car.id);
    this.props.setCarList(carList);
    console.log(response);
  };

  editCar = async (car) => {
    const response = await fetch(`/api/car/${car.id}`, {
      method: "PUT",
    });
    const carList = this.props.cars.map((item) =>
      item.id === car.id ? car : item
    );
    this.props.setCarList(carList);
    this.handleClose();
    console.log(response);
  };

  render() {
    return (
      <div className="car-list">
        <Paper>
          <Grid rows={this.props.cars} columns={columns}>
            <SortingState sorting={sorting} onSortingChange={setSorting} />
            <IntegratedSorting />
            <PagingState
              currentPage={currentPage}
              onCurrentPageChange={setCurrentPage}
              pageSize={pageSize}
              onPageSizeChange={setPageSize}
            />
            <IntegratedPaging />
            <Table cellComponent={this.ActionCell} />
            <TableHeaderRow showSortingControls />
            <PagingPanel pageSizes={pageSizes} />
          </Grid>
        </Paper>
        <AddModal
          title="Edit car information"
          buttonName="Edit"
          car={this.state.editCar}
          onSave={this.editCar}
          onClose={this.handleClose.bind(this)}
          open={this.state.open}
        />
      </div>
    );
  }
}

export default CarList;
