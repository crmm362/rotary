import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

type Member = {
  name: string;
  role: string;
  profession: string;
  initials: string;
  photo: string;
  isPast?: boolean;
};

const boardMembers: Member[] = [
  {
    name: "Rtn. PHF Kuriakose KK",
    role: "President",
    profession: "Business",
    initials: "KK",
    photo: "/members/kuriakose.jpeg",
  },
  {
    name: "Rtn. Dr. Anand Sriram",
    role: "Secretary",
    profession: "Doctor",
    initials: "AS",
    photo: "/members/anand-s.jpeg",
  },
  {
    name: "Rtn. Damodar Avanoor",
    role: "Treasurer",
    profession: "Business",
    initials: "DA",
    photo: "/members/damodar-avanoor.jpeg",
  },
  {
    name: "Rtn. Dr. Kasim Kolakkadan",
    role: "Immediate Past President",
    profession: "Doctor",
    initials: "KK",
    photo: "/members/kasim-k.jpeg",
    isPast: true,
  },
  {
    name: "Rtn. Asgar S.A.",
    role: "President Elect 2027-28",
    profession: "Business",
    initials: "AS",
    photo: "/members/asgar-sa.jpeg",
  },
  {
    name: "Rtn. MPHF Sharath Namboothiri",
    role: "VP & Rotary Foundation Chair",
    profession: "Business",
    initials: "SN",
    photo: "/members/sarat-n.jpeg",
  },
];

const directors: Member[] = [
  {
    name: "MPHF Rtn. Narendradev",
    role: "Club Administration Chair",
    profession: "Rotarian",
    initials: "ND",
    photo: "/members/narendradev.jpg",
  },
  {
    name: "Rtn. MPHF Adv. Rasheed Oothakkadan",
    role: "Membership Chair",
    profession: "Advocate",
    initials: "RO",
    photo: "/members/rasheed-o.jpeg",
  },
  {
    name: "Rtn. MPHF Dr. Jayachandran",
    role: "Public Image Chair",
    profession: "Doctor",
    initials: "JA",
    photo: "/members/jayachandran-ak.jpeg",
  },
  {
    name: "Rtn. Adv. AbdulKhadar",
    role: "Service Project Chair",
    profession: "Advocate",
    initials: "AK",
    photo: "/members/abdul-khadar.jpg",
  },
  {
    name: "Rtn. Salim",
    role: "Sergeant at Arms",
    profession: "Rotarian",
    initials: "S",
    photo: "/members/salim.jpeg",
  },
  {
    name: "Rtn. Suresh Kollathodi",
    role: "Club Learning Facilitator, Club Program & Events Coordinator",
    profession: "Rotarian",
    initials: "SK",
    photo: "/members/suresh-kollathodi.jpg",
  },
  {
    name: "Rtn. Prasad V.",
    role: "Executive Secretary",
    profession: "Rotarian",
    initials: "PV",
    photo: "/members/prasad-v.jpeg",
  },
  {
    name: "Rtn. Ayoob K.P.",
    role: "Joint Secretary",
    profession: "Business",
    initials: "AK",
    photo: "/members/ayoob-kp.jpeg",
  },
];

