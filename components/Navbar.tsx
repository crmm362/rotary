import MobileDrawer from "../islands/MobileDrawer.tsx";

export default function Navbar() {
  return (
    <div class="navbar bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-base-200">
      <div class="navbar-start">
        <MobileDrawer />
        <a href="/" class="flex items-center gap-3 ml-1">
          <img
            src="/logo/rotary-emblem.png"
            alt="Rotary"
            width="40"
            height="40"
            class="flex-shrink-0"
          />
          <div class="flex flex-col leading-tight">
            <span class="text-base font-bold text-rotary-blue">
              Rotary Club
            </span>
            <span class="text-xs font-medium text-gray-500 tracking-wide uppercase">
              Perinthalmanna
            </span>
          </div>
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 gap-1">
          <li>
            <a
              href="/members"
              class="font-medium text-gray-700 hover:text-rotary-blue hover:bg-base-200 rounded-lg transition-colors"
            >
              Members
            </a>
          </li>
          <li>
            <a
              href="/events"
              class="font-medium text-gray-700 hover:text-rotary-blue hover:bg-base-200 rounded-lg transition-colors"
            >
              Events
            </a>
          </li>
          <li>
            <a
              href="/event-flow"
              class="font-medium text-gray-700 hover:text-rotary-blue hover:bg-base-200 rounded-lg transition-colors"
            >
              Programme
            </a>
          </li>
          <li>
            <a
              href="/gallery"
              class="font-medium text-gray-700 hover:text-rotary-blue hover:bg-base-200 rounded-lg transition-colors"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="/contact"
              class="font-medium text-gray-700 hover:text-rotary-blue hover:bg-base-200 rounded-lg transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <a href="/contact" class="btn btn-primary btn-sm rounded-full px-5 font-semibold">
          Join Us
        </a>
      </div>
    </div>
  );
}
