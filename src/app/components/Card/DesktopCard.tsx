import { encodeC } from '../../fonts';
import Calendar from '../Calendar';
import Heading from '../Heading';
import styles from './DesktopCard.module.scss';

const DesktopCard = () => {
  return (
    <>
      <div className={styles.photoPanel}>
        <div className={styles.photoSlider}>Photo Slider 1</div>
        <div className={styles.photoSlider}>Photo Slider 2</div>
        <div className={styles.photoSlider}>Photo Slider 3</div>
      </div>
      <div className={styles.descriptionPanel}>
        <Heading />
        <Calendar />
        <h3 className={encodeC.className}>BRENDA &amp; JOSÉ LUIS</h3>
        <h4 className={encodeC.className}>San Luis Potosí, México</h4>
      </div>
    </>
  );
};

export default DesktopCard;
