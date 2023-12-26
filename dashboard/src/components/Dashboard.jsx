import './Dashboard.css'
import Menu from "./Menu";
import ContentWrap from "./Content-wrap";
import SearchWrap from './Search-wrap';

function Dashboard() {
  return (
    <div className="dashboard">
      <Menu />
      <ContentWrap />
      <SearchWrap/>
    </div>
  );
}

export default Dashboard;