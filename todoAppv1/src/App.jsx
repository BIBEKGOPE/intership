import { useState } from 'react'



//components
import InputTodo from './components/inputTodo';
import ListTodos from './components/ListTodo';
function App() {
  

  return (
    <>
    <div className='container'>
     <InputTodo/>
     <ListTodos/>
     </div>
     </>
  )
}

export default App
