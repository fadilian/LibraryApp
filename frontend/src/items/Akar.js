import React from 'react';
import bookCover from './assets/science1.png';

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

function Akar() {
  return (
    <div style={styles.bookContainer}>
      <div style={styles.bookCover}>
        <img src={bookCover} alt="Akar" style={styles.image} />
      </div>
      <div style={styles.bookDetails}>
        <h1 style={styles.title}>Akar</h1>
        <p><b>Penulis:</b> Dee Lestari</p>
        <p><b>Rating:</b> Fiksi Ilmiah</p>
        <p><b>Tanggal Terbit:</b> 2012</p>
        <p><b>Tebal:</b> 286 halaman</p>
        <h2 style={styles.subtitle}>Sinopsis:</h2>
        <p style={styles.description}>
          "Di tahun 2003, Gio seorang naturalis keturunan Tionghoa, Indonesia dan Portugis pergi mengunjungi Bolivia untuk bertemu dengan Chaska, ibu dari teman Quechuanya bernama Paulo yang sudah ia anggap sebagai ibu sendiri.
Ketika berkunjung ke Bolivia, Gio tiba-tiba mendapatkan telepon dari Paulo yang memberi kabar tentang hilangnya Diva Anastasia di pedalaman Amazon. Cerita kemudian beralih ke tahun sebelumnya yaitu tahun 2002.
Bodhi merupakan seorang pemuda yang mengikuti subkultur punk dan bekerja sebagai bawahan dari Bong yaitu pemimpin dari hidup punk. Sebagai instruktur pelonco punk, Bodhi memiliki tugas untuk membekali bawahannya dengan cerita hidupnya sendiri.
Bodhi ditinggalkan di pekarangan Vihara Pit Yong Kiong di Lawang, Malang. Ia dilahirkan dengan tulang yang tumbuh di sekitar kepalanya bagian luar, sehingga ia harus mengenakan bandana untuk membuatnya terlihat normal dan dapat diterima oleh orang lain.
Setelah dibuang, Bodhi dibesarkan oleh Zang Ta Long yang dikenal sebagai Guru Liong dan ia mengidolakan sosok Zang Ta Long karena berwibawa dan agung. Bodhi memiliki kemampuan yang cukup aneh, ia mampu bertukar diri sejenak dengan makhluk hidup apapun yang ia lihat atau ia sentuh.
Dikelilingi oleh paranoia tentang masa depan dan nasibnya, Bodhi akhirnya keluar dari vihara hingga hingga ia berusia 18 tahun. Ketika ingin kembali, Guru Liong justru menyuruh Bodhi untuk pergi sejauh-jauhnya dari Vihara dan membekali Bodhi dengan sebuah tasbih.
Setelah berjuang untuk mendapatkan paspor serta visa gelap, Bodhi akhirnya berkesempatan untuk menyebrang ke Penang, Malaysia. Di Penang, ia bertemu dengan Tristan Sanders seorang backpacker asal Australia yang ingin melakukan sebuah perjalanan mengitari Asia Tenggara.
Kemudian, Bodhi memberikan tasbih Guru Liong pada Tristan sebagai sebuah kenang-kenangan dan ia berpisah dengan Tristan di Bangkok dan kemudian tinggal di sebuah kos di daerah Srinthip.
Pada suatu hari, Bodhi bertemu dengan Kell seorang keturunan Irlandia dan Mesir yang memiliki paras luar biasa tampan, berkarisma serta memiliki tato di sekujur tubuhnya. Kell bekerja sebagai seniman tato, tetapi dia hanya mau mengukir 617 tato selama karirnya dan ia telah mengukir 616 tato, yang artinya hanya kurang 1 tato untuk ia ukir.
Kell berencana untuk memberikan ukiran terakhirnya pada Bodhi, sebagai subyek ke 617-nya dan mengharapkan Bodhi sebagai pengukir tato terakhir di tubuh Kell sebagai tato ke 618-nya. Agar keinginan Kell ini dapat tercapai, maka Kell mengajarkan Bodhi cara membuat tato.

        </p>
      </div>
    </div>
  );
}

export default Akar;