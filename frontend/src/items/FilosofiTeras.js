import React from 'react';
import bookCover from './assets/selfdev2.png';

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

  function FilosofiTeras() {
    return (
        <div style={styles.bookContainer}>
          <div style={styles.bookCover}>
            <img src={bookCover} alt="FilosofiTeras" style={styles.image} />
          </div>
          <div style={styles.bookDetails}>
            <h1 style={styles.title}>Filosofi Teras</h1>
            <p><b>Penulis:</b> Henry Manampiring</p>
            <p><b>Rating:</b> Self Development</p>
            <p><b>Tanggal Terbit:</b> 19 Des 2018</p>
            <p><b>Tebal:</b> 346 halaman</p>
            <h2 style={styles.subtitle}>Sinopsis:</h2>
            <p style={styles.description}>
              Lebih dari 2.000 tahun lalu, sebuah mazhab filsafat menemukan akar masalah dan juga solusi dari banyak emosi negatif. Stoisisme, atau Filosofi Teras, adalah filsafat Yunani-Romawi kuno yang bisa membantu kita mengatasi emosi negatif dan menghasilkan mental yang tangguh dalam menghadapi naik-turunnya kehidupan. Jauh dari kesan filsafat sebagai topik berat dan mengawang-awang, Filosofi Teras justru bersifat praktis dan relevan dengan kehidupan Generasi Milenial dan Gen-Z masa kini.
            </p>
          </div>
        </div>
    );
  }

export default FilosofiTeras;