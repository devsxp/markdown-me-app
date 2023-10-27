import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>I am at homepage</h1>
      <p>You should sign-in here</p>
      <Link className="app-link" to="/dashboard">
        Sign In
      </Link>
    </>
  );
}

export default App;
