import React from 'react'
import { author } from '../../package.json'

const CreatedBy = () => {
  return (
    <div>
      <span id="createdBy">
        Aplicación creada por:{' '}
        <span style={{ textTransform: 'capitalize' }}>{author}</span>
      </span>
    </div>
  )
}
export default CreatedBy
