import React from "react";

// DATE WITH RIGHT FORMAT
function formatDate(date) {
  const reDate = new Date(date);
  const monthString = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = reDate.getDate();
  const month = monthString[reDate.getMonth()];
  const year = reDate.getFullYear();

  return `${day} ${month}, ${year} year`;
}
//============================

export const Birthday = ({ employees }) => {
  return (
    <div className="col">
      <h2>Employees Birthday</h2>
      <ul className="list-group">
        {employees.length ? (
          employees.map( (emp) => emp.checked ? (
            <li key={emp.id} className="list-group-item ">
              {`${emp.firstName} ${emp.lastName} - ${formatDate(emp.dob)}`}
            </li>
          ):null)
        ) : (
          <li key="No users chosen" className="list-group-item ">
            Chose some people!
          </li>
        )}
      </ul>
    </div>
  );
};

// employees.map((emp) =>
//           pointedPeopleID.some((id) => id === emp.id) ? (
//             <li key={emp.id} className="list-group-item ">
//               {`${emp.firstName} ${emp.lastName} - ${emp.dob}`}
//             </li>
//           ) : null
//         )
