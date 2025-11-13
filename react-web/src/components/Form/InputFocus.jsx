// import React from 'react'
// import { useState } from 'react'

// const InputFocus = () => {
//     const [title, setTitle] = useState('')
//     const submitHandler = (e) => {
//         e.preventDefault()
//         console.log('form submited by', title)
//         setTitle('')
//     }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitHandler(e)
//       }}>
//         <input type="text" 
//         placeholder='write something' 
//         value={title}
//         onChange={(e) => {
//           setTitle(e.target.value)
//         }}
//         />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default InputFocus;

// import React from 'react'
// import { useState } from 'react'
// import './InputFocus.css'

// const InputFocus = () => {
//     const [title, setTitle] = useState('')
//     const [detail, setDetail] = useState('')
//     const [task, setTask] = useState('')
//     const handleSubmit = (e) =>{
//        e.preventDefault()
//        console.log(title, detail)
//        setTitle('')
//        setDetail('')
//     }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         handleSubmit(e)
//       }}>
//         <input type="text" 
//         placeholder='enter note' 
//         value={title}
//         onChange={(e)=>{
//           setTitle(e.target.value)
//         }}
//         />
//         <br />
//         <textarea type="text"
//          placeholder='write detail'
//         className='inp'
//          value={detail}
//          onChange={(e)=>{
//           setDetail(e.target.value)
//          }}
//           />
//           <br />
//         <button className='btn'>Add Note</button>
//       </form>
//       <div className='output'>
//         <h1>This is Output</h1>
//       </div>
//     </div>
//   )
// }

// export default InputFocus;

import React from 'react'

// 

const InputFocus = () => {
  return (
    <div>
      <h1 className='header'> hello here</h1>
      <button className='btn3'>submit</button>
      <form>
        <input type="text" placeholder='enter name'/>
        <input type="text" placeholder='enter email'/>
        <button onClick={alert('submited')}>Click Me</button>
      </form>
    </div>
  )
}

export default InputFocus;
