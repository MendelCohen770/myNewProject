import React from 'react'
import styles from './Keyboard.module.css'


const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ]

type KeyboardProps = {
    activeLetter: string[],
    inactiveLetter: string[],
    disabled: boolean,
    addGuessedLetters: (letter: string) => void,
  
}

const Keyboard = ({activeLetter, inactiveLetter, addGuessedLetters, disabled = false} : KeyboardProps) => {
  return (
    <div style={{
        display: 'grid',
         gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))',
          gap: '.5rem',}}>
      {KEYS.map(key => {
        const isActive = activeLetter.includes(key)
        const isInactive = inactiveLetter.includes(key)
        return(
            <button onClick={() => addGuessedLetters(key)} 
            key={key} 
            className={`${styles.btn} 
            ${isActive ? styles.active : ""} 
            ${isInactive ? styles.inactive : ""}`}
            disabled={isActive || isInactive || disabled}>{key}</button>
        )
      })}
    </div>
  )
}

export default Keyboard
