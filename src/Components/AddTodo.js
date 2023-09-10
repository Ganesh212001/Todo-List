import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'

function AddTodo({addTodo}) {
    const navigate = useNavigate();
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const Submit = (e) => {
        e.preventDefault()
        addTodo(title, desc)
        navigate("/todos");
        setTitle('')
        setDesc('')
    }
  return (
    <div className='container my-3' style={{height:"81vh"}}>
        <h3>Add a Todo</h3>
        <Form className='my-3' onSubmit={Submit}>
        <Form.Group className="mb-3">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control type="text" placeholder="Enter Title" id='title' value={title} onChange={(e)=>{setTitle(e.target.value)}} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Todo Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" id='desc' value={desc} onChange={(e)=>{setDesc(e.target.value)}} required/>
        </Form.Group>
        <Button className='btn-sm' variant="dark" type="submit">
            Add Todo
        </Button>
        </Form>
    </div>
  );
}

export default AddTodo;