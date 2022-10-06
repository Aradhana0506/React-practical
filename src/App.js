import './App.css';
import styles from './App.module.css';
import 'antd/dist/antd.min.css';
import { Tabs } from 'antd';
import User from './components/User';
import DeleteUser from './components/DeleteUser';
  
const { TabPane } = Tabs;
function App() {
  return (
    <>
    
    <h1 className={styles.main__div}>React Task</h1>
    <div style={{
      display: 'block', width: 700, padding: 30
    }}>
      <Tabs type="card">
        <TabPane tab="User" key="1">
          <User/>
        </TabPane>
        <TabPane tab="Delete User" key="2">
          <DeleteUser/>
        </TabPane>
      </Tabs>
    </div>
    </>
  );
}

export default App;
