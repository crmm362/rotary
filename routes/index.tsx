import { type PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
const RotaryWheelLarge = () => (
  <img
    src="/logo/rotary-emblem.png"
    alt="Rotary International"
    class="w-48 h-48 md:w-64 md:h-64 drop-shadow-2xl"
  />
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
  {
    icon: "🤝",
    title: "Fellowship",
    desc: "Building lasting bonds across communities and professions.",
  },
  {
    icon: "🌍",
    title: "Service",
    desc: "Dedicated to humanitarian action locally and globally.",
  },
  {
    icon: "🎓",
    title: "Integrity",
    desc: "Upholding ethical standards in personal and professional life.",
  },
  {
    icon: "💡",
    title: "Leadership",
    desc: "Inspiring change through empowered, visionary leadership.",
  },
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

const megaProjects = [
  {
    icon: "🏥",
    year: "1988",
    tag: "Our First Project",
    title: "Mortuary Building — Taluk Government Hospital",
    desc:
      "The club's very first initiative, undertaken in our charter year. We constructed a dedicated mortuary facility at the Perinthalmanna Taluk Government Hospital, filling a long-standing gap in public health infrastructure that continues to serve the entire taluk today.",
    stat: "Serving the taluk since 1988",
  },
  {
    icon: "💉",
    year: "Every Year",
    tag: "End Polio Now",
    title: "Pulse Polio Immunization",
    desc:
      "Year after year, our members mobilise for the national Pulse Polio drive, helping immunise around 100 children under the age of five across Perinthalmanna Taluk — part of Rotary's global commitment to eradicate polio for good.",
    stat: "~100 children under 5 immunised annually",
  },
  {
    icon: "🎪",
    year: "1992",
    tag: "Community Landmark",
    title: "National-Level Exhibition & Cultural Fest",
    desc:
      "A landmark 30-day national exhibition, trade fair and cultural festival — the first and largest event of its kind in the Malappuram district at the time. It united exhibitors, artists and the community on an unprecedented scale and firmly established the club's presence in the region.",
    stat: "30 days · District's first major trade fair",
  },
  {
    icon: "🏅",
    year: "1998",
    tag: "Award-Winning · Matching Grant",
    title: "Polio Corrective Surgery Programme",
    desc:
      "In partnership with a Rotary district in the USA and funded through a Rotary Foundation Matching Grant, the club organised corrective surgeries for polio-affected children — restoring mobility and independence to 145 young lives. The project earned the Rotary International President's Special Recognition Award.",
    stat: "145 children · RI President's Special Recognition Award",
  },
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
            <div class="anim-fade-up anim-d1 badge badge-secondary badge-lg font-semibold text-xs tracking-widest uppercase mb-5 px-4 py-3 block sm:inline-flex w-fit mx-auto md:mx-0">
              Est. 1988 · District 3204 · Club ID 25399
            </div>
            <h1 class="anim-fade-up anim-d2 text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Rotary Club of
              <br />
              <span class="text-gradient">Perinthalmanna</span>
            </h1>
            <p class="anim-fade-up anim-d3 text-lg md:text-xl text-blue-100 font-light max-w-xl mb-8 leading-relaxed">
              Over three decades of unwavering commitment to humanity. We are
              {" "}
              <span class="text-secondary font-semibold">People of Action</span>
              {" "}
              — transforming lives through service, fellowship, and integrity.
            </p>
            <div class="anim-fade-up anim-d4 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#about"
                class="btn btn-secondary btn-lg rounded-full font-bold px-8 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Discover Our Mission
              </a>
              <a
                href="#contact"
                class="btn btn-outline btn-lg rounded-full font-bold px-8 text-white border-white/40 hover:bg-white/10 hover:border-white/60 hover:text-white"
              >
                Join Our Club
              </a>
            </div>
          </div>

          {/* Wheel */}
          <div class="anim-pop anim-d2 flex-shrink-0 flex items-center justify-center relative">
            <div class="absolute w-64 h-64 md:w-80 md:h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none">
            </div>
            <div class="float glow relative">
              <RotaryWheelLarge />
            </div>
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
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">
                Chartered
              </div>
              <div class="stat-value text-primary text-4xl font-black">
                1988
              </div>
              <div class="stat-desc text-gray-500">23 May 1988</div>
            </div>
            <div class="stat py-8 text-center">
              <div class="stat-figure text-secondary hidden sm:flex">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                </svg>
              </div>
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">
                Members
              </div>
              <div class="stat-value text-secondary text-4xl font-black">
                40+
              </div>
              <div class="stat-desc text-gray-500">Active Rotarians</div>
            </div>
            <div class="stat py-8 text-center">
              <div class="stat-figure text-primary hidden sm:flex">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">
                Projects
              </div>
              <div class="stat-value text-primary text-4xl font-black">
                500+
              </div>
              <div class="stat-desc text-gray-500">
                Community projects completed
              </div>
            </div>
            <div class="stat py-8 text-center">
              <div class="stat-figure text-secondary hidden sm:flex">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div class="stat-title text-sm font-medium text-gray-500 uppercase tracking-wide">
                Lives Touched
              </div>
              <div class="stat-value text-secondary text-4xl font-black">
                10K+
              </div>
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
              A Legacy of <span class="text-primary">Service Above Self</span>
            </h2>
            <p class="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Chartered on 23 May 1988, the Rotary Club of Perinthalmanna has been a
              cornerstone of civil society in northern Kerala, uniting
              professionals and community leaders in the cause of humanitarian
              service.
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
                  <h3 class="card-title text-xl font-bold text-base-content mb-1">
                    {v.title}
                  </h3>
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
                What We <span class="text-primary">Stand For</span>
              </h2>
              <p class="text-gray-500 text-lg leading-relaxed mb-8">
                Rotary International identifies seven areas of focus where
                lasting change is possible. Our club actively runs projects
                across all of them, right here in Perinthalmanna and the wider
                Malappuram district.
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
                    Our annual free medical camps have served thousands of
                    underprivileged families across the Malappuram district,
                    providing diagnostics, medicines, and specialist
                    consultations at no cost.
                  </p>
                  <div class="flex flex-wrap gap-2">
                    {[
                      "Medical Camps",
                      "Eye Care",
                      "Dental Clinics",
                      "Blood Drives",
                    ].map((tag) => (
                      <span
                        key={tag}
                        class="badge badge-secondary badge-outline text-white border-white/30 text-xs py-2 px-3"
                      >
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
                  <p class="text-secondary font-semibold text-sm mt-2">
                    — Rotary International
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEGA / MILESTONE PROJECTS ── */}
      <section id="mega-projects" class="py-20 bg-base-200">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <div class="badge badge-secondary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
              Mega Projects
            </div>
            <h2 class="text-3xl md:text-4xl font-extrabold text-base-content mb-4">
              Milestone <span class="text-primary">Projects</span>
            </h2>
            <p class="text-gray-500 text-lg leading-relaxed">
              Over three decades of service, a few landmark initiatives stand
              out — projects that transformed lives and defined who we are.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {megaProjects.map((p) => (
              <div
                key={p.title}
                class="card bg-base-100 border border-base-200 shadow-sm card-hover"
              >
                <div class="card-body p-7">
                  <div class="flex items-center gap-4 mb-3">
                    <div class="text-3xl w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary/15 flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <span class="badge badge-primary text-xs font-bold">
                        {p.year}
                      </span>
                      <p class="text-xs text-gray-400 mt-1 font-medium uppercase tracking-wide">
                        {p.tag}
                      </p>
                    </div>
                  </div>
                  <h3 class="text-lg font-extrabold text-base-content mb-2">
                    {p.title}
                  </h3>
                  <p class="text-gray-600 text-sm leading-relaxed mb-4">
                    {p.desc}
                  </p>
                  <div class="mt-auto pt-3 border-t border-base-200">
                    <span class="flex items-center gap-2 text-sm font-semibold text-secondary">
                      <span class="text-base">⭐</span> {p.stat}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS PREVIEW ── */}
      <section class="py-20 bg-base-100">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
                What's On
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-base-content">
                Upcoming <span class="text-primary">Events</span>
              </h2>
            </div>
            <a
              href="/events"
              class="btn btn-outline btn-primary btn-sm rounded-full px-6 flex-shrink-0"
            >
              View All Events →
            </a>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Club Assembly */}
            <div class="card bg-base-100 border border-base-200 shadow-sm card-hover">
              <div class="card-body p-7">
                <div class="text-3xl mb-3">🏛️</div>
                <span class="badge badge-primary badge-outline text-xs font-semibold mb-2">
                  Club Meeting
                </span>
                <h3 class="text-lg font-bold text-base-content mb-1">
                  Club Assembly
                </h3>
                <p class="text-sm text-gray-400 mb-2">📅 April 26, 2026</p>
                <p class="text-gray-600 text-sm leading-relaxed">
                  Quarterly assembly to review projects and plan the upcoming
                  quarter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST BULLETIN ── */}
      <section class="py-20 bg-base-200">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <div class="badge badge-secondary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
                Club News
              </div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-base-content">
                Latest <span class="text-primary">Bulletin</span>
              </h2>
            </div>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                date: "April 12, 2026",
                tag: "Club Activity",
                title: "Club Assembly — April 2026",
                excerpt:
                  "The April club assembly reviewed the progress of all ongoing service projects and approved budgets for the upcoming medical camp.",
                icon: "📋",
                tagClass: "badge-primary",
              },
              {
                date: "March 8, 2026",
                tag: "Youth Service",
                title: "Interact Club Inaugurated at MES HSS",
                excerpt:
                  "A new Interact Club was successfully launched at MES Higher Secondary School, extending Rotary's values of service to young students.",
                icon: "🎓",
                tagClass: "badge-success",
              },
              {
                date: "January 18, 2026",
                tag: "Service Project",
                title: "Blood Donation Camp — 60+ Units Collected",
                excerpt:
                  "Our annual blood donation camp in collaboration with the district blood bank was a tremendous success with strong community participation.",
                icon: "🩸",
                tagClass: "badge-error",
              },
            ].map((item) => (
              <div
                key={item.title}
                class="card bg-base-100 border border-base-200 shadow-sm card-hover"
              >
                <div class="card-body p-6">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="text-2xl">{item.icon}</span>
                    <span
                      class={`badge ${item.tagClass} badge-outline text-xs font-semibold`}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <p class="text-xs text-gray-400 mb-2">{item.date}</p>
                  <h3 class="font-bold text-base-content text-base leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p class="text-gray-500 text-sm leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        class="py-20 hero-gradient relative overflow-hidden"
      >
        <div class="absolute inset-0 opacity-10">
          <div
            class="absolute top-0 left-0 w-full h-full"
            style="background-image: radial-gradient(circle, #f7a81b 1px, transparent 1px); background-size: 40px 40px;"
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
            Join a community of professionals committed to creating positive
            change. The Rotary Club of Perinthalmanna welcomes individuals who
            share our passion for service.
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
              Meetings: Every Friday, 7 PM
            </div>
            <div class="flex items-center gap-2 text-sm">
              <span class="text-secondary text-lg">🌐</span>
              District 3204 · Club ID 25399 · Rotary International
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
