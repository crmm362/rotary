import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

type Event = {
  title: string;
  date: string;
  venue: string;
  category: string;
  description: string;
  status: "upcoming" | "tbd" | "past";
  icon: string;
  highlights?: string[];
  featured?: boolean;
  link?: string;
};

const upcomingEvents: Event[] = [
  {
    title: "Installation Ceremony 2026–27",
    date: "Saturday, June 20, 2026 · 7:00 PM",
    venue: "IMA Hall, Perinthalmanna",
    category: "Club Event",
    description:
      "Installation of Rtn PHF Kuriakose KK as President, along with his team of Office Bearers for the Rotary year 2026–27. Members, families, and well-wishers are warmly invited to join the celebration.",
    status: "upcoming",
    icon: "🎖️",
    featured: true,
    link: "/event-flow",
    highlights: ["President: Rtn PHF Kuriakose KK", "Office Bearers 2026–27", "Families welcome"],
  },
  {
    title: "Weekly Club Meeting",
    date: "Every Friday · 7:00 PM",
    venue: "Rotary Hall, Pathaikara, Perinthalmanna",
    category: "Club Meeting",
    description:
      "Our regular weekly fellowship meeting — project updates, guest talks, and planning. Members and prospective Rotarians are always welcome.",
    status: "upcoming",
    icon: "🤝",
    highlights: ["Fellowship", "Project updates", "Guest speakers"],
  },
  {
    title: "First Club Assembly — Rotary Year 2026–27",
    date: "July 2026",
    venue: "Rotary Hall, Pathaikara, Perinthalmanna",
    category: "Club Meeting",
    description:
      "The opening assembly of the new Rotary year, where the incoming board presents goals, committees, and the service calendar for 2026–27.",
    status: "upcoming",
    icon: "🏛️",
    highlights: ["Goal setting", "Committees", "Annual plan"],
  },
];

