import React, { useRef, useCallback } from 'react'

const InputContainer = ({ onAdd }) => {
  const inputRef = useRef(null)

  const handleAdd = useCallback(() => {
    onAdd({ description: inputRef.current.value, complete: false })
    inputRef.current.value = ''
  }, [inputRef, onAdd])

  return (
    <div id="inputContainer">
      <input
        type="text"
        id="toDoInput"
        placeholder="Descripción To-Do..."
        ref={inputRef}
      />
      <div id="addButton" onClick={handleAdd}>
        <span>AGREGAR</span>
      </div>
    </div>
  )
}

export default InputContainer
