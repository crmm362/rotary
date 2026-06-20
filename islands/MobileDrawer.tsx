import { useState } from "preact/hooks";

const navLinks = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/members", label: "Members", icon: "👥" },
  { href: "/events", label: "Events", icon: "📅" },
  { href: "/event-flow", label: "Programme", icon: "🗒️" },
  { href: "/gallery", label: "Gallery", icon: "📸" },
  { href: "/contact", label: "Contact", icon: "✉️" },
];

const RotaryWheel = () => (
  <img src="/logo/rotary-emblem.png" alt="Rotary" width="40" height="40" />
);

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);
  const toggle = () => setOpen((v) => !v);

  return (
    <>
      {/* Hamburger button */}
      <button
        class="btn btn-ghost lg:hidden p-2"
        aria-label="Open menu"
        onClick={toggle}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>

      {/* Backdrop */}
      <div
        class={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={close}
      />

      {/* Slide-in drawer */}
      <div
        class={`fixed top-0 left-0 h-screen w-72 bg-white z-[110] shadow-2xl flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div class="flex items-center justify-between px-5 py-4 bg-rotary-blue">
          <div class="flex items-center gap-3">
            <RotaryWheel />
            <div class="flex flex-col leading-tight">
              <span class="text-white font-bold text-sm">Rotary Club</span>
              <span class="text-blue-200 text-xs uppercase tracking-wider">Perinthalmanna</span>
            </div>
          </div>
          <button
            class="btn btn-ghost btn-sm btn-circle text-white hover:bg-white/20"
            onClick={close}
            aria-label="Close menu"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Motto strip */}
        <div class="bg-rotary-gold/10 border-b border-rotary-gold/20 px-5 py-2">
          <p class="text-xs text-rotary-gold font-semibold italic tracking-wide">
            "Service Above Self"
          </p>
        </div>

        {/* Nav links */}
        <nav class="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              class="flex items-center gap-4 px-4 py-3.5 rounded-xl text-gray-700 font-semibold hover:bg-primary/10 hover:text-primary transition-all group"
            >
              <span class="text-xl w-8 text-center">{link.icon}</span>
              <span class="flex-1">{link.label}</span>
              <svg
                class="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>

        {/* Drawer footer */}
        <div class="px-5 py-5 border-t border-base-200">
          <a
            href="/contact"
            onClick={close}
            class="btn btn-primary w-full rounded-full font-bold"
          >
            Join Our Club
          </a>
          <p class="text-center text-xs text-gray-400 mt-3">
            Est. 1988 · District 3204
          </p>
        </div>
      </div>
    </>
  );
}
