import React, {useState} from 'react'

const TodoForm = ({addTodo,setErrorMessage}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(value.trim() !== ''){
          addTodo(value)
          setValue("")
        }else{
          setErrorMessage('Please enter a valid task')
        }
        
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='What is the task today?' onChange={(event)=>setValue(event.target.value)}></input>
        <button className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
