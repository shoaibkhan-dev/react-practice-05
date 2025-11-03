import React from 'react'
import { useState } from 'react'

const InputFocus = () => {
    const [title, setTitle] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        console.log('form submited by', title)
    }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" 
        placeholder='write something' 
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
          
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default InputFocus

