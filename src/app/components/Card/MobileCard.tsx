import { encodeC } from '../../fonts';
import Calendar from '../Calendar';
import Heading from '../Heading';
import styles from './MobileCard.module.scss';

const MobileCard = () => {
  return (
    <div className={styles.container}>
      <Heading />
      <div className={styles.photoPanel}>
        <div className={styles.photoSlider}>Photo Slider 1</div>
      </div>
      <Calendar />
      <h3 className={encodeC.className}>BRENDA &amp; JOSÉ LUIS</h3>
      <h4 className={encodeC.className}>San Luis Potosí, México</h4>
    </div>
  );
};

export default MobileCard;
