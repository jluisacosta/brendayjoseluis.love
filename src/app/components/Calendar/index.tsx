import { encodeX, kosugiMaru } from '../../fonts';
import styles from './Calendar.module.scss';

// prettier-ignore
const ROWS = [
  'D', 'L', 'M', 'M', 'J', 'V', 'S',
  1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14,
  15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28,
  29, 30,
];

const HIGHLIGHT = 14;

const Heart = () => (
  <svg className={styles.heart} viewBox='0 0 32 29.6'>
    <path
      d='M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,
    0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z'
    />
    <text x='7' y='20' className={kosugiMaru.className} fontSize='16' fill='white'>
      {HIGHLIGHT}
    </text>
  </svg>
);

const Calendar = () => {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.heading} ${encodeX.className}`}>SEPTIEMBRE 2024</h2>
      <div className={styles.table}>
        {ROWS.map((value, i) =>
          value === HIGHLIGHT ? (
            <Heart key='heart' />
          ) : (
            <div className={`${styles.cell} ${kosugiMaru.className}`} key={`k${value}${i + 1}`}>
              {typeof value === 'string' ? <strong>{value}</strong> : value}
            </div>
          ),
        )}
      </div>
    </div>
  );
};

export default Calendar;
