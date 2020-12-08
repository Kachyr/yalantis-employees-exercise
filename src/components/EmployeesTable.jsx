import React from "react";
import { AlphabetTabs } from "./AlphabetTabs";

export const EmployeesTable = ({ employees, addEmployee, removeEmployee }) => {
  return (
    <div className="col-8">
      <h2>Employees</h2>
      <div className="row row row-cols-5">
        <AlphabetTabs
          employees={employees}
          addEmployee={addEmployee}
          removeEmployee={removeEmployee}
        />
      </div>
    </div>
  );
};
