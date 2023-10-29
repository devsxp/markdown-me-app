import styles from './Header.module.css';
import MailSvg from '../../assets/mail.svg';
import LogoutSvg from '../../assets/logout.svg';
import AddSvg from '../../assets/add.svg';
import BackSvg from '../../assets/back.svg';
import { Link } from 'react-router-dom';

const Header = ({ actionTitle, addNewLink, backTitle, backLink }) => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <img className={styles.icon} src={MailSvg} alt="mail" /> Welcome
          johndoe@email.com
        </div>
        <div className={styles.logout}>
          <img className={styles.icon} src={LogoutSvg} alt="logout" />
          Logout
        </div>
      </header>
      <div className={styles.action}>
        {actionTitle ? (
          <div className={styles.actionTitle}>{actionTitle}</div>
        ) : null}

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
    </>
  );
};

export default Header;
