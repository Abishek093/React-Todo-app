import React, {useState} from 'react'

const EditTodoForm = ({editTodo, task, setErrorMessage}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = (event) =>{
        event.preventDefault();

        if(value.trim() !== ''){
        editTodo(value , task.id)
        setValue("")
        }else{
          setErrorMessage('Please enter a valid task')
        }
        
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='Update task' onChange={(event)=>setValue(event.target.value)}></input>
        <button className='todo-btn'> Update</button>
    </form>
  )
}

export default EditTodoForm
