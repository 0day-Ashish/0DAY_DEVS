"use client";

import { useRef } from "react";
import Image from "next/image";
import useLenis from "../lib/useLenis";

export default function RegistrationPage() {
  useLenis({ lerp: 0.07 });
  const containerRef = useRef(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const audio = new Audio("/sound.mp3");
    audio.play();
  };

  const formFields = [
    { label: "Name", type: "text" },
    { label: "Whatsapp No.", type: "text" },
    { label: "Email ID", type: "email" },
    { label: "Discord UserID", type: "text" },
    { label: "Github Profile Link", type: "text" },
  ];

  return (
    <div
      ref={containerRef}
      className="flex flex-col min-h-screen w-full overflow-x-hidden"
      style={{
        backgroundImage: "url('/bg-registration.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content */}
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="p-8 w-full max-w-md flex flex-col gap-6 minecraft-font"
        >
          <h2
            className="text-2xl font-bold text-[#222] text-center mb-2"
            style={{ fontFamily: "monospace" }}
          >
            Registration
          </h2>

          {formFields.map((field) => (
            <label
              key={field.label}
              className="flex flex-col text-gray-200 font-semibold"
              style={{ fontFamily: "monospace" }}
            >
              {field.label} <span className="text-red-500">*</span>
              <input
                type={field.type}
                required
                className="mt-1 px-3 py-2 rounded border-2 text-black border-[#3e5222] bg-[#e0e0e0]"
              />
            </label>
          ))}

          <button
            type="submit"
            className="flex items-center justify-center mt-1"
            style={{ background: "none", border: "none", padding: 0 }}
            onClick={() => {
            const audio = new Audio('/sound.mp3');
            audio.play();
          }}
          >
            <Image
              src="/submit-bt.png"
              alt="Submit"
              width={180}
              height={60}
              className="hover:scale-105 transition-transform"
              priority
            />
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer
        className="w-full text-center py-4 text-sm text-gray-200 mt-auto"
        style={{ fontFamily: "monospace" }}
      >
        Developed w <span className="text-red-500">❤️</span> by Team 0DAY
      </footer>
    </div>
  );
}
