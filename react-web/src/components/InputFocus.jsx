import React from 'react'
import { useState } from 'react'

const InputFocus = () => {
    const [title, setTitle] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('form submited')
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='write something' 
      
        onChange={(e) => {
          console.log(e.target.value)
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputFocus

