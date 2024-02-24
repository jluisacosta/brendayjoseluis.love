import { greatVibes } from '../../fonts';
import styles from './Heading.module.scss';

const Heading = () => {
  return (
    <h1 className={`${styles.heading} ${greatVibes.className}`}>
      Save <span>The</span> Date
    </h1>
  );
};

export default Heading;
