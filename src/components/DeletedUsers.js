import React from 'react'
import { Button, Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { restoreUser } from '../redux/actions';

function DeletedUsers() {
    const dispatch = useDispatch();
    const deletedUsers = useSelector(state => state.userReducer.deletedUsers);

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
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="primary" onClick={() => dispatch(restoreUser(record.id))}>Restore</Button>
                    </>
                )
            }
        }
    ]

    return (
        <div>
            <Table
                columns={columns}
                dataSource={deletedUsers}
                rowKey={record => record.id} 
            />
        </div>
    )
}

export default DeletedUsers
