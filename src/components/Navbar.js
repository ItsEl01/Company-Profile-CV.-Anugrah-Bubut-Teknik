import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-slate-800 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo / Nama CV */}
        <Link href="/" className="text-xl font-bold tracking-wider">
          CV Anugrah Bubut
        </Link>
        
        {/* Menu Links */}
        <ul className="flex gap-6 font-medium">
          <li><Link href="/" className="hover:text-amber-400 transition">Beranda</Link></li>
          <li><Link href="/layanan" className="hover:text-amber-400 transition">Layanan</Link></li>
          <li><Link href="/tentang" className="hover:text-amber-400 transition">Tentang</Link></li>
          <li><Link href="/portofolio" className="hover:text-amber-400 transition">Portofolio</Link></li>
          <li><Link href="/kontak" className="hover:text-amber-400 transition">Kontak</Link></li>
        </ul>
      </div>
    </nav>
  );
}