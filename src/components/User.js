import React, {useState} from 'react'
import { Button, Modal, Form } from 'antd';
import DisplayUsers from './DisplayUsers';
import UserForm from './UserForm';
import {createUser, updateUser, clearEditUser} from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux';

function User() {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const editUser = useSelector(state => state.userReducer?.editUser)

    const showModal = () => {
        setIsModalOpen(true);
    };
    
    const handleSubmit = (user) => {
        setIsModalOpen(false);
        if (Object.keys(editUser).length !== 0) {
            dispatch(updateUser(user))
        } else {
            dispatch(createUser(user))
        }
    };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        dispatch(clearEditUser());
        form.setFieldsValue({
            name: '',
            email: '',
            mobile: '',
        })
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Add New User
            </Button>
            <DisplayUsers
                onShowModal={showModal}
            />

            <Modal title="Create User" open={isModalOpen} footer={null} onCancel={handleCancel}>
                <UserForm
                    onCancel={handleCancel}
                    onSubmit={handleSubmit}
                    form={form}
                />
            </Modal>
        </div>
    )
}

export default User
