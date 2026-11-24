import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs">Next.js · TypeScript · Tailwind CSS · Framer Motion</p>
      </div>
    </footer>
  );
}
