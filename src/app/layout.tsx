'use client';
import Image from 'next/image';
import './globals.css';
import { Inter } from 'next/font/google';
import serveImage from '../../public/serve.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import bg from '../../public/bg4.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const homeStyle = pathname === '/' ? { color: '#8c52ff' } : {};
  const servicesStyle = pathname === '/services' ? { color: '#8c52ff' } : {};
  const galleryStyle = pathname === '/gallery' ? { color: '#8c52ff' } : {};
  const contactStyle = pathname === '/contact' ? { color: '#8c52ff' } : {};

  return (
    <html lang="en">
      <body id={pathname?.slice(1)} className={inter.className}>
        <div className="w-full h-16 md:h-20 bg-black/70" id="nav">
          <div className="flex justify-between items-center w-full h-full px-2">
            <div className="w-full flex items-center">
              <div className="flex flex-row justify-normal w-[125px] md:w-[150px] lg:w-[175px] lg:ml-10">
                <Image src={serveImage} alt="Serve Logo" className="w-full" />
              </div>
              <p className="text-xs ml-5 lg:text-lg">
                Serving to build your brand
              </p>
            </div>
            <div>
              <ul className="hidden md:flex navList">
                <Link href="/" className="mx-5">
                  <li
                    className="py-[5px] md:text-xl lg:text-xl navItems"
                    style={homeStyle}
                  >
                    Home
                  </li>
                </Link>
                <Link href="/services#nav" className="mx-5">
                  <li
                    className="py-[5px] md:text-xl lg:text-xl navItems"
                    style={servicesStyle}
                  >
                    Services
                  </li>
                </Link>
                <Link href="/gallery#nav" className="mx-5">
                  <li
                    className="py-[5px] md:text-xl lg:text-xl navItems"
                    style={galleryStyle}
                  >
                    Gallery
                  </li>
                </Link>
                <Link href="/contact#nav" className="mx-5">
                  <li
                    className="py-[5px] flex-nowrap md:text-xl lg:text-xl navItems"
                    style={contactStyle}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
              <div
                onClick={handleNav}
                className="text-white mr-2 md:hidden rounded-full p-3 cursor-pointer hover:bg-black/10 active:scale-95 ease-in duration-100"
              >
                <AiOutlineMenu size={30} />
              </div>
            </div>
          </div>
          <div
            className={
              nav
                ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[50]'
                : ''
            }
          >
            <div
              className={
                nav
                  ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#000000] p-8 ease-in duration-500'
                  : 'fixed left-[-100%] top-0 p-8 ease-in duration-500 h-screen'
              }
            >
              <div>
                <div className="flex w-full items-center justify-between">
                  <Link href="/">
                    <Image
                      onClick={() => setNav(false)}
                      src={serveImage}
                      alt="/"
                      width={125}
                    />
                  </Link>
                  <div
                    onClick={handleNav}
                    className="rounded-full p-3 cursor-pointer text-white -mr-[10px]"
                  >
                    <AiOutlineClose />
                  </div>
                </div>
                <div className="border-b border-white my-4">
                  <p className="w-full md:w-[90%] py-4 text-xs">
                    Serving to build your brand
                  </p>
                </div>
              </div>
              <div className="py-4 flex flex-col">
                <ul className="uppercase navList">
                  <Link href="/">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Home
                    </li>
                  </Link>
                  <Link href="/services#nav">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Services
                    </li>
                  </Link>
                  <Link href="/gallery#nav">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Gallery
                    </li>
                  </Link>
                  <Link href="/contact#nav">
                    <li onClick={() => setNav(false)} className="py-4 text-sm">
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
            <div
              onClick={() => setNav(false)}
              className={
                nav
                  ? 'md:hidden fixed right-0 h-screen w-[25%] sm:w-[40%] md:w-[55%]'
                  : ''
              }
            />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
