 import React, { useState } from 'react'
 
 export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked: " + text); 
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case!","success");
    }
    const handleLoClick = () => {
        // console.log("UpperCase was Clicked: " + text); 
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case!","success");
    }
    const handleClearClick = ()=> {
        let newText = '';
        setText(newText);
        props.showAlert("Clear Text!","success");
    }
    const handleCopy = ()=> {
        // let newText = document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copy to Clipboard!","success");
    }
    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed!","success");
    }
    const handleOnChange = (event)=> {
        // console.log("ON Change");
        setText(event.target.value);
    }
    const [text, setText] = useState("");
   return (
    <>
        <div className="conatiner" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{background: props.mode === 'dark'?'#13466e':'white', color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Ramove Extra Space</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>Your text Summary </h2>
            <p><b>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} Words and {text.length} character</b></p>
            <p>{0.008 * text.split(" ").filter((ele) => {return ele.length !== 0}).length} Mintes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Noting to Preview!"}</p>
        </div>
    </>
   )
 }
