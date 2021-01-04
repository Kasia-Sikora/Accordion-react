import React from "react";
import styles from './AccordionTitle.module.css'

function AccordionTitle(props) {

    return(
        <div className={styles.accordionTitle}>
            <div className={styles.accountDetails}>
                <div className={styles.accountTitle}>{props.data.accountName}</div>
                <div className={`${styles.accountNumber} ${styles.small}`}>{props.data.accountNumber}</div>
            </div>
            {/*<div className={styles.availableFunds}>*/}
            {/*    <div className={styles.small}>Dostępne środki</div>*/}
            {/*    <div className={styles.accountBalance}>*/}
            {/*        {props.data.availableFunds}*/}
            {/*        <span className={styles.currency}>PLN</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}

export default AccordionTitle;
