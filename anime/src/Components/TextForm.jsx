import React from 'react';
import '../App.css';

export default function TextForm(props) {
    return (
        <div className="flex-column" style={{marginLeft: "50px"}}>
            <p>{props.formText}</p>
            <form>
                <input type="text" className="textBox" value={props.text} onChange={e => props.onChange(e.target.value)}></input>
            </form>
        </div>
    );
}
