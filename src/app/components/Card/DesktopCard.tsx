import { encodeC, greatVibes } from '../../fonts';
import Calendar from '../Calendar';
import Carousel from '../Carousel';
import { CAROUSEL_1, CAROUSEL_2, CAROUSEL_3 } from '../Carousel/images';
import Heading from '../Heading';
import styles from './DesktopCard.module.scss';

const DesktopCard = () => {
  return (
    <>
      <div className={styles.photoPanel}>
        <div className={styles.carouselContainer}>
          <Carousel images={CAROUSEL_1} />
        </div>
        <div className={styles.carouselContainer}>
          <Carousel images={CAROUSEL_2} />
        </div>
        <div className={styles.carouselContainer}>
          <Carousel images={CAROUSEL_3} />
        </div>
      </div>
      <div className={styles.descriptionPanel}>
        <Heading />
        <Calendar />
        <h3 className={greatVibes.className}>Brenda &amp;José Luis</h3>
        <h4 className={encodeC.className}>San Luis Potosí, México</h4>
      </div>
    </>
  );
};

export default DesktopCard;
