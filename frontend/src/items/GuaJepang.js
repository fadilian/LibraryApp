import React from 'react';
import bookCover from './assets/horror1.png';

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

function GuaJepang() {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCover}>
        <img src={bookCover} alt="Gua Jepang" style={styles.image} />
      </div>
      <div style={styles.bookDetails}>
        <h1 style={styles.title}>Gua Jepang</h1>
        <p><b>Penulis:</b> Kisah Tanah Jawa</p>
        <p><b>Rating:</b> Horror</p>
        <p><b>Tanggal Terbit:</b> 4 Juli 2019</p>
        <p><b>Tebal:</b> 184 halaman</p>
        <h2 style={styles.subtitle}>Sinopsis:</h2>
        <p style={styles.description}>
        Pernahkah kamu merindukan rumah? Selalu membayangkan kenangan terindah bersama orang-orang tersayang. Kenangan yang memberi semangat untuk terus berjuang, demi mereka yang menunggumu pulang.  Gua Jepang adalah saksi bisu mereka yang terampas kebebasannya; para romusha yang bekerja siang-malam tanpa istirahat dan makan, tahanan perang yang disiksa, serta jugun ianfu yang dipaksa memuaskan nafsu tentara Jepang. Mereka masih berharap bebas dan bisa kembali pulang hingga meregang nyawa di gua ini.  Hingga kini “mereka” berdiam diri di sudut-sudut gua, tempat mereka mati terbunuh. Berharap ada yang datang sehingga bisa merasukinya dan membawa mereka kembali ke rumah dan bertemu keluarga.  Di buku Kisah Tanah Jawa: Gua Jepang,Kawae—salah satu dari tentara Jepang yang mati dan terjebak di dalam gua—akan mengajak kita menyusuri sejarah kelam kekejaman penjajahan Jepang.
        </p>
      </div>
    </div>
  );
}

export default GuaJepang;
