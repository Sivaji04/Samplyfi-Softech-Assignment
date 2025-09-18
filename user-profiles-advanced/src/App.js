import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Button, Modal, Form, Input, Space, Typography } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const { Title } = Typography;

function Avatar({ username }) {
  const url = `https://avatars.dicebear.com/v2/avataaars/${encodeURIComponent(username)}.svg?options[mood][]=happy`;
  return <img src={url} alt={username} style={{width:72,height:72,borderRadius:8}}/>;
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(()=> {
    let mounted = true;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(data=>{
        if(mounted) {
          setUsers(data);
          setLoading(false);
        }
      })
      .catch(err => { console.error(err); setLoading(false); });
    return ()=> mounted = false;
  },[]);

  const openEdit = (user) => {
    setEditingUser(user);
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(prev => prev.filter(u => u.id !== id));
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setUsers(prev => prev.map(u => u.id === editingUser.id ? {...u, ...values} : u));
      setIsModalOpen(false);
      setEditingUser(null);
      form.resetFields();
    } catch(err) {
      // validation failed
    }
  };

  return (
    <div style={{padding:20}}>
      <Title level={3}>Assignment 2 - Advanced (Ant Design)</Title>
      {loading ? (
        <div style={{textAlign:'center', padding:50}}>Loading users…</div>
      ) : (
        <Row gutter={[16,16]}>
          {users.map(user=>(
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                actions={[
                  <EditOutlined key="edit" onClick={()=>openEdit(user)} />,
                  <DeleteOutlined key="del" onClick={()=>handleDelete(user.id)} />
                ]}
              >
                <Card.Meta
                  avatar={<Avatar username={user.username} />}
                  title={user.name}
                  description={<div>
                    <div style={{marginTop:8}}><strong>@{user.username}</strong></div>
                    <div style={{marginTop:6}}><small>{user.company?.name}</small></div>
                    <div style={{marginTop:8}}>
                      <div><strong>Email:</strong> {user.email}</div>
                      <div><strong>Phone:</strong> {user.phone}</div>
                      <div><strong>Website:</strong> {user.website}</div>
                    </div>
                  </div>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal title="Edit User" open={isModalOpen} onOk={handleOk} onCancel={()=>{ setIsModalOpen(false); setEditingUser(null); form.resetFields(); }}>
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Full Name" rules={[{required:true, message:"Please enter name"}]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{required:true, type:'email'}]}>
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
          <Form.Item name="website" label="Website">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
