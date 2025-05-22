import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import icon from './assets/bookspace-icon.png';
import slider1 from './assets/slider1.jpg';
import slider2 from './assets/slider2.jpg';
import slider3 from './assets/slider3.jpg';
import fiction from './assets/fiction.png';
import horror from './assets/horror.png';
import science from './assets/science.png';
import selfdev from './assets/selfdev.png';
import fiction1 from './assets/fiction1.jpg'
import fiction2 from './assets/fiction2.png';
import horror1 from './assets/horror1.png';
import horror2 from './assets/horror2.png';
import science1 from './assets/science1.png';
import science2 from './assets/science2.png';
import selfdev1 from './assets/selfdev1.png';
import selfdev2 from './assets/selfdev2.png';

const Navbar = () => {
    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            }
        };

    const styles = { 
        headerStyle: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: '#f4f4f4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 50px',
        boxShadow: '0 7px 10px rgba(0, 0, 0, 0.1)'
    },

    logoStyle: {
        marginRight: '20px'
    },

    navMenuStyle: {
        display: 'flex',
        gap: '15px'
    },

    navItemStyle: {
        textAlign: 'center',
        color: 'black',
        textDecoration: 'none',
        padding: '5px 7px',
        backgroundColor: '#0CC5E5',
        borderRadius: '10px',
        border: '2px solid black',
        width: '130px'
    },

    navItemStyle2: {
        textAlign: 'center',
        color: 'black',
        textDecoration: 'none',
        padding: '5px 7px',
        backgroundColor: 'none',
        borderRadius: '10px',
        border: '2px solid black',
        width: '130px'
    },

}

    return (
        <header style={styles.headerStyle}>
            <div style={styles.logoStyle}>
                <img src={icon} alt="logo" style={{ height: '80px' }} />
            </div>
            <nav>
                <div style={styles.navMenuStyle}>
                    <button style={styles.navItemStyle2} onClick={() => scrollToSection('home')}><b>HOME</b></button>
                    <button style={styles.navItemStyle2} onClick={() => scrollToSection('desk')}><b>DESK</b></button>
                    <button style={styles.navItemStyle2} onClick={() => scrollToSection('books')}><b>BOOKS</b></button>
                    <Link to="/Take" style={styles.navItemStyle}><b>TAKE</b></Link>
                </div>
            </nav>
        </header>
    );
};

