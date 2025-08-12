'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TextGenerateEffect } from "./components/text-generate-effect";
import useLenis from './lib/useLenis';
import TextType from './components/TextType';

const CURSOR_STYLE = { cursor: "url('/icon_resized .png'), auto" };
const WORDS = `Born to pwn, forced to sleep (sometimes), but only after we've replaced your favicon with our ASCII logo !`;

export default function Page() {
  useLenis({ lerp: 0.07 });
  const containerRef = useRef(null);

  return (
    <div
      className="overflow-x-hidden"
      style={{
        backgroundImage: "url('/oday_bg .webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        ...CURSOR_STYLE,
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center px-4 md:block">
        <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start">
          {/* Logo */}
          <div className="flex items-center justify-center md:justify-start mt-4">
            {/* Adamas icon (desktop only) */}
            <div className="hidden md:flex items-center mr-2">
              <Link href="https://www.aucse.in/">
                <Image
                  src="/adamas.png"
                  alt="Adamas"
                  width={64} 
                  height={64}
                  className="w-16 h-16"
                  style={CURSOR_STYLE}
                />
              </Link>
            </div>
            <Link href="/" className="order-2 md:order-none mx-auto md:mx-0">
              <Image
                src="/main.png"
                alt="Main"
                width={260} 
                height={100}
                className="w-40 h-auto md:static md:ml-2"
                style={CURSOR_STYLE}
              />
            </Link>
            <div className="club tracking-widest hidden md:flex items-center justify-center mr-2 md:mt-12 md:ml-4">
              <TextType
                text={["~Cy-Coders", "Dept. of CSE", "Happy coding !"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </div>

            {/* Adamas icon (mobile only) */}
            <div className="ml-2 md:hidden flex items-center">
              <Link href="https://www.aucse.in/">
                <Image
                  src="/adamas.png"
                  alt="Adamas"
                  width={48}
                  height={48}
                  className="w-10 h-10"
                  style={CURSOR_STYLE}
                />
              </Link>
            </div>
          </div>

          {/* Tagline animation (mobile only) */}
          <div className="tracking-widest md:hidden text-bold flex text-sm mt-1 text-c ml-50" style={{ fontFamily: "monospace" }}>
            <TextType
              text={["~Cy-Coders", "Dept. of CSE", "Happy coding !"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>
        </div>
        {/* Member button (desktop only) */}
        <Link
          href="/Registration_Page"
          onClick={() => {
            const audio = new Audio('/sound.mp3');
            audio.play();
          }}
          className="hidden md:block absolute top-5 right-8 w-60 h-auto transition-transform duration-300 hover:scale-110"
          style={CURSOR_STYLE}
        >
          <Image
            src="/member_bt.png"
            alt="Member"
            width={240}
            height={100}
            className="w-60 h-auto transition-transform duration-300 hover:scale-110"
            style={CURSOR_STYLE}
          />
        </Link>
      </nav>

      {/* Founders */}
      <div className="founders flex flex-col md:flex-row justify-center items-center min-h-screen space-y-8 md:space-y-0 md:space-x-8">
        {/* Ard */}
        <div className="flex flex-col items-center">
          <Link href="https://arddev.vercel.app/"
          onClick={() => {
            const audio = new Audio('/sound.mp3');
            audio.play();
          }}
          >
            <Image
              src="/ard.png"
              alt="Ard"
              width={300}
              height={300}
              className="transition-transform duration-300 hover:scale-105 
                        w-[150px] h-auto md:w-[300px] md:h-auto"
              style={CURSOR_STYLE}
            />
          </Link>
          <Image
            src="/name-ard.png"
            alt="Name Ard"
            width={200}
            height={80}
            className="mt-4 w-[120px] h-auto md:w-[200px] md:h-auto"
          />
        </div>

        {/* Zero */}
        <div className="flex flex-col items-center">
          <Link href="https://github.com/0dev1337"
          onClick={() => {
            const audio = new Audio('/sound.mp3');
            audio.play();
          }}>
            <Image
              src="/zero.png"
              alt="Zero"
              width={300}
              height={300}
              className="transition-transform duration-300 hover:scale-105 
                        w-[150px] h-auto md:w-[300px] md:h-auto"
              style={CURSOR_STYLE}
            />
          </Link>
          <Image
            src="/name-zero.png"
            alt="Name Zero"
            width={200}
            height={80}
            className="mt-4 w-[120px] h-auto md:w-[200px] md:h-auto"
          />
        </div>
      </div>
      <div className="ran-para flex justify-center items-center mt-2 pl-4 sm:pl-8 md:pl-32 text-xs sm:text-sm md:text-base w-full">
        <div style={{ maxWidth: 600, width: '100%' }}>
          <TextGenerateEffect words={WORDS} />
        </div>
      </div>
      {/* Member button (mobile only) */}
      <div className="flex md:hidden mt-8 mb-4 justify-center">
        <Link
          href="/Registration_Page"
          onClick={() => {
            const audio = new Audio('/sound.mp3');
            audio.play();
          }}
          style={CURSOR_STYLE}
        >
          <Image
            src="/member_bt.png"
            alt="Member"
            width={240}
            height={100}
            className="w-60 h-auto transition-transform duration-300 hover:scale-110"
            style={CURSOR_STYLE}
          />
        </Link>
      </div>

      {/* Footer */}
      <footer className="w-full text-center py-4 mt-8 text-sm text-gray-400" style={{ fontFamily: 'monospace' }}>
        Developed w <span className="text-red-500">❤️</span> by Team 0DAY
      </footer>
    </div>
  );
}
