import Calendar from '../Calendar';
import Carousel from '../Carousel';
import { CAROUSEL_ALL } from '../Carousel/images';
import Heading from '../Heading';
import NamesHeading from '../NamesHeading';
import styles from './MobileCard.module.scss';

const MobileCard = () => {
  return (
    <div className={styles.container}>
      <Heading />
      <div className={styles.photoPanel}>
        <Carousel images={CAROUSEL_ALL} />
      </div>
      <Calendar />
      <NamesHeading />
    </div>
  );
};

export default MobileCard;