const pastEvents: Event[] = [
  {
    title: "District Governor's Official Visit",
    date: "May 8, 2026",
    venue: "IMA Hall, Perinthalmanna",
    category: "District",
    description: "The District Governor's official visit, during which the ₹6 Lakh Jubilee Junction Beautification — a flagship public image project — was inaugurated.",
    status: "past",
    icon: "🎖️",
  },
  {
    title: "Emergency Life Support & AED Training",
    date: "April 7, 2026 · World Health Day",
    venue: "Nehru Stadium, Perinthalmanna",
    category: "Health",
    description: "AED awareness and Basic Life Support training in partnership with IMA, reaching 100+ participants. Faculty: Rtn. Dr. Anand Sreeram.",
    status: "past",
    icon: "⛑️",
  },
  {
    title: "Iftar Meet",
    date: "March 8, 2026",
    venue: "Perinthalmanna",
    category: "Fellowship",
    description: "Joint prayers and breaking of fast together — a heartfelt evening fostering equality and fellowship among all members.",
    status: "past",
    icon: "🌙",
  },
  {
    title: "Rotary Kitchen League (RKPL)",
    date: "February 6, 2026",
    venue: "Perinthalmanna",
    category: "Fellowship",
    description: "A vibrant culinary fellowship competition across five teams, judged by professional cookery experts. Winners: Rotary Chef Royale.",
    status: "past",
    icon: "🍳",
  },
  {
    title: "Rotary Tour — Ooty & Kotagiri",
    date: "January 10–11, 2026",
    venue: "Ooty & Kotagiri",
    category: "Fellowship",
    description: "A two-day friendship trip with scenic sightseeing and a campfire night — strengthening bonds among members and their families.",
    status: "past",
    icon: "🏞️",
  },
  {
    title: "New Year Celebration — UDAYAM 2026",
    date: "January 2, 2026",
    venue: "Perinthalmanna",
    category: "Fellowship",
    description: "A festive new-year evening of stage shows, live music, and fireworks. Convener: Rtn. Suresh Kollathodi.",
    status: "past",
    icon: "🎆",
  },
  {
    title: "World Diabetes Day Walkathon",
    date: "November 14, 2025",
    venue: "Perinthalmanna",
    category: "Health",
    description: "Organised jointly with IMA, the walkathon drew 250+ participants from all walks of life to raise awareness on diabetes prevention.",
    status: "past",
    icon: "🚶",
  },
  {
    title: "Jubilee Round Beautification",
    date: "Inaugurated October 31, 2025",
    venue: "Jubilee Junction, Perinthalmanna",
    category: "Public Image",
    description: "A landmark ₹5 Lakh+ civic project — a granite-paved platform and a steel-cast Rotary wheel forming a symbolic gateway to the municipality.",
    status: "past",
    icon: "🛣️",
  },
  {
    title: "Resource Talk on Hormone Imbalances",
    date: "September 23, 2025",
    venue: "ISS College of Teacher Education",
    category: "Health",
    description: "Endocrinologist Rtn. Dr. Vishnu Vasudevan equipped future teachers to identify and respond to hormonal issues in students.",
    status: "past",
    icon: "🩺",
  },
  {
    title: "Onam Celebration — Onanilav",
    date: "August 31, 2025",
    venue: "Perinthalmanna",
    category: "Fellowship",
    description: "100+ Rotarians and families came together for outdoor games, a traditional Kerala Sadya, and award trophies for the winning teams.",
    status: "past",
    icon: "🌺",
  },
  {
    title: "Say No to Drugs — Youth Awareness",
    date: "August 20, 2025",
    venue: "PTM Government College, Perinthalmanna",
    category: "Youth Service",
    description: "A campaign reaching ~50 students on the harmful effects of substance abuse, led with the Excise Department's Vimukthi Mission.",
    status: "past",
    icon: "🚫",
  },
  {
    title: "Ammyum Kunjum — Maternal & Child Health",
    date: "July 27, 2025",
    venue: "Surabhi Nagar, Perinthalmanna",
    category: "Health",
    description: "A district-priority workshop on nutrition and child health led by gynaecologists and a neonatologist, reaching ~70 mothers and children.",
    status: "past",
    icon: "🤱",
  },
  {
    title: "Charity — A Home for a Family in Need",
    date: "Rotary Year 2025–26",
    venue: "Vettathoor Panchayath",
    category: "Service Project",
    description: "₹86,000 in financial aid provided to Hamza and family toward completing their home — humanitarian service, one family at a time.",
    status: "past",
    icon: "🤲",
  },
];

const categoryColors: Record<string, string> = {
  "Cultural": "badge-secondary",
  "Club Meeting": "badge-primary",
  "Service Project": "badge-accent",
  "Club Event": "badge-neutral",
  "Awards": "badge-warning",
  "Youth Service": "badge-success",
  "Health": "badge-info",
  "Fellowship": "badge-secondary",
  "Public Image": "badge-accent",
  "District": "badge-primary",
};

