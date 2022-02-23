import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledOnOff from "./components/UncontroledOnOff/UncontrolledOnOff";
import OnOff from "./components/OnOff/OnOff";
import {UncontrolledInput, UncontrolledInputByButtonPress} from "./components/Uncontrolled input/UncontrolledInput";

function App() {

    let [ratingValue, SetRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [switchOn, SetSwitchOn] = useState<boolean>(false);
    return (
        <div>
            {/*<OnOff on={switchOn} onChange={SetSwitchOn}/>*/}
            {/*<Rating value={ratingValue} onClick={SetRatingValue}/>*/}
            {/*<Accordion titleValue={"Menu"}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={()=>{setAccordionCollapsed(!accordionCollapsed)}}*/}
            {/*/>*/}
            {/*<UncontrolledOnOff OnChange={SetSwitchOn}/> {switchOn.toString()}*/}
            <UncontrolledInput/>
            <UncontrolledInputByButtonPress/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

const PageTitle = (props: PageTitlePropsType) => {
    return <h1>{props.title}</h1>
}


export default App;


///