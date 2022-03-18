import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    debugger
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>
            <input value={parentValue} onChange={onChange}/>
        </div>
    );
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return (
        <div>
            <input type="checkbox" checked={parentValue} onChange={onChange}/>
        </div>
    )
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string|undefined>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return (
        <div>
            <select value={parentValue} onChange={onChange}>
                <option>none</option>
                <option value="1">Minsk</option>
                <option value="2">Moscow</option>
                <option value="3">Kiev</option>
            </select>
        </div>
    )
}
