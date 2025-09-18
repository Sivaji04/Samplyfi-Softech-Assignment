import React from 'react';

export default function UserCard({ user }) {
const avatar = `https://avatars.dicebear.com/api/avataaars/${encodeURIComponent(user.username)}.svg?options[mood][]=happy`;

  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <div className="d-flex align-items-center">
          <img src={avatar} alt={user.username} style={{width:64,height:64}} className="mr-3 rounded"/>
          <div>
            <h5 className="card-title mb-0">{user.name}</h5>
            <small className="text-muted">@{user.username}</small>
          </div>
        </div>
        <hr />
        <p className="mb-1"><strong>Email:</strong> <a href={`mailto:${user.email}`}>{user.email}</a></p>
        <p className="mb-1"><strong>Phone:</strong> {user.phone}</p>
        <p className="mb-1"><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noreferrer">{user.website}</a></p>
        <p className="mb-1"><strong>Company:</strong> {user.company?.name}</p>
        <p className="mb-0 text-truncate"><strong>Address:</strong> {user.address?.street}, {user.address?.suite}, {user.address?.city} - {user.address?.zipcode}</p>
      </div>
    </div>
  );
}
