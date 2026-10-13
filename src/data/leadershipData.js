/**
 * leadershipData.js
 * Centralized data models, operational playbooks, and readiness checklists
 * for Wakanit (Wakil Ketua Unit) coordinating Divisi Media, Divisi Informasi, and Divisi Humas.
 */

export const STORAGE_KEY_LEADER = 'lycoris_leadership_progress';

export const divisionsOverview = [
  {
    id: 'media',
    name: 'Divisi Media',
    tagline: 'Visual, Desain & Dokumentasi',
    color: '#EDB4C7',
    icon: '🎨',
    desc: 'Ujung tombak visual unit: pembuatan poster, feed/story Instagram, teaser video, filter, dan dokumentasi foto/video hari-H.',
    responsibilities: [
      'Membuat master design guideline (warna, font, aset visual unit).',
      'Memproduksi konten feed, reels, story, dan motion grafis.',
      'Menyusun tim liputan dan juru kamera dokumentasi di lapangan.',
      'Manajemen arsip foto/video di Google Drive pasca-acara.'
    ],
    bottlenecks: 'Rentan revisi molor dan laptop lemot saat render. Butuh kejelasan materi teks dari Divisi Informasi sejak H-3.'
  },
  {
    id: 'informasi',
    name: 'Divisi Informasi',
    tagline: 'Kurasi Data, Naskah & Siaran Resmi',
    color: '#A47DAB',
    icon: '📰',
    desc: 'Otak narasi dan data unit: perumusan konten copywriting, rilis berita, materi pengumuman resmi, dan kurasi data peserta/internal.',
    responsibilities: [
      'Menyusun naskah caption, teks broadcast, dan panduan materi.',
      'Memvalidasi akurasi tanggal, link, dan isi pengumuman sebelum naik cetak/publish.',
      'Mengelola broadcast channel resmi, mading digital, atau web info unit.',
      'Mendokumentasikan FAQ (pertanyaan sering diajukan) untuk dioper ke Humas.'
    ],
    bottlenecks: 'Rentan salah ketik (typo) atau revisi data mendadak. Harus selesai duluan sebelum Divisi Media mulai mendesain.'
  },
  {
    id: 'humas',
    name: 'Divisi Humas',
    tagline: 'Diplomasi, Sounding & Relasi Eksternal',
    color: '#C084FC',
    icon: '📢',
    desc: 'Wajah dan jembatan eksternal unit: penyebaran siaran informasi ke grup luar/peserta, relasi ke stakeholder/tamu, dan penanganan pertanyaan.',
    responsibilities: [
      'Menjalin komunikasi dan sounding konten ke grup-grup angkatan & stakeholder.',
      'Menyambut dan mendampingi tamu, pembicara, atau pihak eksternal.',
      'Customer service / narahubung utama bagi peserta yang bingung.',
      'Memonitor respon publik terhadap informasi yang disebarkan.'
    ],
    bottlenecks: 'Sering kewalahan membalas chat bertubi-tubi di jam sibuk dan bergantung pada bahan materi resmi dari Divisi Informasi.'
  }
];

export const workflowPipeline = [
  {
    step: '1. Drafting & Verifikasi',
    owner: 'Divisi Informasi',
    desc: 'Menyusun materi teks, copywriting caption, dan memverifikasi data jadwal/lokasi ke Wakanit.'
  },
  {
    step: '2. Produksi Visual',
    owner: 'Divisi Media',
    desc: 'Menerima teks final dari Informasi, membuat poster/video sesuai pedoman visual, dan preview ke Wakanit.'
  },
  {
    step: '3. Sounding & Relasi',
    owner: 'Divisi Humas',
    desc: 'Menerima flyer + caption siap rilis, melakukan broadcast terpadu, dan membuka hotline narahubung.'
  },
  {
    step: '4. Monitoring & Lapor',
    owner: 'Wakanit → Kanit',
    desc: 'Wakanit memantau kelancaran ketiga divisi dan melaporkan rekapitulasi progres harian ke Ketua Unit.'
  }
];

