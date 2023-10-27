import { Link } from 'react-router-dom';
import { snarkdownEnhanced as snarkdown } from './utils';
import { useState } from 'react';

const Editor = () => {
  const [text, setText] = useState('');

  const convert = (e) => {
    const converted = snarkdown(e.target.value);
    setText(converted);
  };

  return (
    <>
      <h1>Editor</h1>
      <Link className="app-link" to="/dashboard">
        Go to Dashbaord
      </Link>
      <div id="editor">
        <div className="editor-input">
          <textarea onChange={convert}></textarea>
        </div>
        <div
          className="editor-view"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </>
  );
};

export default Editor;
