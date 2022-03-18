import React, {useState} from "react";
import {useReducer} from "react";

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}
type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if(action.type==='TOGGLE-COLLAPSED'){
        return !state
    }
    return state
}

function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, dispatch] = useReducer(reducer, false);
    // let [collapsed,setCollapsed]=useState(false);


    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch({type:'TOGGLE-COLLAPSED'})}}/>
            {/*<AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default UncontrolledAccordion;