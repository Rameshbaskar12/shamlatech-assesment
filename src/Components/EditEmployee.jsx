import React, { useContext, useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap' 
import { GlobalContext } from '../Context/GlobalState'

function EditEmployee() {
    const [selectedFormData, setSelectedFormData] = useState({
        id: '',
        name: '',
        salary: '',
        age: '',
    })

    const { employees, editEmployee } = useContext(GlobalContext);
    const navigate = useNavigate();
    const { id:currentEmployeeId } = useParams();

    useEffect(() => {
        const employeeId = currentEmployeeId;
        const selectedEmployee = employees.find(employee => employee.id === employeeId);
        setSelectedFormData(selectedEmployee);
    }, [currentEmployeeId, employees])

    function handleChange(event) {
        const {name, value } = event.target
        setSelectedFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        editEmployee(selectedFormData);
        navigate('/');
    }

  return (
    <Form className='form-container' onSubmit={handleSubmit}>
        <h4 className='text-center mb-4'>Edit Employee Details</h4>
        <FormGroup>
            <Label className='form-label' htmlFor='name'>Name</Label>
            <Input
                name='name'
                value={selectedFormData.name}
                onChange={handleChange}            
                type='text'
                placeholder='Enter Name'
            />
        </FormGroup>
        <FormGroup>
            <Label className='form-label' htmlFor='salary'>Salary</Label>
            <Input
                name='salary'
                value={selectedFormData.salary}
                onChange={handleChange}            
                type='text'
                placeholder='Enter Salary'
            />
        </FormGroup>
        <FormGroup>
            <Label className='form-label' htmlFor='age'>Age</Label>
            <Input
                name='age'
                value={selectedFormData.age}
                onChange={handleChange}            
                type='text'
                placeholder='Enter Age'
            />
        </FormGroup>
        <div className='mt-4' >
            <Button color='success' type='submit'>Edit & Save</Button>
            <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
        </div>
    </Form>
  )
}

export default EditEmployee