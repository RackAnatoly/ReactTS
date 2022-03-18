import React from "react";
import {Button} from "@material-ui/core";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}
type AccordionBodyPropsType = {
    items: string[]
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}


function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    )
}


const AccordionTitle = (props: AccordionTitlePropsType) => {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    )
}

const AccordionBody = ({items,...props}: AccordionBodyPropsType) => {
    return (
        <ul>
            {items.map((i,index) => <li key={index}>{i}</li>)}
        </ul>

    )

}



export default Accordion;