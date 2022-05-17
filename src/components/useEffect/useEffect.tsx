import React, {useEffect, useState} from 'react';

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [fake, setFake] = useState(0);
    const [date , setDate] = useState<Date>()

    // useEffect(() => {
    //     setInterval(() => {
    //         new Date()
    //     }, 1000)
    // }, [])

    const id: number = +setInterval(() => {
        setDate(new Date())
    }, 1000)
    // setTimerId(id)
    const stringTime = date?.toLocaleTimeString()
    return (
        <div>
            {stringTime}
        </div>
    );
};

export default UseEffect;