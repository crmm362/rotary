export default function Navbar() {
  return (
    <div class="navbar bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-base-200">
      <div class="navbar-start">
        <div class="dropdown">
          <div tabIndex={0} role="button" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg border border-base-200"
          >
            <li><a href="/members" class="font-medium">Members</a></li>
            <li><a href="/events" class="font-medium">Events</a></li>
            <li><a href="/gallery" class="font-medium">Gallery</a></li>
            <li><a href="/contact" class="font-medium">Contact</a></li>
          </ul>
        </div>
        <a href="/" class="flex items-center gap-3 ml-1">
          <svg
            width="36"
            height="36"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="flex-shrink-0"
          >
            <circle cx="50" cy="50" r="48" fill="#17458F" />
            <circle cx="50" cy="50" r="14" fill="#F7A800" />
            <circle cx="50" cy="50" r="8" fill="#17458F" />
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 50 + 15 * Math.sin(rad);
              const y1 = 50 - 15 * Math.cos(rad);
              const x2 = 50 + 38 * Math.sin(rad);
              const y2 = 50 - 38 * Math.cos(rad);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#F7A800"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              );
            })}
            <circle cx="50" cy="50" r="47" fill="none" stroke="#F7A800" strokeWidth="3.5" />
          </svg>
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
