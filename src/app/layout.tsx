'use client';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  return (
    <html lang="es">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Vista Crítica</title>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}
      >
        <div>
          <div className="h-[50px] bg-white flex justify-around items-center px-4 shadow-md">
          <Link href="/" className={`${pathname === '/' ? 'text-emerald-400' : ''}`}>Inicio</Link>
          <Link href="/guia" className={`${pathname === '/guias' ? 'text-emerald-400' : ''}`}>Guías</Link>
          <Link href="/conocenos" className={`${pathname === '/conocenos' ? 'text-emerald-400' : ''}`}>Conócenos</Link>
          <Link href="/recursos" className={`${pathname === '/recursos' ? 'text-emerald-400' : ''}`}>Recursos</Link>

          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