const LibraryHome = () => {

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            }
        };

    const sectionStyle = {
        padding: '50px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        color: 'black'
    };

    const container = {
        borderRadius: '15px',
        padding: '15px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        textAlign: 'left',
        marginTop: '40px',
        backgroundColor: '#fff',

    }

    const contBook = {
        display: 'flex',
        gap: '50px',
        
    }

    const deskBook = {
        borderRadius: '15px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '25%',
        margin: '35px 0px 0px 0px',
        height: '175px',
        padding: '50px',
        backgroundColor: '#fff',
        cursor: 'pointer'
    }

    const books = {
        borderRadius: '15px',
        padding: '15px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '50%',
        margin: '25px 50px 10px 50px',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

    const action = {
        display:'flex',
        width:'70%',
        textAlign:'center',
        justifyContent:'space-between',
        marginTop:'15px'
    }

    const view = {
        borderRadius: '15px',
        border: '2px solid black',
        color:'black',
        width:'40%',
        padding:'4px 0px',
        cursor: 'pointer'
    }
    const take = {
        borderRadius: '15px',
        border: '2px solid black',
        backgroundColor: '#0CC5E5',
        color:'black',
        width:'40%',
        padding:'4px 0px',
        cursor: 'pointer'
    }

    const images = [slider1, slider2, slider3];


    return (
        <section id="home">
            <Navbar />
            <Carousel showThumbs={false} autoPlay infiniteLoop>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={''} style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
                    </div>
                ))}
            </Carousel>
            <section id="desk" style={sectionStyle}>
                <div style={container}>
                    <h1 style={{fontSize: '40px'}}><b>DESK</b></h1>
                </div>
                <div style={contBook}>
                    <div style={deskBook} onClick={() => scrollToSection('fictionSection')}>
                        <img src={fiction} alt="fiction" style={{ width: '50px' }} />
                        <p><b>Fiction Books</b></p>
                    </div>
                    <div style={deskBook} onClick={() => scrollToSection('horrorSection')}>
                        <img src={horror} alt="fiction" style={{ width: '50px' }} />
                        <p><b>Horror Books</b></p>
                    </div>
                    <div style={deskBook} onClick={() => scrollToSection('scienceSection')}>
                        <img src={science} alt="fiction" style={{ width: '50px' }} />
                        <p><b>Science Books</b></p>
                    </div>
                    <div style={deskBook} onClick={() => scrollToSection('selfdevSection')}>
                        <img src={selfdev} alt="fiction" style={{ width: '50px' }} />
                        <p><b>Self Development Book</b></p>
                    </div>
                </div>
            </section>

            <section id="books" style={sectionStyle}>
                <div style={container}>
                    <h1 style={{fontSize: '40px'}}><b>BOOKS</b></h1>
                </div>
                <div id="fictionSection" style={container}>
                    <h1 style={{ fontSize: '40px', borderBottom: '3px solid #a4a4a4', }}>Fiction Books</h1>
                    <div style={contBook}>
                        <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={fiction1} alt="fiction" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>Romeo Juliet</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>William SHakespare</p>
                            <div style={action}>
                            <Link style={view} to="/RomeoJuliet"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                        <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={fiction2} alt="fiction" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>Himly Milan</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>Nadia Ristivani</p>
                            <div style={action}>
                            <Link style={view} to="/HilmyMilan"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="horrorSection" style={container}>
                    <h1 style={{ fontSize: '40px', borderBottom: '3px solid #a4a4a4', }}>Horror Books</h1>
                    <div style={contBook}>
                    <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={horror1} alt="horror" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>Gua Jepang</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>Kisah Tanah Jawa</p>
                            <div style={action}>
                            <Link style={view} to="/GuaJepang"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                        <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={horror2} alt="horror" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>KKN di Desa Penari</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>Simpelman</p>
                            <div style={action}>
                            <Link style={view} to="/KKNDiDesaPenari"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="scienceSection" style={container}>
                    <h1 style={{ fontSize: '40px', borderBottom: '3px solid #a4a4a4', }}>Science Books</h1>
                    <div style={contBook}>
                    <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={science1} alt="science" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>Akar</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>Dee Lestari</p>
                            <div style={action}>
                            <Link style={view} to="Akar"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                        <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={science2} alt="science" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>Kartun Kalkulus</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>Larry Gonick</p>
                            <div style={action}>
                            <Link style={view} to="KartunKalkulus"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="selfdevSection" style={container}>
                    <h1 style={{ fontSize: '40px', borderBottom: '3px solid #a4a4a4', }}>Self Development Books</h1>
                    <div style={contBook}>
                    <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={selfdev1} alt="selfdev" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>The Alpha Girl's Guide</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>Henry Manampiring</p>
                            <div style={action}>
                            <Link style={view} to="/TheAlpha"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                        <div style={{ ...books, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img src={selfdev2} alt="selfdev" style={{ width: '150px', border: '1px solid black' }} />
                            <p style={{fontSize: '24px'}}><b>Filosofi Teras</b></p>
                            <p style={{color: '#a4a4a4', fontSize: '20px'}}>Henry Mnamiring</p>
                            <div style={action}>
                            <Link style={view} to="/FilosofiTeras"><b>View</b></Link>
                            <Link style={take} to="/Take"><b>Take</b></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{
                backgroundColor:'#C0C7D4',
                color:'black',
                padding: '50px',
                textAlign: 'center'
            }}>
                <h4>
                    <b>BookSpace 2024 &copy; All Right Reserved.</b>
                </h4>
            </div>
        </section>
    );
};

export default LibraryHome;