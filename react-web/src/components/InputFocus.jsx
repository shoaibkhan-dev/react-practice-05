

function InputFocus() {
  const submitHandler = (e) => {
      e.preventDefault()
      console.log('form submited without page reload')
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="write something..." />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default InputFocus;
