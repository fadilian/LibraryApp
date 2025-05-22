import React, {useState, useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const styles = { 
        headerStyle: {
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: '#f4f4f4',
            display: 'flex',
            alignItems: 'center',
            padding: '30px',
        },

        logoStyle: {
            marginRight: '20px'
        },

        navMenuStyle: {
            display: 'flex',
            gap: '15px',
        },

        navItemStyle: {
            textAlign: 'center',
            color: 'black',
            textDecoration: 'none',
            padding: '5px 7px',
            backgroundColor: '#f4f4f4',
            borderRadius: '10px',
            border: '2px solid black',
            width:'130px'
        },
    };

    return (
        <header style={styles.headerStyle}>
            <nav style={{display:'flex', gap:'562px'}}>
                    <div style={{color:'black', alignContent:'center', fontSize:'28px', width:'300px'}}>
                        <h1><b>BOOK SPACE's ADMIN</b></h1>
                    </div>
                <div style={styles.navMenuStyle}>    
                    <Link to="/admin/user" style={styles.navItemStyle}><b>User</b></Link>
                    <Link to="/admin/book" style={styles.navItemStyle}><b>Book</b></Link>
                    <Link to="/admin/borrowing" style={styles.navItemStyle}><b>Borrowing</b></Link>
                </div>
            </nav>
        </header>
    );
};

const UserList = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () =>{
        const response = await axios.get('http://localhost:5000/user');
        setUser(response.data);
    }

    const deleteUser = async (id) =>{
        try {
            await axios.delete(`http://localhost:5000/user/${id}`);
            getUser();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="columns mt-5 is-centered">
                <div className="column is-half">
                    <Link to={`add`} className='button is-success'>Add New</Link>
                    <table className="table is-striped is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Telephone</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {user.map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.telp}</td>
                                    <td>
                                        <Link to={`/admin/user/edit/${user.id}`} className="button is-small is-info">Edit</Link>
                                        <button onClick={() => deleteUser(user.id)} className="button is-small is-danger">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserList;
