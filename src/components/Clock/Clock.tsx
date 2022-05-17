import React, {useEffect} from 'react';
import {useState} from 'react';
import style from './Clock.module.css'

type PropsType = {
    mode?: 'digital' | 'analog'
}

export const Clock = (props: PropsType) => {
    console.log('component')
    const [date, setDate] = useState(new Date())

    useEffect(() => {

        console.log('A')
        let intervalid = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => clearInterval(intervalid);
    }, [])

    const get2Strings = (num: number) => num < 10 ? '0' + num : num;
    let seconds = get2Strings(date.getSeconds());
    let minutes = get2Strings(date.getMinutes());
    let hours = get2Strings(date.getHours());
    return (
        <div>
            {
                props.mode === 'analog'
                    ? <DigitalClockView data={date}/>
                    : <AnalogClockView data={date}/>
            }
        </div>
    );
};
type ClockPropsType = {
    data: Date
}

export const DigitalClockView = ({data}: ClockPropsType) => {
    const get2Strings = (num: number) => num < 10 ? '0' + num : num;
    return <>
        <span>{get2Strings(data.getHours())}</span>
        :
        <span>{get2Strings(data.getMinutes())}</span>
        :
        <span>{get2Strings(data.getSeconds())}</span>
    </>

}

export const AnalogClockView = ({data}: ClockPropsType) => {
    const secondsStyle = {
        transform: `rotate(${data.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${data.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${data.getHours() * 30}deg)`
    };

    return <div className={style.clock}>
        <div className={style["analog-clock"]}>
            <div className={`${style.dial} ${style.seconds}`} style={secondsStyle}/>
            <div className={`${style.dial} ${style.minutes}`} style={minutesStyle}/>
            <div className={`${style.dial} ${style.hours}`} style={hoursStyle}/>
        </div>
    </div>
}