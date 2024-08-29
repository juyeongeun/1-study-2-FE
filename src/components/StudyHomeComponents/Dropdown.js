import styles from './Dropdown.module.css';
import { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown({ onOrderChange, orderBy }) {
  const [click, SetClick] = useState(false);
  const [text, setText] = useState('최신 순');

  const Click = () => {
    SetClick((prev) => !prev);
  };

  const handleSortChange = (orderBy) => {
    onOrderChange(orderBy);
    SetClick(false);
  };

  useEffect(() => {
    switch (orderBy) {
      case 'recent':
        setText('최신 순');
        break;
      case 'old':
        setText('오래된 순');
        break;
      case 'highestPoints':
        setText('많은 포인트 순');
        break;
      case 'lowestPoints':
        setText('적은 포인트 순');
        break;
      default:
        setText('최신 순');
    }
    SetClick(false);
  }, [orderBy]);

  return (
    <>
      <div className={styles.background} onClick={Click}>
        <p className={styles.dropDown}>{text}</p>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      {click && (
        <div className={styles.dropdownBackground} onClick={Click}>
          <p onClick={() => handleSortChange('recent')} className={styles.text}>
            최근 순
          </p>
          <p onClick={() => handleSortChange('old')} className={styles.text}>
            오래된 순
          </p>
          <p
            onClick={() => handleSortChange('highestPoints')}
            className={styles.text}
          >
            많은 포인트 순
          </p>
          <p
            onClick={() => handleSortChange('lowestPoints')}
            className={styles.lowestPointsText}
          >
            적은 포인트 순
          </p>
        </div>
      )}
    </>
  );
}

export default Dropdown;
