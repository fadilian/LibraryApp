import React from 'react';
import bookCover from './assets/science2.png';

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

function KartunKalkulus() {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCover}>
        <img src={bookCover} alt="Kartun Kalkulus" style={styles.image} />
      </div>
      <div style={styles.bookDetails}>
        <h1 style={styles.title}>Kartun Kalkulus</h1>
        <p><b>Penulis:</b> Larry Gonick</p>
        <p><b>Rating:</b> Pengetahuan</p>
        <p><b>Tanggal Terbit:</b> 11 Agustus 2021</p>
        <p><b>Tebal:</b> 256 halaman</p>
        <h2 style={styles.subtitle}>Sinopsis:</h2>
        <p style={styles.description}>
        Larry Gonick, kartunis yang lulusan matematika, menyajikan buku pelajaran kalkulus bergambar tingkat kuliah tahun pertama yang menjelaskan dunia fungsi, limit, turunan, dan integral, menggunakan ilustrasi jelas dan membantu—serta humor untuk membuat ringan bahasan berat—Gonick mengajarkan dasar kalkulus, dengan banyak contoh dan latihan soal. Kombinasi sempurna hiburan dan pendidikan—cocok untuk mahasiswa, guru, dosen, orangtua, dan profesional. “Bagaimana cara memanusiakan kalkulus dan membuat konsepnya jadi menarik? Jawaban cerdas Larry Gonick adalah tokoh-tokoh kartun yang berbicara, berkomentar, bercanda—sambil mengajar persamaan dan konsep dan kegunaan kalkulus. Pencapaian luar biasa, dan sangat seru.” —LISA RANDALL, profesor fisika Harvard University dan penulis Knocking on Heaven's Door LARRY GONICK telah membuat komik sejarah, sains, dan subjek lain selama empat puluh tahun lebih. Dia pernah menjadi pengajar kalkulus di Harvard (tempat dia mendapat gelar BA dan MA matematika) serta Knight Science Journalism Fellow di MIT. Dia staf kartunis di majalah Muse.
        </p>
      </div>
    </div>
  );
}

export default KartunKalkulus;
