import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddBorrowing = () => {
    const [userId, setUserId] = useState("");
    const [bookId, setBookId] = useState("");
    const [borrowFor, setBorrowFor] = useState(2);
    const [users, setUsers] = useState([]);
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
        fetchBooks();
    }, []);

    const fetchUsers = async () => {
        const response = await axios.get('http://localhost:5000/user');
        setUsers(response.data);
    };

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:5000/book');
        setBooks(response.data);
    };
    const styles = {
    body: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        textAlign: 'center'
    },
    title: {
        fontSize: '66px',
        fontWeight: 'bold',
        color: 'black'
    },
    description: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '35px'
    },
    container: {
        width: '380px',
        padding: '25px',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        textAlign: 'center',
    },
    
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        marginBottom: '10px'
    },
    field: {
        marginBottom: '20px',
        color:'black'
    },
    button: {
        width: '100%',
        padding: '10px',
        backgroundColor: '#0CC5E5',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }
};
    const saveBorrowing = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/borrowing', {
                userId,
                bookId,
                borrowFor,
                status: "Pending"
            });
            navigate("/Thankyou");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div style={styles.body}>
            <h1 style={styles.title}>Borrow a Book!</h1>
            <p style={styles.description}>Fill the form bellow!</p>
            <div style={styles.container}>
                <form onSubmit={saveBorrowing}>
                    <div style={styles.field}>
                        <div style={{ marginBottom: '10px', textAlign:'left', color: 'black'}}>
                        <p>Name</p>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                value={userId}
                                onChange={(e) => setUserId(e.target.value)}
                                style={{ backgroundColor: 'white', color:'black' }}
                                required>
                                    <option value="">Choose Name...</option>
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>{user.name}</option>
                                        ))}
                                </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={styles.field}>
                    <div style={{ marginBottom: '10px', textAlign:'left', color: 'black'}}>
                        <p>Book</p>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                value={bookId} 
                                onChange={(e) => setBookId(e.target.value)}
                                style={{ backgroundColor: 'white', color:'black' }}
                                required>
                                    <option value="">Choose book title...</option>
                                    {books.map((book) => (
                                        <option key={book.id} value={book.id}>{book.title}</option>
                                    ))}
                                </select>
                            </div>
                        </div></div>
                    </div>
                    <div style={styles.field}>
                    <div style={{ marginBottom: '10px', textAlign:'left', color: 'black'}}>
                        <p>Borrow for (days)</p>
                        <div className="control">
                            <div className="select is-fullwidth">
                                <select
                                value={borrowFor}
                                onChange={(e) => setBorrowFor(e.target.value)}
                                style={{ backgroundColor: 'white', color:'black' }}
                                required>
                                    {[...Array(14)].map((_, i) => (
                                        <option key={i + 2} value={i + 2}>{i + 2} days</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* <Link to="/Take">Belum pernah pinjam sebelumnya.</Link> */}
                    <div style={{marginTop:'20px'}}>
                        <button type='submit' style={styles.button }>Take</button>
                    </div>
                </form>
            </div>
        </div>
    );
};



export default AddBorrowing;
