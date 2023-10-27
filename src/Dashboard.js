import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>I am at dashboard</h1>
      <Link className="app-link" to="/editor/uniqueId">
        new
      </Link>
    </div>
  );
};

export default Dashboard;
