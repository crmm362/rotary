// Official club social profiles. Update the handles here if they ever change.
const FACEBOOK_URL = "https://www.facebook.com/rotary.perinthalmanna";
const INSTAGRAM_URL = "https://www.instagram.com/rotary.perinthalmanna";

function FacebookIcon({ class: c = "w-5 h-5" }: { class?: string }) {
  return (
    <svg class={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8v8.44C19.61 23.08 24 18.09 24 12.07z" />
    </svg>
  );
}

function InstagramIcon({ class: c = "w-5 h-5" }: { class?: string }) {
  return (
    <svg class={c} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13-.67-.66-1.34-1.07-2.13-1.38-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
      <path d="M12 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84M12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4" />
      <circle cx="18.41" cy="5.59" r="1.44" />
    </svg>
  );
}

type Props = {
  /** "buttons" = labelled pills (light cards); "icons" = circular icons (footer). */
  variant?: "buttons" | "icons";
};

export default function SocialLinks({ variant = "buttons" }: Props) {
  if (variant === "icons") {
    return (
      <div class="flex items-center gap-3">
        <a
          href={FACEBOOK_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-rotary-blue transition-colors"
        >
          <FacebookIcon />
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
          class="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-secondary hover:text-rotary-blue transition-colors"
        >
          <InstagramIcon />
        </a>
      </div>
    );
  }

  return (
    <div class="flex flex-wrap gap-3">
      <a
        href={FACEBOOK_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-sm rounded-xl gap-2 border-base-200 bg-base-100 hover:bg-rotary-blue hover:text-white hover:border-rotary-blue"
      >
        <FacebookIcon class="w-4 h-4" /> Facebook
      </a>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-sm rounded-xl gap-2 border-base-200 bg-base-100 hover:bg-rotary-blue hover:text-white hover:border-rotary-blue"
      >
        <InstagramIcon class="w-4 h-4" /> Instagram
      </a>
    </div>
  );
}