const generalMembers: Member[] = [
  {
    name: "Balachandran MM",
    role: "Member",
    profession: "Software Engineer",
    initials: "BM",
    photo: "/members/balachandran-mm.jpg",
  },
  {
    name: "Rtn. Adv.Aboo T.P.",
    role: "Member",
    profession: "Advocate",
    initials: "AT",
    photo: "/members/aboo-tp.jpeg",
  },
  {
    name: "Rtn. Dr. Jayachandran A.K.",
    role: "Member",
    profession: "Doctor",
    initials: "JA",
    photo: "/members/jayachandran-ak.jpeg",
  },
  {
    name: "Rtn. Ayoob K.P.",
    role: "Member",
    profession: "Business",
    initials: "AK",
    photo: "/members/ayoob-kp.jpeg",
  },
  {
    name: "Rtn. Adv. Hassan A.V.",
    role: "Member",
    profession: "Advocate",
    initials: "HA",
    photo: "/members/hassan-av.jpeg",
  },
  {
    name: "Rtn. Dr. Vijay P.G.",
    role: "Member",
    profession: "Doctor",
    initials: "VP",
    photo: "/members/vijay-pg.jpeg",
  },
  {
    name: "Rtn. Liaqat Ali Khan",
    role: "Member",
    profession: "Business",
    initials: "LA",
    photo: "/members/liaqat-ali-khan.jpeg",
  },
  {
    name: "Rtn. Kuriakose",
    role: "Member",
    profession: "Business",
    initials: "K",
    photo: "/members/kuriakose.jpeg",
  },
  {
    name: "Rtn. Dr. Praveen R.",
    role: "Member",
    profession: "Doctor",
    initials: "PR",
    photo: "/members/praveen-r.jpeg",
  },
  {
    name: "Rtn. Asgar S.A.",
    role: "Member",
    profession: "Business",
    initials: "AS",
    photo: "/members/asgar-sa.jpeg",
  },
  {
    name: "Rtn. Dr. Rajesh P.",
    role: "Member",
    profession: "Doctor",
    initials: "RP",
    photo: "/members/rajesh-p.jpeg",
  },
  {
    name: "Rtn. Sarat Nambuiri",
    role: "Member",
    profession: "Business",
    initials: "SN",
    photo: "/members/sarat-n.jpeg",
  },
  {
    name: "Rtn. Abdul Azeez",
    role: "Member",
    profession: "Rotarian",
    initials: "AA",
    photo: "/members/abdul-azeez.jpeg",
  },
  {
    name: "Rtn. Dr. Anand S.",
    role: "Member",
    profession: "Doctor",
    initials: "AS",
    photo: "/members/anand-s.jpeg",
  },
  {
    name: "Rtn. Dr. Shamsudheen M.",
    role: "Member",
    profession: "Doctor",
    initials: "SM",
    photo: "/members/shamsudheen-m.jpeg",
  },
  {
    name: "Rtn. Adv. Rasheed Oothakkadan",
    role: "Member",
    profession: "Advocate",
    initials: "RO",
    photo: "/members/rasheed-o.jpeg",
  },
  {
    name: "Rtn. Prasad V.",
    role: "Member",
    profession: "Rotarian",
    initials: "PV",
    photo: "/members/prasad-v.jpeg",
  },
  {
    name: "Rtn. Damodar Avanoor",
    role: "Member",
    profession: "Business",
    initials: "DA",
    photo: "/members/damodar-avanoor.jpeg",
  },
  {
    name: "Rtn. Adv. Jiji Josesh",
    role: "Member",
    profession: "Advocate",
    initials: "JJ",
    photo: "/members/jiji-josesh.jpeg",
  },
  {
    name: "Rtn. Dr. Kasim Kolakkadan",
    role: "Member",
    profession: "Doctor",
    initials: "KK",
    photo: "/members/kasim-k.jpeg",
  },
  {
    name: "Rtn. Narendradev",
    role: "Member",
    profession: "Rotarian",
    initials: "ND",
    photo: "/members/narendradev.jpg",
  },
  {
    name: "Rtn. Suresh Kollathodi",
    role: "Member",
    profession: "Rotarian",
    initials: "SK",
    photo: "/members/suresh-kollathodi.jpg",
  },
  {
    name: "Rtn. Salim",
    role: "Member",
    profession: "Rotarian",
    initials: "S",
    photo: "/members/salim.jpeg",
  },
  {
    name: "Rtn. Biju Krishnan",
    role: "Member",
    profession: "Business",
    initials: "BK",
    photo: "/members/biju-krishnan.jpeg",
  },
  {
    name: "Rtn. Adv. AbdulKhadar",
    role: "Member",
    profession: "Advocate",
    initials: "AK",
    photo: "/members/abdul-khadar.jpg",
  },
  {
    name: "Rtn. Dr. Mohandas S",
    role: "Member",
    profession: "Doctor",
    initials: "MS",
    photo: "/members/mohandas-s.jpg",
  },
  {
    name: "Rtn. Dr. Samuel Koshi",
    role: "Member",
    profession: "Doctor",
    initials: "SK",
    photo: "/members/samuel-koshi.jpg",
  },
  {
    name: "Rtn. Dr. Dileep V",
    role: "Member",
    profession: "Doctor",
    initials: "DV",
    photo: "/members/dileep-v.jpg",
  },
  {
    name: "Rtn. Dr. Vishnu Vasudevan",
    role: "Member",
    profession: "Doctor",
    initials: "VV",
    photo: "/members/vishnu-vasudevan.jpg",
  },
  {
    name: "Rtn. Rasheed Madasseri",
    role: "Member",
    profession: "Business",
    initials: "RM",
    photo: "/members/rasheed-madasseri.jpg",
  },
  {
    name: "Rtn. Muhammed Shafi",
    role: "Member",
    profession: "Business",
    initials: "MS",
    photo: "/members/muhammed-shafi.jpg",
  },
  {
    name: "Rtn. Sarfaraz K V",
    role: "Member",
    profession: "Business",
    initials: "SK",
    photo: "/members/sarfaraz-kv.jpg",
  },
  {
    name: "Rtn. Sujesh M",
    role: "Member",
    profession: "Business",
    initials: "SM",
    photo: "/members/sujesh-m.jpg",
  },
  {
    name: "Rtn. Krishnaprasad",
    role: "Member",
    profession: "Business",
    initials: "KP",
    photo: "/members/krishnaprasad.jpg",
  },
  {
    name: "Rtn. Mekkottil Chozhi",
    role: "Member",
    profession: "Business",
    initials: "MC",
    photo: "/members/mekkottil-chozhi.jpg",
  },
  {
    name: "Rtn. Abdulla",
    role: "Member",
    profession: "Business",
    initials: "A",
    photo: "/members/abdulla.jpg",
  },
];

