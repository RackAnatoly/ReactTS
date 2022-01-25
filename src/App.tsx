import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import OnOff from "./components/OnOff/OnOff";

function App() {
    return (
        <div>
            <OnOff/>
            <UncontrolledAccordion titleValue={"Menu"}/>
            <UncontrolledRating/>

            {/*<Rating value={3}/>;*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}

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