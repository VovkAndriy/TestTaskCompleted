import React from 'react';
import chevron from '../../assets/chevronright.png';
import styles from './styles.module.css';
function Block({ name, lastName }: string) {
    return (
        <div className={styles.box}>
            <div>{`${name} ${lastName}`}</div>
            <div>
                <img src={chevron} alt="" />
            </div>
        </div>
    );
}

export default Block;