import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { snarkdownEnhanced as snarkdown } from '../../utils/utils';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  setDoc,
} from 'firebase/firestore';
import { config } from '../../config';
import styles from './Editor.module.css';
import SubHeader from '../../components/SubHeader/SubHeader';

const Editor = () => {
  const [title, setTitle] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [converted, setConverted] = useState('');
  const { id } = useParams();

  const firebaseApp = initializeApp(config.firebase);
  const firestore = getFirestore(firebaseApp);

  // This is the reference for markdowns collection
  const markdownCol = collection(firestore, 'markdowns');
  const markdownDoc = doc(markdownCol, id);

  useEffect(() => {
    onSnapshot(markdownDoc, (snapshot) => {
      if (snapshot.data()) {
        setMarkdown(snapshot.data().markdown);
        setConverted(snapshot.data().converted);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const convert = (e) => {
    const markdown = e.target.value;
    const converted = snarkdown(markdown);
    setDoc(markdownDoc, { markdown, converted });
  };

  return (
    <>
      <SubHeader backLink="/dashboard" backTitle="Dashboard" />
      <div className="container">
        <div className={styles.editor}>
          <div className={styles.editorInput}>
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Markdown Title"
            />
            <textarea onChange={convert} value={markdown}></textarea>
          </div>
          <div
            className={styles.editorView}
            dangerouslySetInnerHTML={{ __html: converted }}
          />
        </div>
      </div>
    </>
  );
};

export default Editor;
