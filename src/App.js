import React from 'react';
import oway from './assets/oway.png';
import om from './assets/o&M.png';
import neuma from './assets/neuma.png';
import styles from './App.module.scss';

function App() {
  const date = new Date();

  return (
    <div id="openShopping" className={styles.alertDiv}>
      <h1>Shop Barry's Product Lines</h1>
      <div className={styles.buttonDiv}>
        <a
          style={{ flexDirection: 'column' }}
          href="https://www.holistichairtribe.com/discount/HHT2467?rfsn=3519242.805024&amp;utm_source=refersion&amp;utm_medium=affiliate&amp;utm_campaign=3519242.805024"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shopButton}
        >
          <div className={styles.owayOm}>
            <img
              src={oway}
              alt=""
              style={{ height: '100%', margin: '0 10%' }}
            />

            <img src={om} alt="" style={{ height: '100%', margin: '0 10%' }} />
          </div>
        </a>
        <a
          style={{ flexDirection: 'column' }}
          href="https://shop.saloninteractive.com/store/BarryRollanSalon/brands/11406"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.shopButton}
        >
          <img src={neuma} alt="" style={{ height: '100%' }} />
        </a>
      </div>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: 'small',
        }}
      >
        &copy; Barry Rollan Salon {date.getFullYear()}
      </div>
    </div>
  );
}

export default App;
