import React from 'react'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Todo = ({todo, onDelete}) => {
  return (
        <div
            className="modal show"
            style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header className="bg-dark text-light">
                <Modal.Title>{todo.sno}. {todo.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body className="bg-dark text-light">
                <p>{todo.desc}</p>
                </Modal.Body>

                <Modal.Footer className="bg-dark text-light">
                    <Button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
   )
}

export default Todo