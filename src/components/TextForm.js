import React,{useState} from 'react'


export default function TextForm() {
    const handleOnChange=(event)=>{
        setText(event.target.value);

    }
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)

    }
    const handleLowClick=()=>{
      let newText=text.toLowerCase();
      setText(newText)

  }
    const [text,setText]=useState("");
   
  return (
    <>
    <div className="container">
        <div className="mb-3">
        <label for="myBox" className="form-label">Example textarea</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to uppercase</button> 
        <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to Lowercase</button> 
    </div>
    <div className="container my-3">
      <h1>Your text Summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>

    </div>
    </>
  )
}
