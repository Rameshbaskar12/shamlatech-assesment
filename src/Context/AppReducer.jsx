export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_EMPLOYEE':
            return {
                employees: state.employees.filter(employee => {
                    return employee.id !== action.payload
                })
            }

        case 'ADD_EMPLOYEE': 
            return {
                employees: [action.payload, ...state.employees]
            }

        case 'EDIT_EMPLOYEE':
            const updateEmployee = action.payload;

            const updateEmployees = state.employees.map(employee => {
                if (employee.id === updateEmployee.id) {
                    return updateEmployee;
                }
                return employee
            })

            return {
                employees: updateEmployees
            }

        default:
            return state
    }
}