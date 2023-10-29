import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EditSvg from '../../assets/edit.svg';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';
import { config } from '../../config';
import styles from './Dashboard.module.css';
import SubHeader from '../../components/SubHeader/SubHeader';

const Dashboard = () => {
  const [markdowns, setMarkdowns] = useState([]);

  const firebaseApp = initializeApp(config.firebase);
  const firestore = getFirestore(firebaseApp);

  // This is the reference for markdowns collection
  const markdownCol = collection(firestore, 'markdowns');

  useEffect(() => {
    onSnapshot(markdownCol, (snapshot) => {
      if (snapshot.docs.length > 0) {
        setMarkdowns(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SubHeader title="Markdowns" addNewLink="/editor/QX2pPKjDmjUBhLvb9aIq" />
      <div className={styles.dashboard}>
        <div className="container">
          <div className={styles.list}>
            {markdowns.map((markdown) => (
              <div key={markdown.id} className={styles.item}>
                <div className={styles.title}>My first markdown file</div>
                <div className={styles.markdownId}>{markdown.id}</div>
                <Link className={styles.viewEdit} to={`/editor/${markdown.id}`}>
                  <img className={styles.editIcon} src={EditSvg} alt="edit" />
                  Edit
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
