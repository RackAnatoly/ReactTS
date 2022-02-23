import React, {useRef, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export const UncontrolledInput = () => {
    const [value, setValue] = useState('')
    return (
        <div>
            <input onChange={(e) => {
                setValue(e.currentTarget.value)
            }}/>-{value}
        </div>
    );
};

export const UncontrolledInputByButtonPress = () => {

    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    return <> <input ref={inputRef}/>
        <button onClick={save}>save</button>
        actual value-{value} </>
}
