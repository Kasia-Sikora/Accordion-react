import React from "react";
import AccordionTitle from "./AccordionTitle/AccordionTitle";
import {HiDotsVertical} from "react-icons/hi";
import styles from './AnimationTrigger.module.css';

function AccordionTrigger(props) {

    return (
        <button id={"accordion" + props.index} tabIndex={1} className={styles.accordionTrigger} type='button' aria-expanded='true'
                aria-controls='section'>
            <div className={styles.bankName}>{props.data.bankName}</div>
            <AccordionTitle data={props.data}/>
            <span className={styles.menuIcon}> <HiDotsVertical /> </span>
        </button>
    )
}

export default AccordionTrigger;
