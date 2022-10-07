import React, {useEffect} from 'react'
import {Form, Input, Button} from 'antd'
import { useSelector } from 'react-redux';

function UserForm({onCancel, onSubmit, form}) {
    const editUser = useSelector(state => state.userReducer?.editUser);
    const users = useSelector(state => state.userReducer.users); 
    
    useEffect(() => {
        if(editUser !== {}) {
            form.setFieldsValue({
                name: editUser.name,
                email: editUser.email,
                mobile: editUser.mobile,
            })
        }
    }, [editUser])

    const onFinish = (values) => {
        if(Object.keys(editUser).length === 0) {
            const newValues = {...values, id: Math.random()}
            onSubmit(newValues);
        } else {
            const newValues = {...values, id: editUser.id}
            onSubmit(newValues);
        }
        form.setFieldsValue({
            name: '',
            email: '',
            mobile: '',
        })
    }

    const getExistEmails = () => users.map(user => user.email);

    return (
        <div>
            <Form
                name="user"
                onFinish={onFinish}
                form={form}
            >
                <Form.Item  
                    label="Name"
                    name="name"
                    rules={[
                        {
                          required: true,
                          message: "Please input your name!",
                        },
                      ]}
                    >
                      <Input allowClear  placeholder="Name" />
                </Form.Item>

                <Form.Item  
                    label="Email"
                    name="email"
                    rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input  allowClear  placeholder="Email" />
                </Form.Item>

                <Form.Item  
                    label="Mobile"
                    name="mobile"
                    rules={[
                        { required: true, message: 'Please input your mobile number!' },
                        { min: 10, message: 'Mobile number should be 10 numbers!' },
                        { max: 10, message: 'Mobile number should be 10 numbers!' }
                    ]}
                >
                    <Input type={'number'} allowClear  placeholder="mobile number" />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{float: 'right'}}>
                        Submit
                    </Button>
                    <Button style={{float: 'right', right: '10px'}} onClick={onCancel}>Cancel</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default UserForm
