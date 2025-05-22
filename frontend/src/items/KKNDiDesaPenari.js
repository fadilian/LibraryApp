import React from 'react';
import bookCover from './assets/horror2.png';

const styles = {
  bookContainer: {
      display: 'flex',
      padding: '20px',
      background: 'white',
      paddingLeft: '100px',
      minHeight: '100vh',
  },
  bookCover: {
      maxWidth: '600px',
      borderRadius: '15px',
      padding: '15px',
      width: '40%',
      margin: '25px 50px 10px 50px',
      textAlign: 'center',
  },
  image: {
      width: '75%',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)'
  },
  bookDetails: {
      color: 'black',
      maxWidth: '600px',
      borderRadius: '15px',
      padding: '30px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
      width: '60%',
      margin: '25px 50px 10px 50px',
      
  },
  title: {
      marginBottom: '10px',
      fontSize: '30px',
      fontWeight: 'bold'
    
  },
  subtitle: {
      marginTop: '20px',
      fontWeight: 'bold'
  },
  description: {
      textAlign: 'justify',
  },
};

function KKNDiDesaPenari() {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCover}>
        <img src={bookCover} alt="KKN Di Desa Penari" style={styles.image} />
      </div>
      <div style={styles.bookDetails}>
        <h1 style={styles.title}>KKN Di Desa Penari</h1>
        <p><b>Penulis:</b> Simpleman</p>
        <p><b>Rating:</b> Horror</p>
        <p><b>Tanggal Terbit:</b> 13 September 2019</p>
        <p><b>Tebal:</b> 255 halaman</p>
        <h2 style={styles.subtitle}>Sinopsis:</h2>
        <p style={styles.description}>
        Saat motor melaju kencang menembus hutan, Widya mendengar tabuhan gamelan. Suaranya mendayu-dayu dan terasa semakin dekat. Tiba-tiba Widya melihat sesosok manusia tengah menelungkup seakan memasang pose menari. Ia berlenggak-lenggok mengikuti irama musik gamelan yang ditabuh cepat. Siapa yang menari di malam gulita seperti ini? Tiga puluh menit berlalu, dan atap rumah terlihat samar-samar dengan cahaya yang meski temaram bisa dilihat jelas oleh mata. “Mbak… kita sudah sampai di desa.” *** Dari kisah yang menggemparkan dunia maya, KKN di Desa Penari kini diceritakan lewat lembar-lembar tulisan yang lebih rinci. Menuturkan kisah Widya, Nur, dan kawan-kawan, serta bagian-bagian yang belum pernah dibagikan di mana pun sebelumnya.
        </p>
      </div>
    </div>
  );
}

export default KKNDiDesaPenari;