const avatarColors = [
  "bg-primary text-primary-content",
  "bg-secondary text-secondary-content",
  "bg-accent text-accent-content",
  "bg-rotary-blue-light text-white",
];

function Avatar({
  initials,
  photo,
  name,
  size = "lg",
  colorClass,
}: {
  initials: string;
  photo: string;
  name: string;
  size?: "sm" | "lg" | "xl";
  colorClass: string;
}) {
  const sizeClass = size === "xl" ? "w-20 h-20 text-2xl" : size === "lg" ? "w-14 h-14 text-lg" : "w-10 h-10 text-sm";
  const fallbackAvatar = <div class={`${sizeClass} ${colorClass} rounded-full flex items-center justify-center font-bold flex-shrink-0`}>{initials}</div>;

  return (
    <object
      data={photo}
      aria-label={`${name} photo`}
      class={`${sizeClass} rounded-full object-cover border-2 border-white shadow-sm bg-base-200 flex-shrink-0 overflow-hidden`}
    >
      {fallbackAvatar}
    </object>
  );
}

function BoardCard({ member, index }: { member: Member; index: number }) {
  const colorClass = index % 2 === 0 ? "bg-primary text-primary-content" : "bg-secondary text-secondary-content";
  return (
    <div class="card bg-base-100 shadow-md border border-base-200 card-hover text-center p-5 h-full">
      <div class="flex justify-center mb-4">
        <Avatar initials={member.initials} photo={member.photo} name={member.name} size="xl" colorClass={colorClass} />
      </div>
      <h3 class="font-bold text-base-content text-lg leading-tight">{member.name}</h3>
      <div class="mt-3 mb-2 inline-flex max-w-full min-h-8 items-center justify-center rounded-full border border-primary/30 px-3 py-1.5 text-xs font-semibold leading-snug text-primary whitespace-normal break-words">
        {member.role}
      </div>
      <p class="text-gray-400 text-sm leading-tight">{member.profession}</p>
    </div>
  );
}

function MemberRow({ member, index }: { member: Member; index: number }) {
  const colorClass = avatarColors[index % avatarColors.length];
  return (
    <div class="flex items-center gap-4 p-4 bg-base-100 rounded-xl border border-base-200 hover:border-primary/30 hover:shadow-sm transition-all">
      <Avatar initials={member.initials} photo={member.photo} name={member.name} size="lg" colorClass={colorClass} />
      <div class="flex-1 min-w-0">
        <p class="font-semibold text-base-content truncate">{member.name}</p>
        <p class="text-sm text-gray-500 truncate">{member.role}</p>
      </div>
      <div class="hidden sm:block">
        <span class="badge badge-ghost text-xs">{member.profession}</span>
      </div>
    </div>
  );
}

export default function MembersPage() {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section class="hero-gradient py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="badge badge-secondary badge-lg font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">Club Roster 2026-2027</div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Members</h1>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated Rotarians of Perinthalmanna — professionals committed to service, fellowship, and lasting community impact.
          </p>
        </div>
      </section>

      {/* Club Board */}
      <section class="py-16 bg-base-200">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-10">
            <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">Board of Directors</div>
            <h2 class="text-3xl font-extrabold text-base-content">
              Club Leadership <span class="text-primary">2026-2027</span>
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-6 gap-4">
            {boardMembers.map((m, i) => (
              <BoardCard key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section class="py-14 bg-base-100">
        <div class="max-w-5xl mx-auto px-6">
          <div class="mb-8">
            <div class="badge badge-secondary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">Committees</div>
            <h2 class="text-2xl font-extrabold text-base-content">Committee Chairs</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {directors.map((m, i) => (
              <MemberRow key={m.name} member={m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* General Members */}
      <section class="py-14 bg-base-200">
        <div class="max-w-5xl mx-auto px-6">
          <div class="mb-8">
            <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">Rotarians</div>
            <h2 class="text-2xl font-extrabold text-base-content">
              All Members
              <span class="ml-3 badge badge-neutral text-sm font-normal align-middle">{generalMembers.length} total</span>
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {generalMembers.map((m, i) => (
              <MemberRow key={m.name} member={m} index={i + directors.length} />
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section class="py-16 bg-primary/5 border-t border-primary/10">
        <div class="max-w-2xl mx-auto px-6 text-center">
          <h2 class="text-2xl font-extrabold text-base-content mb-3">Want to Join Our Club?</h2>
          <p class="text-gray-500 mb-6">
            We welcome professionals who share a passion for service. Rotary membership opens doors to a global community of change-makers.
          </p>
          <a href="/contact" class="btn btn-primary btn-lg rounded-full px-10 font-bold">
            Apply for Membership
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
