import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className='container todos-div' style={{minHeight:"84vh "}}>
      <h3 className='text-center my-3'>Todos List</h3>
      {props.todo.length===0? "no todos to display":
      props.todo.map((todo) => {
        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete}/>
      })
    }
    </div>
  )
}

export default Todos
