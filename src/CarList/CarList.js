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

import Paper from "@material-ui/core/Paper";

const columns = [
  { name: "brand", title: "Brand" },
  { name: "carNumber", title: "Car Number" },
  { name: "engineType", title: "Engine Type" },
  { name: "model", title: "Model" },
];

const { sorting, setSorting } = { columnName: "model", direction: "asc" };
const { currentPage, setCurrentPage } = [0];
const { pageSize, setPageSize } = [5];
const pageSizes = [5, 10, 15];

class CarList extends React.Component {
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
    console.log(response);
    console.log(response.data);
    const { cars } = await response.json();
    await this.setState({
      cars,
    });
  };

  render() {
    console.log(this.state.cars);
    return (
      <div className="car-list">
        <Paper>
          <Grid rows={this.state.cars} columns={columns}>
            <SortingState sorting={sorting} onSortingChange={setSorting} />
            <IntegratedSorting />
            <PagingState
              currentPage={currentPage}
              onCurrentPageChange={setCurrentPage}
              pageSize={pageSize}
              onPageSizeChange={setPageSize}
            />
            <IntegratedPaging />
            <Table />
            <TableHeaderRow showSortingControls />
            <PagingPanel pageSizes={pageSizes} />
          </Grid>
        </Paper>
      </div>
    );
  }
}

export default CarList;
