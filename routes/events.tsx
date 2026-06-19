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
    highlights: ["President: Rtn PHF Kuriakose KK", "Office Bearers 2026–27", "Families welcome"],
  },
  {
    title: "Club Assembly",
    date: "April 26, 2026",
    venue: "Rotary Hall, Pathaikara, Perinthalmanna",
    category: "Club Meeting",
    description:
      "Quarterly club assembly to review ongoing projects, approve budgets, and plan the upcoming quarter's service activities.",
    status: "upcoming",
    icon: "🏛️",
    highlights: ["Project review", "Budget approval", "Q2 planning"],
  },
  {
    title: "Free Medical Camp",
    date: "May 3, 2026",
    venue: "Govt. Hospital Grounds, Perinthalmanna",
    category: "Service Project",
    description:
      "Annual free medical camp offering general medicine, dental, and ophthalmology consultations to underprivileged communities.",
    status: "upcoming",
    icon: "🏥",
    highlights: ["General medicine", "Dental care", "Eye screening", "Free medicines"],
  },
];

const pastEvents: Event[] = [
  {
    title: "Annual Installation Ceremony 2025–26",
    date: "July 12, 2025",
    venue: "Hotel Paramount, Perinthalmanna",
    category: "Club Event",
    description: "Installation of new club officers for the Rotary year 2025–26. Club leaders were felicitated and annual plans were announced.",
    status: "past",
    icon: "🎖️",
  },
  {
    title: "Blood Donation Camp",
    date: "January 18, 2026",
    venue: "Perinthalmanna Blood Bank",
    category: "Service Project",
    description: "Over 60 units of blood collected in collaboration with the district blood bank. Members and public participated actively.",
    status: "past",
    icon: "🩸",
  },
  {
    title: "Vocational Excellence Awards",
    date: "February 23, 2026",
    venue: "Town Hall, Perinthalmanna",
    category: "Awards",
    description: "Annual awards recognising outstanding professionals and students from the Perinthalmanna region across various vocational fields.",
    status: "past",
    icon: "🏆",
  },
  {
    title: "Interactors Inauguration",
    date: "March 8, 2026",
    venue: "MES Higher Secondary School",
    category: "Youth Service",
    description: "Launched a new Interact Club at MES HSS Perinthalmanna, extending Rotary values of service to young students.",
    status: "past",
    icon: "🎓",
  },
];

const categoryColors: Record<string, string> = {
  "Cultural": "badge-secondary",
  "Club Meeting": "badge-primary",
  "Service Project": "badge-accent",
  "Club Event": "badge-neutral",
  "Awards": "badge-warning",
  "Youth Service": "badge-success",
};

function UpcomingCard({ event }: { event: Event }) {
  const isFeatured = event.featured ?? event.status === "tbd";
  return (
    <div class={`card shadow-md border ${isFeatured ? "border-secondary/40 bg-gradient-to-br from-secondary/5 to-base-100" : "border-base-200 bg-base-100"} card-hover`}>
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
          </div>
        )}
      </div>
    </div>
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
