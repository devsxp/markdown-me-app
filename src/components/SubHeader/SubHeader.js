import { Link } from 'react-router-dom';
import AddSvg from '../../assets/add.svg';
import BackSvg from '../../assets/back.svg';
import styles from './SubHeader.module.css';

const SubHeader = ({ title, backTitle, backLink, addNewLink }) => {
  return (
    <div className={styles.subHeader}>
      {title ? <div className={styles.title}>{title}</div> : null}

      {backTitle && backLink ? (
        <Link to={backLink}>
          <div className={styles.back}>
            <img className={styles.icon} src={BackSvg} alt={backTitle} />
            {backTitle}
          </div>
        </Link>
      ) : null}

      {addNewLink ? (
        <Link to={addNewLink}>
          <div className={styles.add}>
            <img className={styles.icon} src={AddSvg} alt="add" />{' '}
            <div>Add</div>
          </div>
        </Link>
      ) : null}
    </div>
  );
};

export default SubHeader;
