import React, { useCallback } from 'react'

const ToDoContainer = ({ data, onCompleteToDo }) => {
  const handleCompleteToDo = useCallback(
    (e) => {
      onCompleteToDo(e.target.id)
    },
    [onCompleteToDo]
  )
  return (
    <div id="toDoContainer">
      {data.map((toDo, index) => {
        return (
          <div className="toDoShell" key={index}>
            <span
              id={index}
              onClick={handleCompleteToDo}
              className={toDo.complete ? 'completeText' : ''}
            >
              {toDo.description}
            </span>
            <input
              id={index}
              className="completeCheckbox"
              onClick={handleCompleteToDo}
              onChange={handleCompleteToDo}
              type="checkbox"
              checked={toDo.complete}
              value=""
            />
          </div>
        )
      })}
    </div>
  )
}

export default ToDoContainer
