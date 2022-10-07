import { Tabs } from 'antd';
import User from './components/User';
import DeletedUsers from './components/DeletedUsers';
import 'antd/dist/antd.min.css';
import './App.css';

function App() {
  
  return (
    <div>
     <h3 className="App">React Task</h3>
     <Tabs type="card" defaultActiveKey="1" style={{width: '50vw', marginLeft: '50px'}}>
      <Tabs.TabPane tab="User" key="1">
        <User />
      </Tabs.TabPane>
      <Tabs.TabPane tab="Deleted User" key="2">
        <DeletedUsers />
      </Tabs.TabPane>
    </Tabs>
    </div>
  );
}

export default App;
