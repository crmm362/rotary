export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-neutral text-neutral-content mt-16">
      <div class="footer footer-center p-8 max-w-5xl mx-auto">
        <div class="flex flex-col items-center gap-3">
          <img
            src="/logo/rotary-wordmark.png"
            alt="Rotary Club of Perinthalmanna"
            class="h-16 w-auto"
          />
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
            Rotary Club of Perinthalmanna · Est. 1988 · District 3204 · Club ID
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
