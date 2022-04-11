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
import {ControlledCheckbox, ControlledInput, ControlledSelect} from "./components/ControlledInput/ControlledInput";
import {Select} from "./components/Select/Select";
import {Example} from "./components/ReactMemo/ReactMemo";
import UseMemo from "./components/UseMemo/UseMemo";
import UseEffect from "./components/useEffect/useEffect";

function App() {
    const [value, setValue] = useState('2');
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
            {/*           items={['Anatoli','Tatsi','Adrian']}*/}
            {/*/>*/}
            {/*<UncontrolledOnOff OnChange={SetSwitchOn}/> {switchOn.toString()}*/}
            {/*<UncontrolledInput/>*/}
            {/*<UncontrolledInputByButtonPress/>*/}
            {/*<ControlledInput/>*/}
            {/*<ControlledCheckbox/>*/}
            {/*<ControlledSelect/>*/}
            {/*<UncontrolledAccordion titleValue={'One'}/>*/}
            {/*<Select*/}
            {/*    value={''}*/}
            {/*    onChange={() => {*/}
            {/*        console.log('changed')*/}
            {/*    }}*/}
            {/*    items={*/}
            {/*        [*/}
            {/*            {value: '1', title: 'Minsk'},*/}
            {/*            {value: '2', title: 'Moskow'},*/}
            {/*        ]}/>*/}
            {/*<Example/>*/}
            {/*<UseMemo/>*/}
            <UseEffect/>
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