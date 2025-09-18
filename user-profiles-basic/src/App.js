import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

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
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
    return ()=> mounted = false;
  },[]);

  return (
    <div className="container my-4">
      {loading ? (
        <div className="text-center">
          <div className="sk-cube-grid">
            <div className="sk-cube sk-cube1"></div>
            <div className="sk-cube sk-cube2"></div>
            <div className="sk-cube sk-cube3"></div>
            <div className="sk-cube sk-cube4"></div>
            <div className="sk-cube sk-cube5"></div>
            <div className="sk-cube sk-cube6"></div>
            <div className="sk-cube sk-cube7"></div>
            <div className="sk-cube sk-cube8"></div>
            <div className="sk-cube sk-cube9"></div>
          </div>
          <p>Loading users…</p>
        </div>
      ) : (
        <div className="row">
          {users.map(user=>(
            <div key={user.id} className="col-md-6 col-lg-4 mb-4">
              <UserCard user={user} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
