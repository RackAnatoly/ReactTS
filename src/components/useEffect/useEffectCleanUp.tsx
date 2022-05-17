import React, {useEffect} from 'react';
import {useState} from 'react';

export const UseEffectCleanUp = () => {
    const [counter, setCounter] = useState(1)
    console.log('render' + counter)
    useEffect(() => {
        console.log('Effect occurred' + counter)
        return () => {
            console.log('Reset Effect' + counter)
        }
    }, [counter])

    return (
        <div>
            Hello,counter:{counter}
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
        </div>
    );
};

export const KeysTrackerExample = () => {
    const [text, setText] = useState('1')
    console.log('render' + text)

    useEffect(() => {
        window.document.addEventListener('keypress', (e) => {
            console.log(e.key)
            setText(text + e.key)
        })
        return ()=>{
            window.removeEventListener('keypress', (e) => {
                console.log(e.key)
                setText(text + e.key)
            })
        }
    }, [text])

    return (
        <div>
            Typed text:{text}
        </div>
    );
};
