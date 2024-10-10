import React, {useState} from 'react';

const Stringhandle = () => {
    const[text,setText]=useState("Rithika")
    function display()
    {
        setText("Nitharshan")
    }
    function change()
    {
        setText("Rithika")
    }

  return (

    <div>
        <center>
            <h1 onMouseEnter={display} onMouseLeave={change}>{text}</h1>
        </center>

    </div>
  )
}

export default Stringhandle;