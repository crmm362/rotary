import { type PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

const RotaryWheelLarge = () => (
  <svg
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
    class="w-48 h-48 md:w-64 md:h-64 rotary-wheel drop-shadow-2xl"
    aria-label="Rotary Wheel"
  >
    {/* Outer ring */}
    <circle cx="100" cy="100" r="96" fill="none" stroke="#F7A800" strokeWidth="7" opacity="0.9" />
    {/* Inner hub */}
    <circle cx="100" cy="100" r="28" fill="#F7A800" opacity="0.95" />
    <circle cx="100" cy="100" r="16" fill="#17458F" />
    {/* 6 spokes */}
    {[0, 60, 120, 180, 240, 300].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const x1 = 100 + 30 * Math.sin(rad);
      const y1 = 100 - 30 * Math.cos(rad);
      const x2 = 100 + 88 * Math.sin(rad);
      const y2 = 100 - 88 * Math.cos(rad);
      return (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke="#F7A800"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.9"
        />
      );
    })}
    {/* Gear teeth on outer rim */}
    {Array.from({ length: 24 }).map((_, i) => {
      const angle = (i * 360) / 24;
      const rad = (angle * Math.PI) / 180;
      const x = 100 + 96 * Math.sin(rad);
      const y = 100 - 96 * Math.cos(rad);
      return (
        <circle key={i} cx={x} cy={y} r="5" fill="#F7A800" opacity="0.7" />
      );
    })}
  </svg>
);

