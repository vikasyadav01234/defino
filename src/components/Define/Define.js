import React, { useState } from 'react';
import Header from '../Header/Header';
import Word from '../Word/Word';
import './Define.css'

const Define = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState([]);
    const getMeaning = async () => {
        if(word){
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word.toLowerCase()}`)
            const data = await res.json();
            setMeaning(data)
        }
    }
    return (
        <div>
            <div className="center">
                <Header/>
                <div>
                <input className="word-input" placeholder={"Enter a Word"} onChange={(event) => setWord(event.target.value)}/>
                <button className="word-button" onClick={getMeaning}>Define</button>
                </div>
                <Word meaning={meaning} word={word}/>
            </div>
        </div>
    )
}

export default Define;