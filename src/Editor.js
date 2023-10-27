import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { snarkdownEnhanced as snarkdown } from './utils';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  onSnapshot,
  doc,
  setDoc,
} from 'firebase/firestore';
import { config } from './config';

const Editor = () => {
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
      setMarkdown(snapshot.data().markdown);
      setConverted(snapshot.data().converted);
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
      <h1>Editor</h1>
      <Link className="app-link" to="/dashboard">
        Go to Dashbaord
      </Link>
      <div id="editor">
        <div className="editor-input">
          <textarea onChange={convert} value={markdown}></textarea>
        </div>
        <div
          className="editor-view"
          dangerouslySetInnerHTML={{ __html: converted }}
        />
      </div>
    </>
  );
};

export default Editor;
