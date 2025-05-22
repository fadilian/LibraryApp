import React from 'react';
import bookCover from './assets/fiction1.jpg';

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

function RomeoJuliet() {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCover}>
        <img src={bookCover} alt="Romeo Juliet" style={styles.image} />
      </div>
      <div style={styles.bookDetails}>
        <h1 style={styles.title}>Romeo Juliet</h1>
        <p><b>Penulis:</b> William Shakespeare</p>
        <p><b>Rating:</b> Fiksi</p>
        <p><b>Tanggal Terbit:</b> 5 September 2020</p>
        <p><b>Tebal:</b> 166 halaman</p>
        <h2 style={styles.subtitle}>Sinopsis:</h2>
        <p style={styles.description}>
          "Oh, Romeo! Romeo! Mengapa namamu Romeo? Ingkarilah nama ayahmu dan juga namamu! Atau, kalau engkau tidak mau, demi cintaku, aku bersedia tidak menjadi seorang Capulet." Hanya karena sebuah nama, cinta Juliet dan Romeo tidak bisa berjalan sempurna. Seandainya nama Romeo bukan Romeo Montague, atau Juliet bukan Juliet Capulet, tentu cinta mereka tidak akan terhalang oleh restu. Membaca kisah cinta Romeo dan Juliet yang romantis serta tragis ini memang membuat siapa pun akan tergugu. Ketulusan cinta yang terhalang oleh keturunan serta asal-usul keluarga, siapa yang tidak akan bersedih dibuatnya. Apa artinya sebuah nama bagi seorang pecinta? Ketulusan adalah poin yang paling utama. Bagi Juliet, Romeo akan tetap menjadi Romeo dengan pribadi yang disukainya, kekasih yang dicintainya, meski namanya bukan lagi Romeo Montague. Seperti mawar yang akan tetap wangi meskipun disebut dengan nama lainnya. Bagi seorang pecinta seperti Juliet, sebuah nama tiada artinya. Selamat membaca dan menyelami pedihnya kisah cinta Romeo dan Juliet.
        </p>
      </div>
    </div>
  );
}

export default RomeoJuliet;
