// Write your solution in this file!
const employee = {
    name: 'Yael',
    streetAddress: 'Brooklyn, NY'
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const obj = {
        ...employee,
        [key]: value
    }
    return obj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const obj = {
        ...employee
    };
    delete obj[key];
    return obj;
}

// console.log(deleteFromEmployeeByKey(employee, 'name'));

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

