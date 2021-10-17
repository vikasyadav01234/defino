import React from 'react';
import './Word.css'
const Word = ({meaning}) => {
    if (meaning.length) {
        return (
            <div className="main">
                <h1 style={{textAlign:"center"}}>Information</h1>
                <p><span className="highlight">Word</span>: {meaning[0].word}</p>
                <p><span className="highlight">Phonetic</span>: {meaning[0].phonetic}</p>
                <p><span className="highlight">Origin</span>: {meaning[0].origin}</p>
                <p><span className="highlight">Part of Speech</span>: {meaning[0].meanings[0].partOfSpeech}</p>
                <p><span className="highlight">Defination</span>: {meaning[0].meanings[0].definitions[0].definition}</p>
                <p><span className="highlight">Example</span>: {meaning[0].meanings[0].definitions[0].example}</p>
                <p><span className="highlight">Synonyms</span>:</p>
                <ul>
                    {meaning[0].meanings[0].definitions[0].synonyms.length ? meaning[0].meanings[0].definitions[0].synonyms.map((item) => {
                        return <li>{item}</li>
                    }): <p>None</p>}
                </ul>
            </div>
        )




    } else {
        return (
            <div>
                Enter a Word
            </div>
        )
    }
}

export default Word;