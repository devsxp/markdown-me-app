import { Link } from 'react-router-dom';
import HomeImg from '../../assets/home.svg';
import styles from './Home.module.css';
import { useState } from 'react';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {};

  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <img className={styles.img} src={HomeImg} alt="img" />
          </div>
          <div className={styles.auth}>
            <div className={styles.authContent}>
              <h1 className={styles.heroText}>Welcome Back</h1>
              <p className={styles.heroPara}>
                save your markdown files in the cloud, and access from anywhere
                at any time.
              </p>
              <div className={styles.form}>
                <input
                  className={styles.input}
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className={styles.input}
                  placeholder="Enter your password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={onSubmit} className={styles.button}>
                  Login/Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
