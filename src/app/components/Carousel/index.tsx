import { CSSProperties } from 'react';
import styles from './Carousel.module.scss';

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div className={styles.carousel}>
      {images.map((img) => {
        const style: CSSProperties = {
          backgroundImage: `url('${img}')`,
          backgroundPosition: 'center',
          filter: 'grayscale(100%)',
        };

        return <div key={img} style={style} />;
      })}
    </div>
  );
};

export default Carousel;
