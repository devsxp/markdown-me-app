import styles from './Header.module.css';
import MailSvg from '../../assets/mail.svg';
import LogoutSvg from '../../assets/logout.svg';
import { initializeApp } from 'firebase/app';
import { config } from '../../config';
import { signOut, getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const firebaseApp = initializeApp(config.firebase);
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate();

  const onSignOut = () => {
    signOut(auth)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <img className={styles.icon} src={MailSvg} alt="mail" /> Welcome
        johndoe@email.com
      </div>
      <div className={styles.logout} onClick={onSignOut}>
        <img className={styles.icon} src={LogoutSvg} alt="logout" />
        Logout
      </div>
    </header>
  );
};

export default Header;
