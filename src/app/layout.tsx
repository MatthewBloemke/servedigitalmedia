'use client';
import Image from 'next/image';
import './globals.css';
import { Roboto } from 'next/font/google';
import serveImage from '../../public/ServeWhite.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Providers from '@/components/Providers';
import { Button } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const roboto = Roboto({ subsets: ['latin'], weight: '500' });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);
  const [hash, setHash] = useState('');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash || '');
      const updateHash = () => setHash(window.location.hash || '');
      window.addEventListener('hashchange', updateHash);
      window.addEventListener('popstate', updateHash);

      return () => {
        window.removeEventListener('hashchange', updateHash);
        window.removeEventListener('popstate', updateHash);
      };
    }
  }, []);

  const handleNav = () => setNav(!nav);

  const homeColor = pathname === '/' && !hash.length ? 'primary' : 'info';
  const servicesColor =
    pathname === '/' && hash === '#servicesPage' ? 'primary' : 'info';
  const galleryColor = pathname === '/gallery' ? 'primary' : 'info';
  const contactColor = pathname === '/contact' ? 'primary' : 'info';

  const navbarClassName = isScrolled
    ? 'bg-[rgba(20,20,20,0.55)] backdrop-blur-xl border-b border-white/10'
    : '';

  return (
    <html lang="en">
      <head>
        <title>Serve Digital Media</title>
        <meta property="og:title" content="Serve Digital Media" />
        <meta property="og:image" content="https://i.imgur.com/R6nYXVo.png" />
        <meta property="og:url" content="https://servedm.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Serving to build your brand" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>

      <body id={pathname?.slice(1)} className={roboto.className}>
        <Providers>
          {/* ─────────────────────────────
              NAVBAR (fixed top)

          ───────────────────────────── */}
          <div
            className={
              'w-full h-16 md:h-[72px] fixed z-[40] ' + navbarClassName
            }
          >
            <div className="flex justify-between items-center w-full h-full px-2">
              <div className="w-full flex items-center">
                <div className="flex flex-row justify-normal w-[125px] md:w-[150px] lg:w-[175px] lg:ml-10">
                  <Link href="/">
                    <Image
                      src={serveImage}
                      alt="Serve Logo"
                      className="w-full"
                    />
                  </Link>
                </div>
              </div>

              {/* Desktop Nav */}
              <div>
                <ul className="hidden md:flex navList">
                  <div className="mx-2">
                    <Button size="large" href="/" color={homeColor}>
                      Home
                    </Button>
                  </div>
                  <div className="mx-2">
                    <Button
                      size="large"
                      href="/#servicesPage"
                      color={servicesColor}
                    >
                      Services
                    </Button>
                  </div>
                  <div className="mx-2">
                    <Button size="large" href="/gallery" color={galleryColor}>
                      Gallery
                    </Button>
                  </div>
                  <div className="mx-2">
                    <Button size="large" href="/contact" color={contactColor}>
                      Contact
                    </Button>
                  </div>
                </ul>

                {/* Mobile Menu Button */}
                <div
                  onClick={handleNav}
                  className="text-white mr-2 md:hidden rounded-full p-3 cursor-pointer hover:bg-black/10 active:scale-95 ease-in duration-100"
                >
                  <AiOutlineMenu size={30} />
                </div>
              </div>
            </div>
          </div>

          {/* ─────────────────────────────
              MOBILE OVERLAY (OUTSIDE NAVBAR!)
          ───────────────────────────── */}
          <div
            className={
              nav
                ? 'fixed inset-0 bg-black/60 backdrop-blur-sm z-[50] transition-opacity'
                : 'pointer-events-none opacity-0'
            }
            onClick={() => setNav(false)}
          />

          {/* ─────────────────────────────
              MOBILE SLIDE-IN PANEL
          ───────────────────────────── */}
          <div
            className={
              nav
                ? 'fixed left-0 top-0 h-full w-[78%] sm:w-[60%] md:w-[45%] bg-[rgba(20,20,20,0.55)] backdrop-blur-xl border-r border-white/10 p-8 z-[60] transition-all duration-300'
                : 'fixed left-[-100%] top-0 h-full w-[78%] p-8 transition-all duration-300'
            }
          >
            {/* HEADER */}
            <div className="flex w-full items-center justify-between">
              <Link href="/" onClick={() => setNav(false)}>
                <Image src={serveImage} alt="Serve Logo" width={125} />
              </Link>

              <button
                onClick={handleNav}
                className="text-white p-2 rounded-full hover:bg-white/10 transition"
              >
                <AiOutlineClose size={22} />
              </button>
            </div>

            {/* TAGLINE */}
            <div className="mt-6">
              <p className="text-sm text-gray-200">
                Serving to build your brand
              </p>
              <div className="w-20 h-[3px] bg-gradient-to-r from-[#8c52ff] to-[#fb5d00] mt-2 rounded-full"></div>
            </div>

            {/* NAV LINKS */}
            <nav className="mt-8">
              <ul className="space-y-3 text-gray-200">
                <li>
                  <Link
                    href="/"
                    className="block py-3 text-lg hover:text-white hover:translate-x-1 transition"
                    onClick={() => setNav(false)}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#servicesPage"
                    className="block py-3 text-lg hover:text-white hover:translate-x-1 transition"
                    onClick={() => setNav(false)}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="block py-3 text-lg hover:text-white hover:translate-x-1 transition"
                    onClick={() => setNav(false)}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="block py-3 text-lg hover:text-white hover:translate-x-1 transition"
                    onClick={() => setNav(false)}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Page Content */}
          <div>{children}</div>

          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
