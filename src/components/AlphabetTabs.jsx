import React from "react";

const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const AlphabetTabs = ({ employees, addEmployee, removeEmployee }) => {
  let sortedEmployeesArr = employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    }
    if (a.lastName > b.lastName) {
      return 1;
    }
    return 0;
  });

  const checkHendler = (event, value) => {
    if (event.target.checked) {
      addEmployee(value);
    } else if (!event.target.checked) {
      removeEmployee(value);
    }
  };

  return (
    <>
      {alphabet.map((a) => {
        return (
          <div className="col" key={a}>
            <p className="font-weight-bold">{a}</p>
            <div>
              {sortedEmployeesArr.map((emp) => {
                if (emp.lastName[0] === a) {
                  return (
                    <div key={emp.id}>
                      <input
                        checked={emp.checked}
                        type="checkbox"
                        className="form-check-input"
                        id="customCheck1"
                        onChange={(e) => checkHendler(e, emp.id)}
                      ></input>
                      <p>{emp.lastName + " " + emp.firstName}</p>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
