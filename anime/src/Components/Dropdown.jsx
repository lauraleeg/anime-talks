import React, {useState} from 'react';
import '../App.css';

export default function Dropdown(props) {

    const [characterName, setCharacterName ] = useState('');
    const [isOpen, setOpenState] = useState(false);

    function openBox() {
        if (!isOpen) {
            setOpenState(true);
        } else {
            setOpenState(false)
        }
    }
    return (
        <div className="flex-column">
            <p>{props.formText}</p>
            <div className="dropdown-menu" onClick={openBox}>
                {characterName}
            </div>
            {isOpen && <div className="dropdown-menu-box">
                {props.characters.map(char => {
                return (
                    <Option name={char} key={char} onClick={() => {
                        setCharacterName(char)
                        openBox()
                    }}/>
                )
            })}
            </div>}
        </div>
    );
}

function Option(props) {
    return (
        <div className="dropdown-option" onClick={props.onClick}>
            {props.name}
        </div>
    )
}