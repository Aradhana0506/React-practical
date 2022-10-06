import { Button,Table} from 'antd'
import React from 'react'
import 'antd/dist/antd.min.css';

const DeleteUser = () => {
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
            title: "Action",
            render: (record) => {
              return (
                <>
                <div style={{}}>
                  <Button type="primary"> Restore</Button>
                  </div>
                </>
              );
            },
          },
      ];
  return (
    <div>
    <Table dataSource={dataSource} columns={columns} />;
</div>
  )
}

export default DeleteUser