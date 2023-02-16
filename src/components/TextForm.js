import React, { useState } from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');
    const [wordsToKeep, SetWordsToKeep] = useState(0);

     // getting text and changing it
     const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // uppercase function
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.setAlertType("converted to uppercase", "success")
    }
    // lower case function
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.setAlertType("converted to lowesercase", "success")
    }
    // clear function
    const clearText = () => {
        let newText = "";
        setText(newText);
        props.setAlertType("Text cleared", "danger ")
    }
   
    // getting text and trimming it
    const handleTrimClick = (event) => {
        let newText = text.split(" ").slice(0, wordsToKeep).join(" ");
        setText(newText);
        props.setAlertType("Text trimmed", "success")
    }
    // removing extra spaces
    const removeSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAlertType("Removed extra spaces", "success")
    }

    // speak function
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.setAlertType("Playing the audio", "success")
    }

    // pause function
    const pause = () => {
        window.speechSynthesis.pause(speechSynthesis);
        props.setAlertType("Audio paused", "warning")
    }

    // resume function
    const resume = () => {
        window.speechSynthesis.resume(speechSynthesis);
        props.setAlertType("Audio resumed", "info")
    }


    // word counter
    let wordCounter = text.split(/\s+/).filter(word => word.trim().length > 0).length;

    // character counter
    let charCounter = text.replace(/\s+/g, '').length;


    return (
        <>
            <div className="container" style={{marginTop: '2%'}} >
                <h1 style={{color: props.mode === 'dark'? 'white' : 'black'}}>{props.head}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'? '#0A2647': 'white', color:props.mode === 'dark' ? 'white' : 'black'} } id="my-box" rows="8"></textarea>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-between">
                    <div className="align-content-start">
                        <button disabled={text.length === 0}className="btn btn-success" onClick={handleUpClick}>Upper case</button>
                        <button disabled={text.length === 0}className="btn btn-success mx-2 my-1" onClick={handleLowClick}>Lower case</button>
                        <button disabled={text.length === 0}className="btn btn-success mx-2 my-1" onClick={clearText}>Clear text</button>
                        <label htmlFor="word-trimmer" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>Trim to:</label>
                        <input type="text" className='ms-2' value={wordsToKeep} onChange={(e) => SetWordsToKeep(e.target.value)} id="word-trimmer" />
                        <button disabled={text.length === 0}className="btn btn-success mx-2 my-1" onClick={handleTrimClick} >Trim</button>
                        <button disabled={text.length === 0}className="btn btn-success my-2 my-1" onClick={removeSpace}>Remove spaces</button>
                    </div>
                    <div className="align-content-end">
                        <button disabled={text.length === 0}type="submit" onClick={speak} className="btn btn-success my-2 me-2">Speak</button>
                        <button disabled={text.length === 0}type="submit" onClick={pause} className="btn btn-success my-2 me-2">Pause</button>
                        <button disabled={text.length === 0}type="submit" onClick={resume} className="btn btn-success my-2 me-2">Resume</button>
                    </div>
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h2>Your text summary</h2>
                <p>{wordCounter} words and {charCounter} character.</p>
                <p><strong>in {0.008 * wordCounter} minutes you can read it</strong></p>
                <hr />
                <h3>Preview</h3>
                <details>
                    <summary>{text.length>0?"Read your text here":"Enter something in the textbox above to preview it here"}</summary>
                    <p>{text}</p>
                </details>
            </div>
        </>
    )
}
