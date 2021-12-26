import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";

function App() {
    return (
        <div>
            <PageTitle title={'This is APP component'} />
            <PageTitle title={'My Friends'} />
            Article 1
            <Rating value={3} />
            <Accordion title={'Menu 1'} />
            <Accordion title={'Menu 2'} />
            Article 2
            <Rating value={0} />
            <Rating value={1} />
            <Rating value={2} />
            <Rating value={3} />
            <Rating value={4} />
            <Rating value={5} />
        </div>
    );
}

const PageTitle = (props: any) => {
    return <h1>{props.title}</h1>
}



export default App;

/////////////////
////////////////
