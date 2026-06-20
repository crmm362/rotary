import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

type GalleryItem = {
  label: string;
  year: string;
  category: string;
  image: string;
};

const galleryItems: GalleryItem[] = [
  {
    label: "People of Action",
    year: "2026",
    category: "Public Image",
    image: "/images/image-1.jpeg",
  },
  {
    label: "We Help People",
    year: "2026",
    category: "Public Image",
    image: "/images/image-2.jpeg",
  },
  {
    label: "Service Poster",
    year: "2026",
    category: "Public Image",
    image: "/images/image-3.jpeg",
  },
  {
    label: "Rotary Poster",
    year: "2026",
    category: "Public Image",
    image: "/images/image-4.jpeg",
  },
  {
    label: "Community Service",
    year: "2026",
    category: "Service",
    image: "/images/image-5.jpeg",
  },
  {
    label: "Club Poster",
    year: "2026",
    category: "Club Event",
    image: "/images/image-6.jpeg",
  },
  {
    label: "Rotary Awareness",
    year: "2026",
    category: "Public Image",
    image: "/images/image-7.jpeg",
  },
  {
    label: "Fellowship Poster",
    year: "2026",
    category: "Meeting",
    image: "/images/image-8.jpeg",
  },
];

const categories = ["All", "Public Image", "Service", "Club Event", "Meeting"];

export default function GalleryPage() {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section class="hero-gradient py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="badge badge-secondary badge-lg font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">
            Selected Highlights
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Gallery
          </h1>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            A curated set of posters and highlights from the Rotary Club of
            Perinthalmanna. Full activity albums are shared through our social
            channels.
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
              <a
                key={item.label}
                href={item.image}
                target="_blank"
                rel="noopener noreferrer"
                class="relative group rounded-xl overflow-hidden bg-base-100 aspect-square shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-base-200"
              >
                <img
                  src={item.image}
                  alt={item.label}
                  class="w-full h-full object-cover"
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <p class="text-white font-bold text-sm leading-tight mb-1">
                    {item.label}
                  </p>
                  <p class="text-white/60 text-xs">{item.year}</p>
                  <span class="badge badge-secondary badge-xs mt-2">
                    {item.category}
                  </span>
                </div>

                {/* Category badge */}
                <div class="absolute top-3 left-3">
                  <span class="badge badge-secondary badge-xs opacity-90 font-semibold">
                    {item.category}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social CTA */}
      <section class="py-14 bg-base-100 border-t border-base-200">
        <div class="max-w-3xl mx-auto px-6 text-center">
          <div class="text-5xl mb-4">📷</div>
          <h2 class="text-2xl font-extrabold text-base-content mb-3">
            More Club Activity Photos
          </h2>
          <p class="text-gray-500 mb-7 max-w-2xl mx-auto leading-relaxed">
            To keep the website fast and focused, this page shows selected
            highlights. Large event albums and regular activity updates can be
            followed on our social media pages.
          </p>
          <div class="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.facebook.com/rotary.perinthalmanna"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-primary btn-lg rounded-full px-8 font-bold"
            >
              📘 Facebook
            </a>
            <a
              href="https://www.instagram.com/rotary.perinthalmanna"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline btn-primary btn-lg rounded-full px-8 font-bold"
            >
              📸 Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
