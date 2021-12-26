import React from "react";

function Accordion(props:any) {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            <AccordionBody/>
        </div>
    )
}

const AccordionTitle = (props:any) => {
    return (
        <h3>{props.title}</h3>
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

/////////

export default Accordion;