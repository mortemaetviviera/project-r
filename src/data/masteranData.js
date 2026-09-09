/**
 * masteranData.js
 * Static data for the Masteran archive page.
 * Extracted from MasteranPage.jsx for separation of concerns.
 */

export const semestersData = [
  {
    id: 1,
    title: 'Semester 1',
    category: 'tingkat1',
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
    category: 'tingkat1',
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
    category: 'tingkat2',
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
    category: 'tingkat2',
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
    category: 'tingkat3',
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
    category: 'tingkat3',
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
    category: 'tingkat4',
    link: null,
    customMessage: 'lagi berjalan euy',
    subjects: []
  },
  {
    id: 8,
    title: 'Semester 8',
    category: 'tingkat4',
    link: null,
    customMessage: 'beloman nanti yee',
    subjects: []
  },
  {
    id: 'KP',
    title: 'Kerja Praktik',
    category: 'projects',
    link: 'https://drive.google.com/drive/folders/1fnP_Eii7z8yZX9U1jdZRgOOLyU_JS5aw?usp=sharing',
    customMessage: 'masih nyari file yang hilang',
    subjects: ['laporan kelompok', 'laporan pribadi', 'persuratan']
  },
  {
    id: 'CP',
    title: 'Capstone',
    category: 'projects',
    link: null,
    customMessage: 'neraka terakhir masih on going',
    subjects: ['c100', 'c200', 'c300']
  }
];

export const categoryTabs = [
  { id: 'all',      label: 'Semua' },
  { id: 'tingkat1', label: 'Tahun 1 (Semester 1-2)' },
  { id: 'tingkat2', label: 'Tahun 2 (Semester 3-4)' },
  { id: 'tingkat3', label: 'Tahun 3 (Semester 5-6)' },
  { id: 'tingkat4', label: 'Tahun 4 (Semester 7-8)' },
  { id: 'projects', label: 'KP & Capstone' }
];
