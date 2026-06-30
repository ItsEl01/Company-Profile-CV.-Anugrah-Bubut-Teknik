import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CV. Anugrah Bubut Teknik',
  description: 'Jasa Pembuatan Spare Part Industri dan Teknik Bubut Terpercaya',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
      {/* Bagian ini akan otomatis terisi sesuai halaman yang dibuka */}
      <main className="min-h-screen max-w-6xl mx-auto p-4">
          {children}
      </main>
      </body>
    </html>
  )
}