export const leadershipPillars = [
  {
    id: 'pillar-1',
    number: '01',
    title: 'Posisi Wakanit: Jembatan Kanit & 3 Divisi',
    badge: 'Peran Utama',
    subtitle: 'Fokus Internal & Perlindungan Tim',
    desc: 'Sebagai Wakil Ketua Unit, peran utamamu adalah menjaga stabilitas dapur internal (Media, Informasi, Humas) dan menjadi penyaring beban sebelum naik ke Ketua Unit (Kanit).',
    bullets: [
      'Kanit fokus ke strategi makro, koordinasi dengan dosen/pembina, dan arah kebijakan.',
      'Wakanit fokus memastikan 3 divisi bergerak sinkron tanpa saling tunggu atau salah paham.',
      'Saring masalah teknis kecil di tingkat internal; bawa ke Kanit hanya saat butuh keputusan prinsipil.'
    ]
  },
  {
    id: 'pillar-2',
    number: '02',
    title: 'Rantai Sinergi 3 Divisi (No Saling Tunggu)',
    badge: 'Pipeline Alur Kerja',
    subtitle: 'Informasi ➔ Media ➔ Humas',
    desc: 'Masalah paling sering di kepanitiaan adalah "Media belum bikin desain karena Informasi belum ngasih caption, dan Humas bengong nungguin flyer".',
    bullets: [
      'Buat aturan SLA (Service Level Agreement): Informasi setor materi H-4, Media eksekusi H-2, Humas sounding H-1.',
      'Jangan biarkan Media menebak-nebak teks apa yang harus dimasukkan ke poster.',
      'Pastikan Humas punya template jawaban FAQ resmi agar tidak bolak-balik nanya di grup internal.'
    ]
  },
  {
    id: 'pillar-3',
    number: '03',
    title: 'Memimpin 20+ Orang Tanpa Bikin Pusing',
    badge: 'Manajemen Tim',
    subtitle: 'Struktur Koordinasi Sehat',
    desc: 'Memimpin 20+ orang tidak berarti kamu harus chat 20 orang itu setiap pagi. Energi pemimpin harus dialokasikan secara proporsional.',
    bullets: [
      'Bagi kanal komunikasi: 1 Grup Koordinasi Inti 3 Divisi (khusus progress & kendala) dan 1 Grup Besar Tim (khusus pengumuman final & bonding).',
      'Rapat gabungan maksimal 45–60 menit. Jangan rapat jika bisa diselesaikan lewat update bullet-point di chat.',
      'Terapkan format update singkat: [Nama Divisi] - Selesai Hari Ini / Sedang Dikerjakan / Kendala Utama.'
    ]
  },
  {
    id: 'pillar-4',
    number: '04',
    title: 'Problem Solving & Mengatasi Anggota Pasif',
    badge: 'People Dynamics',
    subtitle: 'Sentuhan Humanis tapi Tegas',
    desc: 'Dalam tim 20+ orang, wajar ada yang slow-response, burnout, atau merasa terasing. Kuncinya adalah pendekatan personal tanpa mempermalukan.',
    bullets: [
      'Jangan pernah menegur anggota di grup umum; gunakan pendekatan 1-on-1 private chat dengan empati ("Ada kendala di kuliah/tugas kah?").',
      'Jika ada divisi yang macet (misal Media overload), ajak barter beban kerja ringan dengan divisi lain.',
      'Berikan apresiasi kecil yang konsisten: terima kasih atas kerja keras mereka sangat berharga menjaga semangat tim.'
    ]
  },
  {
    id: 'pillar-5',
    number: '05',
    title: 'Komando Hari-H: Tetap Tenang & Siaga',
    badge: 'Eksekusi Lapangan',
    subtitle: 'Composure & Quick Decisions',
    desc: 'Di hari pelaksanaan, ketenangan Wakanit adalah jangkar bagi 20+ orang. Saat ada hal yang berjalan di luar rencana, fokus pada solusi cepat.',
    bullets: [
      'Siapkan Plan B untuk media (baterai cadangan, kuota internet backup, template visual darurat jika ada perubahan mendadak).',
      'Pastikan Humas memegang rundown real-time jika ada molor acara agar peserta/tamu tetap tenang.',
      'Di akhir hari, kumpulkan tim sebentar (5 menit) hanya untuk apresiasi sebelum evaluasi resmi.'
    ]
  }
];

export const checklistPhases = [
  {
    id: 'phase-1',
    phaseTitle: 'Fase 1: Konsolidasi & Penyelarasan Internal',
    items: [
      { id: 'p1_1', text: 'Membuat grup koordinasi terpisah antara 3 divisi (Media, Informasi, Humas).' },
      { id: 'p1_2', text: 'Menetapkan alur estafet kerja (Informasi setor teks ➔ Media buat visual ➔ Humas sounding).' },
      { id: 'p1_3', text: 'Menyepakati master timeline dan tanggal rilis konten utama bersama Kanit.' },
      { id: 'p1_4', text: 'Mendata keahlian spesifik anggota (siapa jago desain, video, copywriting, public speaking).' }
    ]
  },
  {
    id: 'phase-2',
    phaseTitle: 'Fase 2: Standarisasi & Persiapan Aset',
    items: [
      { id: 'p2_1', text: 'Divisi Media menyiapkan visual identity (palette warna, font, logo unit).' },
      { id: 'p2_2', text: 'Divisi Informasi menyiapkan bank caption & tone suara (resmi/santai/ajakan).' },
      { id: 'p2_3', text: 'Divisi Humas menyiapkan database kontak grup sounding dan nomor narahubung.' },
      { id: 'p2_4', text: 'Wakanit membuat Google Drive bersama untuk penyimpanan seluruh aset 3 divisi.' }
    ]
  },
  {
    id: 'phase-3',
    phaseTitle: 'Fase 3: Ritme Kerja & Sinkronisasi Berkala',
    items: [
      { id: 'p3_1', text: 'Menetapkan jadwal weekly check-in singkat (maksimal 45 menit).' },
      { id: 'p3_2', text: 'Mengecek ketersediaan bahan materi H-3 sebelum jadwal rilis publikasi.' },
      { id: 'p3_3', text: 'Melakukan sesi santai 1-on-1 dengan anggota yang terindikasi pasif/burnout.' },
      { id: 'p3_4', text: 'Melaporkan rekap kesiapan mingguan internal 3 divisi ke Ketua Unit (Kanit).' }
    ]
  },
  {
    id: 'phase-4',
    phaseTitle: 'Fase 4: Simulasi Hari-H & Evaluasi Unit',
    items: [
      { id: 'p4_1', text: 'Membuat rundown liputan untuk Divisi Media (momen penting yang wajib diabadikan).' },
      { id: 'p4_2', text: 'Divisi Informasi menyiagakan draft live-tweet / rilis update kilat hari-H.' },
      { id: 'p4_3', text: 'Divisi Humas mematangkan skenario antisipasi jika ada tamu/peserta komplain.' },
      { id: 'p4_4', text: 'Mengadakan sesi apresiasi singkat kepada seluruh 20+ anggota pasca kegiatan.' }
    ]
  }
];
