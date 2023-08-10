import React from 'react';
import styles from './styles.module.css';
import chevron from '../../assets/chevronright.png';
interface InvetedProps {
  phoneNumber: string;
}
function Invited({ phoneNumber }: InvetedProps) {
  return (
    <div className={styles.boxInvited}>
      <div style={{ color: '#828B97', fontSize: '14px' }}>{phoneNumber}</div>
      <div className={styles.invited}>
        <span style={{ marginRight: '16px', padding: '1px 10px' }}>Invited</span>
        <img src={chevron} alt="" />
      </div>
    </div>
  );
}

export default Invited;