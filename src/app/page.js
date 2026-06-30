import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-12">
      
      {/* Hero Section */}
      <section className="text-center pt-20 pb-16 px-4 bg-slate-100 rounded-b-3xl shadow-sm">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Solusi Presisi untuk <span className="text-amber-500">Spare Part Industri</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          CV Anugrah Bubut Teknik hadir membawa transformasi digital dalam pelayanan jasa bengkel bubut dan manufaktur komponen logam berkualitas tinggi.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/layanan" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold py-3 px-6 rounded-lg transition shadow-md">
            Lihat Layanan Kami
          </Link>
          <Link href="/kontak" className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 px-6 rounded-lg transition shadow-md">
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* Nilai Jual (Keunggulan) Section */}
      <section className="px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">Mengapa Memilih Kami?</h2>
        
        {/* Grid System Tailwind yang Ringan */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Presisi Tinggi</h3>
            <p className="text-slate-600">Pengerjaan detail dengan toleransi ukuran yang sangat ketat untuk kebutuhan spesifik mesin Anda.</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Tepat Waktu</h3>
            <p className="text-slate-600">Manajemen produksi yang efisien untuk memastikan target tenggat waktu klien selalu terpenuhi.</p>
          </div>
          <div className="p-6 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition bg-white">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Material Terbaik</h3>
            <p className="text-slate-600">Hanya menggunakan bahan baku standar industri yang terjamin kekuatan dan daya tahannya.</p>
          </div>
        </div>
      </section>

    </div>
  );
}