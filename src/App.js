import React,{useState, useEffect} from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo
    }))
    localStorage.setItem('todos',JSON.stringify(todos))
  }
    let sno;
    const addTodo = (title, desc) => {
      if(todos.length===0){
        sno=1
      } else{
         sno =  todos[todos.length-1].sno+1;
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos, myTodo])
    }
  const [todos, setTodos] = useState (initTodo)
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  return (
    <>
    
      <Navbar/>
        <Routes>
          <Route path='/' element={<AddTodo addTodo={addTodo}/>} />
          <Route path='/todos' element={<Todos todo={todos} onDelete={onDelete} />} />
          </Routes>
      <Footer/>
    
    </>
  );
}

export default App;