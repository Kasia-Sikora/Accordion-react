import React from "react";
import styles from './PanelFooter.module.css';

function PanelFooter(props) {
    const buttons = ['Szczegóły', "Historia", 'Przelew']

    return(
        <div key={'buttons' + props.index} className={styles.panelFooter}>
            {buttons.map((button, index) =>
                <button tabIndex={1} key={`section` + index + ` button` + props.index}>{button}</button>
            )}
        </div>
    )
}

export default PanelFooter;
