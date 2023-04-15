import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button, Table } from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'

function EmployeeList() {
    const { employees, removeEmployee } = useContext(GlobalContext);
    console.log(employees);
  return (
    <div className='container'>
      {employees.length > 0 ? (
        <>
          <Table className='mt-4'>
              <thead>
              <tr>
                  <th>Employee Name</th>
                  <th>Employee Salary</th>
                  <th>Employee Age</th>
                  <th>Edit</th>
                  <th>Delete</th>
              </tr>
              </thead>
              {employees.map(employee => (
                <tbody>
                <tr>
                    <td>{employee.name}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.age}</td>
                    <td><Link className='btn btn-warning' to={`/edit/${employee.id}`}>Edit</Link></td>
                    <td><Button onClick={() => removeEmployee(employee.id)} color='danger'>Delete</Button></td>
                </tr>
                </tbody>
              ))}
          </Table>     
        </>
      ) : (
            <div className='mt-5 text-center'>
              <h4>Currently No Employee Details Updated </h4>
              <Link to='/add'>Click here to add employee details</Link>
            </div>
          )}
    </div>

  )
}

export default EmployeeList