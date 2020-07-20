import React, { useState, useCallback } from 'react'
import InputContainer from './InputContainer'
import ToDoContainer from './ToDoContainer'

const Container = () => {
  const [toDoItems, setToDoItems] = useState([])
  const handleAdd = useCallback(
    (toDo) => {
      setToDoItems((pre) => {
        return [...pre, toDo]
      })
    },
    [setToDoItems]
  )
  const handleCompleteToDO = useCallback(
    (index) => {
      setToDoItems((pre) => {
        pre[index].complete = true
        return [...pre]
      })
    },
    [setToDoItems]
  )
  return (
    <div id="container">
      <InputContainer onAdd={handleAdd} />
      <ToDoContainer data={toDoItems} onCompleteToDo={handleCompleteToDO} />
    </div>
  )
}

export default Container
