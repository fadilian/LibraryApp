import React from 'react';
import bookCover from './assets/fiction2.png';

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

function HilmyMilan() {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCover}>
        <img src={bookCover} alt="Hilmy Milan" style={styles.image} />
      </div>
      <div style={styles.bookDetails}>
        <h1 style={styles.title}>Hilmy Milan</h1>
        <p><b>Penulis:</b> Nadia Ristivani</p>
        <p><b>Rating:</b> Fiksi</p>
        <p><b>Tanggal Terbit:</b> 12 November 2021</p>
        <p><b>Tebal:</b> 166 halaman</p>
        <h2 style={styles.subtitle}>Sinopsis:</h2>
        <p style={styles.description}>
          Kata Milan, bukanlah laki-laki sempurna yang  kecerdasannya melebihi Einstein, ketampanannya melampaui Leonardo  DiCaprio, atau kekayaannya menyetarai Steve Jobs yang seorang wanita  butuhkan. Itu memang bonus yang diidam-idamkan. Namun sebetulnya, bukan  itu poin utamanya. Yang wanita butuhkan adalah kesediaan. Bersedia untuk selalu mengerti dan memahami, bersedia untuk menenangkan tanpa  bertanya, dan kesediaan untuk mencintai tanpa memaksakan. Kata  Hilmy, duniamu masih terlalu sempit kalau berpikir mencintai adalah  tentang hubungan timbal balik. Jika selalu begitu-memaksa memiliki  seseorang yang dicintai, fase kehilangan seseorang yang belum pernah  dimiliki akan selalu terulang, terus terulang. Biarkan semuanya mengalir seperti yang ditorehkan catatan takdir. Tak perlu memaksa semesta  bergerak terlalu cepat, atau terlalu lambat. Semua ada porsinya  masing-masing. Cinta itu bukan tentang hal-hal rumit. Kuncinya hanya satu, selalu satu. Nyaman.
        </p>
      </div>
    </div>
  );
}

export default HilmyMilan;
