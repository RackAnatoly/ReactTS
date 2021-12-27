import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    if(props.collapsed===true){
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
                <AccordionBody />
            </div>
        )
        }else{
        return (
            <div>
                <AccordionTitle title={props.titleValue} />
            </div>
        )
    }

}

type AccordionTitlePropsType = {
    title: string
}

const AccordionTitle = (props: AccordionTitlePropsType) => {
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

export default Accordion;