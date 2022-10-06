import { Button,Table} from 'antd'
import React from 'react'
import 'antd/dist/antd.min.css';
import style from './User.module.css';
const User = () => {
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          email: 'tes@tes.com',
          mobile: '1234567899',
        },
      ];
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Mobile',
          dataIndex: 'mobile',
          key: 'mobile',
        },
          {
            key: "5",
            title: "Actions",
            render: (record) => {
              return (
                <>
                <div className={style.Btn__cls}>
                  <Button type="primary"> edit</Button>
                  <Button type="primary">delete</Button>
                  </div>
                </>
              );
            },
          },
      ];
  return (
    <div >
        <Button type="primary">Add New User</Button>
        <Table dataSource={dataSource} columns={columns} />;
    </div>
  )
}

export default User