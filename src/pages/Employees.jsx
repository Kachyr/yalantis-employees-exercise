import React from "react";
import { EmployeesTable } from "../components/EmployeesTable.jsx";
import { Birthday } from "../components/Birthday.jsx";

import {
  getEmployeesThunk,
  addEmployee,
  removeEmployee,
} from "../redux/employeeReducer.js";
import { connect } from "react-redux";

class Employees extends React.Component {
  componentDidMount() {
    if ("state" in localStorage === null) this.props.getEmployeesThunk();
  }

  render() {
    return (
      <div className="row">
        <EmployeesTable
          employees={this.props.employees}
          removeEmployee={this.props.removeEmployee}
          addEmployee={this.props.addEmployee}
        />
        <Birthday employees={this.props.employees} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    employees: state.employeesPage.employees,
    pointedPeopleID: state.employeesPage.pointedPeopleID,
  };
};

export default connect(mapStateToProps, {
  getEmployeesThunk,
  addEmployee,
  removeEmployee,
})(Employees);
