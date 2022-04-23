import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleCrossBtn = id => {
        console.log("delete btn id", id)

        fetch(`http://localhost:4000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remaining = users.filter(u => u._id !== id);
                setUsers(remaining)
            })
    }

    return (
        <div>
            <h1>Users</h1>
            <div>
                {
                    users.map(user => <li
                        key={user._id}>
                        Name: {user.name}  ||  Email: {user.email}
                        <Link to={`/user/${user._id}`}>Update</Link>
                        <button onClick={() => handleCrossBtn(user._id)}>X</button>
                    </li>)
                }
            </div>
        </div>
    );
};

export default Home;