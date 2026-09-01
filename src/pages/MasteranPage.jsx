import React from 'react';
import { Link } from 'react-router-dom';

const semestersData = [
  {
    id: 1,
    title: 'Semester 1',
    link: 'https://drive.google.com/drive/folders/1rdH8K26B8K7yNtLd0F_pBulPAbGSc59N?usp=drive_link',
    subjects: [
      'Bahasa Inggris III', 'Pendidikan Agama Islam', 'Kalkulus I', 'Kalkulus II',
      'Fisika Dasar I', 'Bahasa Indonesia', 'Pemrograman Dasar', 'Teknologi Informasi',
      'Bahasa Inggris I', 'Pancasila', 'Bahasa Inggris II', 'Kewarganegaraan'
    ]
  },
  {
    id: 2,
    title: 'Semester 2',
    link: 'https://drive.google.com/drive/folders/1JZ9Mj6NsRL8aofRioztzT6ulAU39UIM5?usp=drive_link',
    subjects: [
      'Kimia', 'Aljabar Linear', 'Matematika Teknik', 'Elektronika Dasar',
      'Praktikum Fisika Dasar I', 'Fisika Dasar II', 'Algoritma & Pemrograman',
      'Praktikum Pemrograman Dasar'
    ]
  },
  {
    id: 3,
    title: 'Semester 3',
    link: 'https://drive.google.com/drive/folders/134rmFP85794N0D-9Y2XHnPyHtsK9Q0I8?usp=drive_link',
    subjects: [
      'Struktur Data', 'Multimedia', 'Sistem Digital', 'Etika Profesi',
      'Internet of Things (IoT)', 'Kewirausahaan', 'Interaksi Manusia dan Komputer',
      'Praktikum Fisika Dasar II', 'Kecerdasan Buatan', 'Pengenalan Jaringan Komputer',
      'Olahraga', 'Praktikum Pengenalan Jaringan Komputer', 'Praktikum Elektronika Dasar',
      'Praktikum Multimedia'
    ]
  },
  {
    id: 4,
    title: 'Semester 4',
    link: 'https://drive.google.com/drive/folders/1lNS5iRCK_qUxZCm2dl8lQOMXZy4wBqQf?usp=drive_link',
    subjects: [
      'Organisasi dan Arsitektur Komputer', 'Sistem Basis Data', 'Probabilitas dan Statistika',
      'Transduser dan Sensor', 'Sistem Tertanam', 'Rekayasa Perangkat Lunak', 'Sistem Digital Lanjut',
      'Praktikum Sistem Digital', 'Sistem Operasi', 'Matematika Diskrit',
      'Praktikum Rekayasa Perangkat Lunak', 'Praktikum Sistem Basis Data'
    ]
  },
  {
    id: 5,
    title: 'Semester 5',
    link: 'https://drive.google.com/drive/folders/15T6t47tY2pI32gEBS-wHdifJnVhKPFRe?usp=drive_link',
    subjects: [
      'Rangkaian Listrik', 'Pemrograman Berorientasi Objek (N)', 'Pemrograman Perangkat Bergerak',
      'Bahasa Pemrograman Rakitan', 'Kerja Praktik', 'Teknik Mikroprosesor dan Antarmuka',
      'Metode Numerik', 'Manajemen Proyek TI', 'Sistem Operasi Waktu Nyata', 'Sinyal dan Sistem',
      'Switching, Routing dan Jaringan Nirkabel', 'Praktikum Pemrograman Perangkat Bergerak',
      'Praktikum Switching, Routing dan Jaringan Nirkabel'
    ]
  },
  {
    id: 6,
    title: 'Semester 6',
    link: 'https://drive.google.com/drive/folders/1vmWBhgbhE3Yb6OLyCmuIUOXEtyPcts_H?usp=drive_link',
    subjects: [
      'Kuliah Kerja Nyata (KKN)', 'Metodologi Penelitian', 'Kriptografi', 'Pengolahan Sinyal (N)',
      'Teknik Kendali dan Otomasi', 'Proyek Desain Capstone I', 'Data Mining', 'Keamanan Sistem Informasi',
      'Praktikum Teknik Mikroprosesor dan Antarmuka', 'Praktikum Teknik Kendali dan Otomasi',
      'Praktikum Sistem Digital Lanjut'
    ]
  },
  {
    id: 7,
    title: 'Semester 7',
    link: null,
    customMessage: 'lagi berjalan euy',
    subjects: []
  },
  {
    id: 8,
    title: 'Semester 8',
    link: null,
    customMessage: 'beloman nanti yee',
    subjects: []
  },
  {
    id: 'KP',
    title: 'Kerja Praktik',
    link: 'https://drive.google.com/drive/folders/1fnP_Eii7z8yZX9U1jdZRgOOLyU_JS5aw?usp=sharing',
    customMessage: 'masih nyari file yang hilang',
    subjects: ['laporan kelompok', 'laporan pribadi', 'persuratan']
  },
  {
    id: 'CP',
    title: 'Capstone',
    link: null,
    customMessage: 'neraka terakhir masih on going',
    subjects: [
      'c100', 'c200', 'c300'
    ]
  }
];

const MasteranPage = () => {
  return (
    <div className="modules-page animate-fade-in">
      <img 
        className="modules-bg" 
        src="/gambar-7.jpeg" 
        alt="Masteran background" 
      />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(4,11,22,0.9) 100%)', boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)', zIndex: -1, pointerEvents: 'none' }}></div>
      
      <div className="header-nav">
        <Link to="/" className="btn btn-secondary">
          &larr; balik ke page sebelumnya
        </Link>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="modules-title" style={{ marginBottom: '1rem', textShadow: '0 8px 20px rgba(0, 0, 0, 0.8), 0 0 30px rgba(164, 125, 171, 0.6)' }}>
          MASTERAN PUNYA KU NIEH
        </h1>
        <p style={{ color: '#f2f2f2', maxWidth: '650px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6', textShadow: '0 2px 5px rgba(0, 0, 0, 0.8)' }}>
          cause of different curriculum, jadinya banyak yang beda tiap semesternya. tinggal cari-cari dah tuh mana matkul yang lagi kamu ambil. isinya dah jadi zip and sizenya beda-beda hehe. yaa siapa tau kepake luv nieh masteran.
        </p>
      </div>

      <div className="masteran-bento">
        {semestersData.map((semester) => (
          <div className="bento-box" key={semester.id}>
            <div className="bento-header">
              <div className="bento-title-area">
                <div className="group-icon" style={{ backgroundColor: '#A47DAB', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px' }}>
                  <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#f2f2f2' }}>{semester.id}</span>
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#f2f2f2' }}>{semester.title}</h3>
                  <p className="text-muted" style={{ fontSize: '0.875rem', margin: '0.25rem 0 0 0' }}>
                    {semester.subjects.length > 0 ? `${semester.subjects.length} Mata Kuliah` : 'On Progress'}
                  </p>
                </div>
              </div>
              {semester.link && (
                <a href={semester.link} target="_blank" rel="noopener noreferrer" className="btn-info" style={{ textDecoration: 'none', padding: '0.6rem 1rem' }}>
                  Drive Semester
                </a>
              )}
            </div>
            
            <div className="bento-subjects">
              {semester.customMessage ? (
                <p style={{ color: '#E2D1E5', fontSize: '0.875rem', margin: '0.5rem 0' }}>
                  {semester.customMessage}
                </p>
              ) : (
                semester.subjects.map((subject, idx) => (
                  <div className="bento-pill" key={idx}>
                    {subject}
                  </div>
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MasteranPage;

