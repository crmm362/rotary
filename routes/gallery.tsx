import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

type GalleryItem = {
  label: string;
  year: string;
  category: string;
  color: string;
  icon: string;
};

const galleryItems: GalleryItem[] = [
  { label: "Annual Installation Ceremony", year: "2025", category: "Club Event", color: "from-blue-700 to-blue-900", icon: "🎖️" },
  { label: "Free Medical Camp", year: "2025", category: "Service", color: "from-emerald-600 to-emerald-800", icon: "🏥" },
  { label: "Blood Donation Drive", year: "2026", category: "Service", color: "from-red-600 to-red-800", icon: "🩸" },
  { label: "Youth Fellowship Meet", year: "2025", category: "Youth", color: "from-violet-600 to-violet-800", icon: "🎓" },
  { label: "Polio Awareness March", year: "2025", category: "Service", color: "from-orange-500 to-orange-700", icon: "💉" },
  { label: "Club Weekly Meeting", year: "2026", category: "Meeting", color: "from-rotary-blue to-rotary-blue-dark", icon: "🤝" },
  { label: "Vocational Excellence Awards", year: "2026", category: "Awards", color: "from-yellow-500 to-amber-700", icon: "🏆" },
  { label: "Interact Club Launch", year: "2026", category: "Youth", color: "from-teal-600 to-teal-800", icon: "⭐" },
  { label: "Tree Plantation Drive", year: "2025", category: "Environment", color: "from-green-600 to-green-800", icon: "🌳" },
  { label: "Scholarship Distribution", year: "2025", category: "Education", color: "from-indigo-600 to-indigo-800", icon: "📚" },
  { label: "Dental Health Camp", year: "2026", category: "Service", color: "from-cyan-600 to-cyan-800", icon: "🦷" },
  { label: "Annual Dinner & Fellowship", year: "2025", category: "Club Event", color: "from-pink-600 to-rose-800", icon: "🍽️" },
];

const categories = ["All", "Service", "Club Event", "Youth", "Awards", "Meeting", "Environment", "Education"];

const CameraIcon = () => (
  <svg class="w-8 h-8 text-white/40" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
    <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
  </svg>
);

export default function GalleryPage() {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section class="hero-gradient py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="badge badge-secondary badge-lg font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">
            Moments & Memories
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Photo Gallery
          </h1>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse into the service, fellowship, and community spirit that defines the Rotary Club of Perinthalmanna.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section class="bg-base-100 border-b border-base-200 py-5 sticky top-16 z-40">
        <div class="max-w-6xl mx-auto px-6">
          <div class="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <span
                key={cat}
                class={`badge badge-lg font-semibold px-4 py-3 cursor-pointer flex-shrink-0 ${
                  cat === "All"
                    ? "badge-primary text-white"
                    : "badge-ghost hover:badge-primary hover:text-white transition-colors"
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section class="py-14 bg-base-200">
        <div class="max-w-6xl mx-auto px-6">
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item) => (
              <div
                key={item.label}
                class={`relative group rounded-2xl overflow-hidden bg-gradient-to-br ${item.color} aspect-square shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer`}
              >
                {/* Placeholder content */}
                <div class="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                  <span class="text-4xl">{item.icon}</span>
                  <CameraIcon />
                  <span class="text-white/50 text-xs font-medium text-center">Photo coming soon</span>
                </div>

                {/* Hover overlay */}
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <span class="text-3xl mb-2">{item.icon}</span>
                  <p class="text-white font-bold text-sm leading-tight mb-1">{item.label}</p>
                  <p class="text-white/60 text-xs">{item.year}</p>
                  <span class="badge badge-secondary badge-xs mt-2">{item.category}</span>
                </div>

                {/* Category badge */}
                <div class="absolute top-3 left-3">
                  <span class="badge badge-secondary badge-xs opacity-90 font-semibold">{item.category}</span>
                </div>
              </div>
            ))}

            {/* Upload placeholder */}
            <div class="relative rounded-2xl overflow-hidden bg-base-300 aspect-square border-2 border-dashed border-base-content/20 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-all group">
              <div class="w-12 h-12 rounded-full bg-base-content/10 group-hover:bg-primary/20 transition-colors flex items-center justify-center">
                <svg class="w-6 h-6 text-base-content/40 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <p class="text-base-content/40 text-xs font-medium text-center px-3 group-hover:text-primary transition-colors">
                More photos coming soon
              </p>
            </div>
          </div>

          <div class="text-center mt-10">
            <p class="text-gray-400 text-sm italic mb-4">
              * Gallery is being updated — actual event photographs will be added shortly
            </p>
          </div>
        </div>
      </section>

      {/* Upload CTA */}
      <section class="py-14 bg-base-100 border-t border-base-200">
        <div class="max-w-2xl mx-auto px-6 text-center">
          <div class="text-5xl mb-4">📸</div>
          <h2 class="text-2xl font-extrabold text-base-content mb-3">
            Have Photos to Share?
          </h2>
          <p class="text-gray-500 mb-6">
            Were you at one of our events? Send us your photos and we'll add them to the gallery.
          </p>
          <a
            href="mailto:rotary.perinthalmanna@gmail.com?subject=Gallery Photos Submission"
            class="btn btn-primary btn-lg rounded-full px-10 font-bold"
          >
            📧 Send Photos
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
