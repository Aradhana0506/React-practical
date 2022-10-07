import React from 'react'
import { Button, Table, Space } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { editUser, deleteUser } from '../redux/actions';
import '../App.css';
function DisplayUsers({onShowModal}) {
    const dispatch = useDispatch();
    const users = useSelector(state => state.userReducer.users)

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
                        <Space>
                            <Button onClick={
                                () => {
                                    dispatch(editUser(record.id))
                                    onShowModal();
                                }}
                                type="primary"
                            >
                                Edit
                            </Button>
                            <Button className='Btn__delete' onClick={() => dispatch(deleteUser(record.id))}>delete</Button>
                        </Space>
                    </>
                )
            }
        }
    ]
    return (
        <div style={{marginTop: '10px'}}>
            <Table
                columns={columns}
                dataSource={users}
                rowKey={record => record.id} 
            />
        </div>
    )
}

export default DisplayUsers