function UpcomingCard({ event }: { event: Event }) {
  const isFeatured = event.featured ?? event.status === "tbd";
  const cardClass = `card shadow-md border ${
    isFeatured
      ? "border-secondary/40 bg-gradient-to-br from-secondary/5 to-base-100"
      : "border-base-200 bg-base-100"
  } card-hover ${event.link ? "cursor-pointer" : ""}`;
  const Wrapper = event.link ? "a" : "div";
  return (
    <Wrapper
      href={event.link}
      class={event.link ? `block ${cardClass}` : cardClass}
    >
      <div class="card-body p-7">
        <div class="flex items-start gap-4">
          <div class={`text-4xl w-14 h-14 flex items-center justify-center rounded-2xl flex-shrink-0 ${isFeatured ? "bg-secondary/20" : "bg-primary/10"}`}>
            {event.icon}
          </div>
          <div class="flex-1">
            <div class="flex flex-wrap gap-2 mb-2">
              <span class={`badge ${categoryColors[event.category] ?? "badge-ghost"} text-xs font-semibold`}>
                {event.category}
              </span>
              {isFeatured && (
                <span class="badge badge-secondary text-xs font-bold animate-pulse">
                  ✨ Featured
                </span>
              )}
            </div>
            <h3 class="text-xl font-extrabold text-base-content mb-1">{event.title}</h3>
            <div class="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
              <span class="flex items-center gap-1">📅 {event.date}</span>
              <span class="flex items-center gap-1">📍 {event.venue}</span>
            </div>
            <p class="text-gray-600 leading-relaxed text-sm mb-4">{event.description}</p>
            {event.highlights && (
              <div class="flex flex-wrap gap-2">
                {event.highlights.map((h) => (
                  <span key={h} class="badge badge-outline badge-sm text-gray-600 gap-1">
                    ✓ {h}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        {isFeatured && (
          <div class="mt-5 pt-5 border-t border-secondary/20">
            <div class="alert bg-secondary/10 border-secondary/20 py-3">
              <span class="text-sm text-secondary font-semibold">
                {event.status === "tbd"
                  ? "🗓️ Details being finalised — stay tuned for updates!"
                  : "🎖️ You and your family are warmly invited. — Rtn Kuriakose KK, President"}
              </span>
            </div>
            {event.link && (
              <p class="mt-3 text-right text-sm font-bold text-secondary">
                View full programme →
              </p>
            )}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

function PastCard({ event }: { event: Event }) {
  return (
    <div class="flex items-start gap-4 p-5 bg-base-100 rounded-xl border border-base-200 hover:border-primary/20 transition-all">
      <div class="text-2xl w-11 h-11 flex items-center justify-center rounded-xl bg-base-200 flex-shrink-0">
        {event.icon}
      </div>
      <div class="flex-1">
        <div class="flex flex-wrap items-center gap-2 mb-1">
          <h3 class="font-bold text-base-content">{event.title}</h3>
          <span class={`badge badge-xs ${categoryColors[event.category] ?? "badge-ghost"}`}>
            {event.category}
          </span>
        </div>
        <p class="text-xs text-gray-400 mb-1">📅 {event.date} &nbsp;·&nbsp; 📍 {event.venue}</p>
        <p class="text-sm text-gray-500 leading-relaxed">{event.description}</p>
      </div>
    </div>
  );
}

export default function EventsPage() {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section class="hero-gradient py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="badge badge-secondary badge-lg font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">
            Programs & Events
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Events
          </h1>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            From service projects and fellowship dinners to cultural evenings and youth programs — every event is a step toward a better community.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section class="py-16 bg-base-200">
        <div class="max-w-5xl mx-auto px-6">
          <div class="mb-10">
            <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
              What's Coming
            </div>
            <h2 class="text-3xl font-extrabold text-base-content">
              Upcoming <span class="text-primary">Programs</span>
            </h2>
          </div>
          <div class="flex flex-col gap-5">
            {upcomingEvents.map((e) => <UpcomingCard key={e.title} event={e} />)}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section class="py-16 bg-base-100">
        <div class="max-w-5xl mx-auto px-6">
          <div class="mb-10">
            <div class="badge badge-secondary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
              Our Journey
            </div>
            <h2 class="text-3xl font-extrabold text-base-content">
              Past <span class="text-primary">Events</span>
            </h2>
          </div>
          <div class="flex flex-col gap-4">
            {pastEvents.map((e) => <PastCard key={e.title} event={e} />)}
          </div>
        </div>
      </section>

      {/* Suggest Event CTA */}
      <section class="py-14 bg-primary/5 border-t border-primary/10">
        <div class="max-w-2xl mx-auto px-6 text-center">
          <h2 class="text-2xl font-extrabold text-base-content mb-3">
            Have a Program Idea?
          </h2>
          <p class="text-gray-500 mb-6">
            We welcome suggestions for service projects, fundraisers, and fellowship events from members and the community.
          </p>
          <a href="/contact" class="btn btn-primary btn-lg rounded-full px-10 font-bold">
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
