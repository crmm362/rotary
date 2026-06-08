export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-neutral text-neutral-content mt-16">
      <div class="footer footer-center p-8 max-w-5xl mx-auto">
        <div class="flex flex-col items-center gap-3">
          <svg
            width="44"
            height="44"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            class="opacity-80"
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
            <circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="#F7A800"
              strokeWidth="3.5"
            />
          </svg>
          <p class="text-lg font-semibold text-white">
            Rotary Club of Perinthalmanna
          </p>
          <p class="text-sm text-gray-400 italic">
            "Service Above Self"
          </p>
          <div class="flex gap-4 mt-2">
            <a
              href="#about"
              class="text-sm text-gray-400 hover:text-rotary-gold transition-colors"
            >
              About
            </a>
            <span class="text-gray-600">·</span>
            <a
              href="#projects"
              class="text-sm text-gray-400 hover:text-rotary-gold transition-colors"
            >
              Projects
            </a>
            <span class="text-gray-600">·</span>
            <a
              href="#events"
              class="text-sm text-gray-400 hover:text-rotary-gold transition-colors"
            >
              Events
            </a>
            <span class="text-gray-600">·</span>
            <a
              href="#contact"
              class="text-sm text-gray-400 hover:text-rotary-gold transition-colors"
            >
              Contact
            </a>
          </div>
          <div class="divider divider-neutral my-1 w-48"></div>
          <p class="text-xs text-gray-500">
            © {currentYear}{" "}
            Rotary Club of Perinthalmanna · Est. 1967 · District 3201 · Club ID
            25399
          </p>
          <p class="text-xs text-gray-600">
            Rotary International · People of Action
          </p>
        </div>
      </div>
    </footer>
  );
}
