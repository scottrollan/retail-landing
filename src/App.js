import React, { useState } from 'react';
import $ from 'jquery';
import { Button } from 'react-bootstrap';
import hht from './assets/HHT.png';
import styles from './App.module.scss';

function App() {
  const [success, setSuccess] = useState('Copy Code');

  const copy = () => {
    var copyText = $('#copyCode');
    copyText.select();
    document.execCommand('copy');
    setSuccess('Copied!');
  };

  const date = new Date();

  return (
    <div
      id="openShopping"
      className={styles.alertDiv}
      // onClick={() => closePopup()}
    >
      <img src={hht} alt="" className={styles.hht} />

      <div
        className={[`${styles.openShopping} ${styles.fadeIn}`]}
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          During checkout, you may need to enter this code in the "Gift card or
          discount code" field to complete your order.
        </div>
        <span
          style={{
            margin: '1vh 0',
            padding: 0,
            // width: '100%',
            // display: 'flex',
          }}
        >
          <input
            id="copyCode"
            readOnly
            style={{
              fontSize: 'large',
              border: 'none',
              backgroundColor: 'transparent',
              width: '7rem',
            }}
            value="HHT2467"
          />
          <Button
            variant="secondary"
            onClick={() => copy()}
            style={{
              backgroundColor: '#9DA795',
              border: 'none',
            }}
          >
            {success}
          </Button>
        </span>
      </div>
      <Button
        href="https://www.holistichairtribe.com/discount/HHT2467?rfsn=3519242.805024&amp;utm_source=refersion&amp;utm_medium=affiliate&amp;utm_campaign=3519242.805024"
        variant="secondary"
        style={{
          visibility: success === 'Copy Code' ? 'hidden' : 'visible',
          width: '70%',
          textAlign: 'center',
          backgroundColor: '#9DA795',
          border: 'none',
        }}
      >
        Go Shopping
      </Button>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: 'small',
        }}
      >
        &copy; Barry Rollan Studio {date.getFullYear()}
      </div>
    </div>
  );
}

export default App;
