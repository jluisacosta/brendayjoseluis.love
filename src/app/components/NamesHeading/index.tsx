import { encodeC, greatVibes } from '../../fonts';
import styles from './NamesHeading.module.scss';

const NamesHeading = () => {
  return (
    <>
      <h3 className={`${styles.namesHeading} ${greatVibes.className}`}>
        <span>Brenda &amp;José Luis</span>
      </h3>
      <h4 className={`${styles.location} ${encodeC.className}`}>San Luis Potosí, México</h4>
    </>
  );
};

export default NamesHeading;
