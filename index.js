// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway"
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // returns a new object with the original + updated key/value
  return {
    ...employee,
    [key]: value
  };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value; // changes original object
  return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee }; // clone first
  delete newEmployee[key];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}

