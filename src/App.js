import './App.css';
import React, {useEffect, useState} from "react";
import AccordionTrigger from "./AccordionElements/AccordionTrigger/AccordionTrigger";
import AccordionPanel from "./AccordionElements/AccordionPanel/AccordionPanel";

function App() {

    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('data.json'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(response => response.json())
            .then(data => {
                setItems(data);
            })
    }, [])

    return (
        <div className='Accordion-group'>
            {items.map((account, index) =>
            <div key={index} className='Accordion'>
                <h3>
                    <AccordionTrigger data={account} index={index}/>
                </h3>
                <AccordionPanel data={account} index={index}/>
            </div>
            )}
        </div>
    );
}

export default App;
