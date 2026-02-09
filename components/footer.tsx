import React from "react";

export default function Footer() {
  return (
    <footer className="mb-16 sm:mb-10 px-6 sm:px-4 text-center text-gray-500 dark:text-gray-400">
      <div className="max-w-[40rem] mx-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mb-6" />
        <small className="mb-2 block text-xs">
          &copy; 2026 Christofer Henrique. Todos os Direitos Reservados.
        </small>
        <p className="text-xs leading-relaxed">
          Feito com <span className="text-red-400">♥</span> usando
          React & Next.js, TypeScript, Tailwind CSS e
          Framer Motion.
        </p>
      </div>
    </footer>
  );
}
