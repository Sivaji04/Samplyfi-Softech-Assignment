import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Modal, Form, Input, Typography, Spin, Select, Switch } from 'antd';
import { EditOutlined, DeleteOutlined, HeartOutlined, HeartFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Option } = Select;

function Avatar({ username }) {
  const url = `https://avatars.dicebear.com/api/avataaars/${encodeURIComponent(username)}.svg?options[mood][]=happy`;
  return <img src={url} alt={username} style={{ width: 72, height: 72, borderRadius: 8 }} />;
}

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let mounted = true;
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        if (mounted) {
          const usersWithLike = data.map(user => ({ ...user, liked: false }));
          setUsers(usersWithLike);
          setLoading(false);
        }
      })
      .catch(err => { console.error(err); setLoading(false); });
    return () => mounted = false;
  }, []);

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

  const toggleLike = (id) => {
    setUsers(prev => prev.map(u => u.id === id ? { ...u, liked: !u.liked } : u));
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      setUsers(prev => prev.map(u => u.id === editingUser.id ? { ...u, ...values } : u));
      setIsModalOpen(false);
      setEditingUser(null);
      form.resetFields();
    } catch (err) { }
  };

  // Filter and Sort
  const filteredUsers = users
    .filter(u =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.username.toLowerCase().includes(search.toLowerCase()) ||
      u.company?.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => {
      // Show liked users first
      if (a.liked && !b.liked) return -1;
      if (!a.liked && b.liked) return 1;

      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'company') return a.company?.name.localeCompare(b.company?.name);
      return 0;
    });

  const iconStyle = { fontSize: 20 };

  return (
    <div style={{ padding: 20, background: darkMode ? '#1f1f1f' : '#fff', minHeight: '100vh', color: darkMode ? '#fff' : '#000' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <Title level={3} style={{ color: darkMode ? '#fff' : '#000' }}>User-Profiles-Advanced (Ant Design)</Title>
        <Switch checked={darkMode} onChange={setDarkMode} checkedChildren="Dark" unCheckedChildren="Light" />
      </div>

      <div style={{ marginBottom: 20, display: 'flex', gap: 16, flexWrap: 'wrap' }}>
        <Input placeholder="Search users..." value={search} onChange={e => setSearch(e.target.value)} style={{ width: 200 }} />
        <Select placeholder="Sort By" style={{ width: 150 }} onChange={setSortBy} allowClear>
          <Option value="name">Name</Option>
          <Option value="company">Company</Option>
        </Select>
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: 100 }}>
          <Spin size="large" tip="Loading users..." />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {filteredUsers.map(user => (
            <Col key={user.id} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000' }}
                actions={[
                  user.liked
                    ? <HeartFilled key="like" style={{ ...iconStyle, color: 'red' }} onClick={() => toggleLike(user.id)} />
                    : <HeartOutlined key="like" style={{ ...iconStyle, color: 'red' }} onClick={() => toggleLike(user.id)} />,
                  <EditOutlined key="edit" style={iconStyle} onClick={() => openEdit(user)} />,
                  <DeleteOutlined key="del" style={iconStyle} onClick={() => handleDelete(user.id)} />
                ]}
              >
                <Card.Meta
                  avatar={<Avatar username={user.username} />}
                  title={user.name}
                  description={<div style={{ marginTop: 8 }}>
                    <div><strong>@{user.username}</strong></div>
                    <div><small>{user.company?.name}</small></div>
                    <div style={{ marginTop: 8 }}>
                      <div><MailOutlined /> <strong>Email:</strong> {user.email}</div>
                      <div><PhoneOutlined /> <strong>Phone:</strong> {user.phone}</div>
                      <div><GlobalOutlined /> <strong>Website:</strong> {user.website}</div>
                    </div>
                  </div>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal
        title="Edit User"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={() => { setIsModalOpen(false); setEditingUser(null); form.resetFields(); }}
      >
        <Form form={form} layout="vertical">
          <Form.Item name="name" label="Full Name" rules={[{ required: true, message: "Please enter name" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
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
