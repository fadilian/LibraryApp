import React from 'react';
import { useNavigate } from 'react-router-dom';

// Definisikan CSS menggunakan const
const styles = {
    body: {
        display: 'grid',
        placeItems: 'center',
        height: '100vh', 
        backgroundColor: '#f7f7f7'
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

const AddUser = () => {
    const navigate = useNavigate();

    // Fungsi untuk menavigasi ke LibraryHome
    const saveUser = async (e) => {
        e.preventDefault(); // Mencegah reload halaman

        // Aksi tambahan dapat ditambahkan di sini, seperti menyimpan pengguna
        
        navigate("/LibraryHome"); // Navigasi ke halaman LibraryHome
    };

    return (
        <div style={styles.body}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={styles.title}>Thank You!</h1>
                <p style={styles.description}>You are borrowing this book. Please turn it back on time.</p>

                {/* Memindahkan tombol ke dalam form */}
                <form onSubmit={saveUser}>
                    <button type="submit" style={styles.button}><b>Back to Home</b></button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
