import React from 'react';
import bookCover from './assets/selfdev1.png';

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

function TheAlpha() {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCover}>
        <img src={bookCover} alt="TheAlpha" style={styles.image} />
      </div>
      <div style={styles.bookDetails}>
        <h1 style={styles.title}>Henry Manampiring</h1>
        <p><b>Penulis:</b> William Shakespeare</p>
        <p><b>Rating:</b> Self Development</p>
        <p><b>Tanggal Terbit:</b> 31 Januari 2020</p>
        <p><b>Tebal:</b> 280 halaman</p>
        <h2 style={styles.subtitle}>Sinopsis:</h2>
        <p style={styles.description}>
          "Alpha Female adalah para perempuan yang menginspirasi, memimpin, menggerakkan orang sekitarnya, dan membawa perubahan. Mereka cerdas, percaya diri, dan independen. Bagaimana remaja dan perempuan muda bisa mengembangkan diri menjadi mereka? Buku ini adalah hasil pengamatan, riset artikel, wawancara langsung, dan diskusi dengan banyak perempuan di media sosial. Ditulis dengan ringan, penuh ilustrasi kocak, namun tetap blak-blakan dan menohok,The Alpha Girl’s Guide akan membuat kamu terinspirasi menjadi cewek smart, independen dan bebas galau!  Penasaran pembahasan apa saja yang ada di dalam buku? The Alpha Girl’s Guide akan membahas beberapa tips seperti: - Mana yang lebih penting, nilai atau pengalaman berorganisasi? - Apakah teman kamu teman sejati atau teman yang menghambat? - Bagaimana mengetahui cowok parasit dan manipulatif? dan masih banyak lagi!
        </p>
      </div>
    </div>
  );
}

export default TheAlpha;