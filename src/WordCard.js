import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
<<<<<<< HEAD
import _, { attempt, lowerCase } from 'lodash';
=======
import _, { attempt } from 'lodash';
>>>>>>> d5bb0834541b0778355647f993b5a15eddecd988

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    guess: '',
    completed: false
    }
   }

export default function WordCard(props){

    const [state, setState] = useState(prepareStateFromWord(props.value))
    
    const activationHandler = c => {
        console.log(`${c} has been activated`)

        let guess = state.guess + c
        setState({...state, guess})

        if(guess.length == state.word.length){
            if(guess == state.word){
                console.log('Yeah!')
                setState({...state, guess: '', completed: true})
            }else if(state.attempt == 3){
                console.log('You lose!')
                setState({...state, guess: '', completed: true})
            }else{
                console.log("Reset, You have " + (3-state.attempt) + " time.")
                setState({...state, guess: '', attempt: state.attempt + 1})
            }
        }

    }
    return (
        <div>
            {
                state.chars.map((c, i) =>
                    <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>)
            }
        </div>
    )
}