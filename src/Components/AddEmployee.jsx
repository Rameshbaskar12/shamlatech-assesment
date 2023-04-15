import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap' 
import { GlobalContext } from '../Context/GlobalState'
import uuid from 'react-uuid';

function AddEmployee() {
    const [formData, setFormData] = useState({
        id: uuid(),
        name: '',
        salary: '',
        age: '',    
    })

    const { addEmployee } = useContext(GlobalContext);
    const navigate = useNavigate();

    function handleChange(event) {
        // console.log(event)
        const {name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    const handleSubmit = () => {
        addEmployee(formData);
        navigate('/');
    }
  return (
    <Form className='form-container' onSubmit={handleSubmit} >
        <h4 className='text-center mb-4'>Add Employee Details</h4>
        <FormGroup>
            <Label className='form-label' htmlFor='name'>Name</Label>
            <Input
                name='name'
                value={formData.name}
                onChange={handleChange}
                type='text'
                placeholder='Enter Name'
            />
        </FormGroup>
        <FormGroup>
            <Label className='form-label' htmlFor='salary'>Salary</Label>
            <Input
                name='salary'
                value={formData.salary}  
                onChange={handleChange}          
                type='text'
                placeholder='Enter Salary'
            />
        </FormGroup>
        <FormGroup>
            <Label className='form-label' htmlFor='age'>Age</Label>
            <Input
                name='age'
                value={formData.age}    
                onChange={handleChange}        
                type='text'
                placeholder='Enter Age'
            />
        </FormGroup>
        <div className='mt-5'>
            <Button color='success' type='submit'>Register</Button>
            <Link to='/' className='btn btn-danger ms-2'>Cancel</Link>
        </div>
    </Form>
  )
}

export default AddEmployee