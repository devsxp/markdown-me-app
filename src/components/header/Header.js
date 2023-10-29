import styles from './Header.module.css';
import MailSvg from '../../assets/mail.svg';
import LogoutSvg from '../../assets/logout.svg';

const Header = () => {
  return (
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
  );
};

export default Header;
