import React from "react";
import styles from './PanelDetails.module.css';

function PanelDetails(props) {

    return (
        <div key={props.index} className={styles.details}>
            <div className={styles.balanceSection}>
                <div className={`${styles.balance} ${styles.small}`}>
                    Saldo
                    <span className={styles.amount}>
                        {props.data.balance}
                        <span className={styles.currency}>PLN</span>
                    </span>
                </div>
                <div className={`${styles.lock} ${styles.small}`}>
                    Blokady
                    <span className={styles.amount}>
                        {props.data.locks}
                        <span className={styles.currency}>PLN</span>
                    </span>
                </div>
            </div>
            <div className={styles.availableFunds}>
                <div className={styles.small}>
                    Dostępne środki
                </div>
                <div className={styles.accountBalance}>
                    {props.data.availableFunds}
                    <span className={styles.currency}>PLN</span>
                </div>
            </div>
        </div>
    )
}

export default PanelDetails;
