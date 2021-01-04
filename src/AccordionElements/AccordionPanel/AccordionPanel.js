import React from "react";
import PanelDetails from "./PanelDetails/PanelDetails";
import PanelFooter from "./PanelFooter/PanelFooter";
import styles from "./AccordionPanel.module.css";

function AccordionPanel(props) {

    return (
        <div id={'section' + props.index} className={styles.accordionPanel} role='region' aria-labelledby='accordion'
             key={'section' + props.index}>
            <PanelDetails data={props.data} index={props.index}/>
            <PanelFooter data={props.data} index={props.index} sectionIndex = {props.index}/>
        </div>
    )
}

export default AccordionPanel;
