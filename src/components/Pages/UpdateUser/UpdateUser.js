import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const { id } = useParams();
    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        e.target.name.value = '';
        const email = e.target.email.value;
        e.target.email.value = '';
        const user = { name, email }

        // data send to server
        fetch(`http://localhost:4000/user/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <h1>Update User</h1>
            <form onSubmit={handleUpdateUser}>
                <input type="text" name="name" placeholder='Name' required id="" /> <br /><br />
                <input type="email" name="email" placeholder='Email' required id="" /> <br /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateUser;