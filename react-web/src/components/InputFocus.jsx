

function InputFocus() {
  const submitHandler = (e) => {
      e.preventDefault()
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder="write something..." />
        <button onClick={submitHandler}>Submit</button>
      </form>
    </div>
  );
}

export default InputFocus;
