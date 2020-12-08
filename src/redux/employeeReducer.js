import axios from "axios";

const SET_EMPLOYEES = "SET_EMPLOYEES";
const ADD_EMPLOYEE = "ADD_EMPLOYEE";
const REMOVE_EMPLOYEE = "REMOVE_EMPLOYEE";

let initialState = {
  employees: [
    
  ],
  pointedPeopleID: [],
};

export function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_EMPLOYEES: {
      return {
        ...state,
        employees: [...action.employees],
      };
    }
    case ADD_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.map((emp) => {
          if (emp.id === action.id) {
            return { ...emp, checked: true };
          }
          return emp;
        }),
      };
    }

    case REMOVE_EMPLOYEE: {
      return {
        ...state,
        employees: state.employees.map((emp) => {
          if (emp.id === action.id) {
            return { ...emp, checked: false };
          }
          return emp;
        }),
      };
    }

    default:
      return state;
  }
}

// THUNKS
export const getEmployeesThunk = () => {
  return (dispatch) => {
    try {
      axios
        .get(`https://yalantis-react-school-api.yalantis.com/api/task0/users`)
        .then((data) => {
          dispatch(setEmployees(data.data));
        });
    } catch (err) {
      alert("Something go wrong...");
    }
  };
};

// ACTION CREATORS

export const setEmployees = (employees) => ({ type: SET_EMPLOYEES, employees });

export const addEmployee = (id) => ({ type: ADD_EMPLOYEE, id });

export const removeEmployee = (id) => ({
  type: REMOVE_EMPLOYEE,
  id,
});
