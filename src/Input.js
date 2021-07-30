import React from 'react'
import { useState } from 'react';

const Input = ({todo,setTodo,dark,setDark,check}) => {
    
    const [text,setText] = useState('');
    
    const HandleInput = (e) => {
        setText(e.target.value);
    }

    const addItem = () => {
        if(!text && text.length < 3){
            window.alert("Put something valuabe in there!")
        } else {
        setTodo([...todo,{
            id:Math.floor(Math.random()*100 - 20),
            name:text,
            did:false,
        }])
        setText('');
       }
    }

    return (
        <div className="input"  style={{backgroundColor: dark ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)'}}>
            <input type="text" placeholder="Type what you want to do today" onChange={HandleInput} value={text} style={{backgroundColor: dark ? 'hsl(0, 0%, 98%)' : 'hsl(235, 21%, 11%)'}} />
            <button onClick={() => addItem()} ><img src={check} /></button>
        </div>
    )
}

export default Input
 