const CheckIcon = () => (
  <svg
    class="w-5 h-5 text-secondary flex-shrink-0 mt-0.5"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const values = [
  { icon: "🤝", title: "Fellowship", desc: "Building lasting bonds across communities and professions." },
  { icon: "🌍", title: "Service", desc: "Dedicated to humanitarian action locally and globally." },
  { icon: "🎓", title: "Integrity", desc: "Upholding ethical standards in personal and professional life." },
  { icon: "💡", title: "Leadership", desc: "Inspiring change through empowered, visionary leadership." },
];

const focusAreas = [
  "Peace and conflict resolution",
  "Disease prevention and health",
  "Water, sanitation and hygiene",
  "Maternal and child health",
  "Basic education and literacy",
  "Community economic development",
  "Environment sustainability",
  "Supporting local initiatives",
];

export default function Home(_props: PageProps) {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section class="hero-gradient relative overflow-hidden">
        {/* decorative circles */}
        <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div class="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-white/5 pointer-events-none" />
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/3 pointer-events-none" />

        <div class="relative max-w-6xl mx-auto px-6 py-20 md:py-28 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div class="flex-1 text-center md:text-left">
            <div class="badge badge-secondary badge-lg font-semibold text-xs tracking-widest uppercase mb-5 px-4 py-3">
              Est. 1967 · District 3201
            </div>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Rotary Club of
              <br />
              <span class="text-gradient">Perinthalmanna</span>
            </h1>
            <p class="text-lg md:text-xl text-blue-100 font-light max-w-xl mb-8 leading-relaxed">
              Over five decades of unwavering commitment to humanity. We are{" "}
              <span class="text-secondary font-semibold">People of Action</span>
              {" "}— transforming lives through service, fellowship, and integrity.
            </p>
            <div class="flex flex-wrap gap-4 justify-center md:justify-start">
              <a href="#about" class="btn btn-secondary btn-lg rounded-full font-bold px-8 shadow-lg hover:shadow-xl transition-shadow">
                Discover Our Mission
              </a>
              <a href="#contact" class="btn btn-outline btn-lg rounded-full font-bold px-8 text-white border-white/40 hover:bg-white/10 hover:border-white/60 hover:text-white">
                Join Our Club
              </a>
            </div>
          </div>

          {/* Wheel */}
          <div class="flex-shrink-0 flex items-center justify-center">
            <RotaryWheelLarge />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section class="bg-white border-b border-base-200">
        <div class="max-w-5xl mx-auto px-6">
          <div class="stats stats-vertical sm:stats-horizontal w-full shadow-none divide-x divide-base-200">
            <div class="stat py-8 text-center">
              <div class="stat-figure text-primary hidden sm:flex">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">Founded</div>
              <div class="stat-value text-primary text-4xl font-black">1967</div>
              <div class="stat-desc text-gray-500">57+ years of service</div>
            </div>
            <div class="stat py-8 text-center">
              <div class="stat-figure text-secondary hidden sm:flex">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">Members</div>
              <div class="stat-value text-secondary text-4xl font-black">80+</div>
              <div class="stat-desc text-gray-500">Active Rotarians</div>
            </div>
            <div class="stat py-8 text-center">
              <div class="stat-figure text-primary hidden sm:flex">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">Projects</div>
              <div class="stat-value text-primary text-4xl font-black">500+</div>
              <div class="stat-desc text-gray-500">Community projects completed</div>
            </div>
            <div class="stat py-8 text-center">
              <div class="stat-figure text-secondary hidden sm:flex">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">Lives Touched</div>
              <div class="stat-value text-secondary text-4xl font-black">10K+</div>
              <div class="stat-desc text-gray-500">Across Kerala & beyond</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" class="py-20 bg-base-200">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-14">
            <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-4">
              Who We Are
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-base-content mb-4">
              A Legacy of{" "}
              <span class="text-primary">Service Above Self</span>
            </h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Founded in 1967, the Rotary Club of Perinthalmanna has been a cornerstone of civil society in northern Kerala,
              uniting professionals and community leaders in the cause of humanitarian service.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                class="card bg-base-100 shadow-sm border border-base-200 card-hover"
              >
                <div class="card-body p-8">
                  <div class="text-4xl mb-3">{v.icon}</div>
                  <h3 class="card-title text-xl font-bold text-base-content mb-1">{v.title}</h3>
                  <p class="text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOCUS AREAS ── */}
      <section id="projects" class="py-20 bg-base-100">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex flex-col lg:flex-row gap-12 items-start">
            {/* Left */}
            <div class="flex-1">
              <div class="badge badge-secondary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-4">
                Focus Areas
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-base-content mb-4">
                What We{" "}
                <span class="text-primary">Stand For</span>
              </h2>
              <p class="text-gray-500 text-lg leading-relaxed mb-8">
                Rotary International identifies seven areas of focus where lasting change is possible.
                Our club actively runs projects across all of them, right here in Perinthalmanna and the wider Malappuram district.
              </p>
              <ul class="space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} class="flex items-start gap-3">
                    <CheckIcon />
                    <span class="text-gray-700 font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — featured card */}
            <div class="flex-1 lg:max-w-sm w-full">
              <div class="card hero-gradient text-white shadow-2xl overflow-hidden">
                <div class="card-body p-8">
                  <div class="flex items-center gap-3 mb-4">
                    <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                      🏥
                    </div>
                    <div>
                      <h3 class="font-bold text-lg">Flagship Initiative</h3>
                      <p class="text-blue-200 text-sm">Healthcare Outreach</p>
                    </div>
                  </div>
                  <p class="text-blue-100 leading-relaxed mb-6">
                    Our annual free medical camps have served thousands of underprivileged families across the Malappuram district,
                    providing diagnostics, medicines, and specialist consultations at no cost.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    {["Medical Camps", "Eye Care", "Dental Clinics", "Blood Drives"].map((tag) => (
                      <span key={tag} class="badge badge-secondary badge-outline text-white border-white/30 text-xs py-2 px-3">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div class="px-8 pb-8">
                  <div class="divider divider-warning opacity-30 my-2"></div>
                  <div class="flex justify-between text-sm text-blue-200">
                    <span>📅 Annual since 1972</span>
                    <span>👥 5,000+ served yearly</span>
                  </div>
                </div>
              </div>

              {/* Quote card */}
              <div class="card bg-secondary/10 border border-secondary/20 mt-5 shadow-sm">
                <div class="card-body p-6">
                  <p class="text-gray-700 italic text-lg font-light leading-relaxed">
                    "The greatest gift you can give is your time and service."
                  </p>
                  <p class="text-secondary font-semibold text-sm mt-2">— Rotary International</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" class="py-20 hero-gradient relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute top-0 left-0 w-full h-full"
            style="background-image: radial-gradient(circle, #F7A800 1px, transparent 1px); background-size: 40px 40px;"
          />
        </div>
        <div class="relative max-w-4xl mx-auto px-6 text-center">
          <div class="badge badge-secondary font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">
            Become a Rotarian
          </div>
          <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-5">
            Ready to Make a Difference?
          </h2>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Join a community of professionals committed to creating positive change.
            The Rotary Club of Perinthalmanna welcomes individuals who share our passion for service.
          </p>
          <div class="flex flex-wrap gap-4 justify-center mb-10">
            <a
              href="mailto:rotary.perinthalmanna@gmail.com"
              class="btn btn-secondary btn-lg rounded-full font-bold px-10 shadow-lg"
            >
              📧 Get in Touch
            </a>
            <a
              href="https://www.rotary.org/en/get-involved/join"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-lg rounded-full font-bold px-10 text-white border-white/40 hover:bg-white/10 hover:border-white/60 hover:text-white"
            >
              Learn About Rotary
            </a>
          </div>
          <div class="flex flex-wrap justify-center gap-8 text-blue-100">
            <div class="flex items-center gap-2 text-sm">
              <span class="text-secondary text-lg">📍</span>
              Perinthalmanna, Malappuram, Kerala
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-secondary text-lg">🗓</span>
              Meetings: Every Saturday, 7:30 PM
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-secondary text-lg">🌐</span>
              District 3201 · Rotary International
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
