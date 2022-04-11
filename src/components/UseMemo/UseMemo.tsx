import React, {useMemo, useState} from 'react';

const UseMemo = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA = resultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return (
        <div>
            <div>
                <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
                <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            </div>
            <div>result for a: {resultA}</div>
            <div>result for b: {resultB}</div>
        </div>


    );
};

export default UseMemo;