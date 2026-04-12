import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

type Member = {
  name: string;
  role: string;
  profession: string;
  initials: string;
  isPast?: boolean;
};

const boardMembers: Member[] = [
  { name: "Dr. Suresh Kumar P.", role: "President", profession: "Physician", initials: "SK" },
  { name: "Rtn. Anil Mathew", role: "Secretary", profession: "Businessman", initials: "AM" },
  { name: "Rtn. Biju George", role: "Treasurer", profession: "Chartered Accountant", initials: "BG" },
  { name: "Rtn. Rajesh Mohan", role: "Vice President", profession: "Engineer", initials: "RM" },
  { name: "Rtn. Pradeep Nair", role: "Joint Secretary", profession: "Educator", initials: "PN" },
  { name: "Rtn. Sridhar Menon", role: "Sergeant-at-Arms", profession: "Pharmacist", initials: "SM" },
];

const directors: Member[] = [
  { name: "Rtn. Krishnamoorthy R.", role: "Director – Service Projects", profession: "Businessman", initials: "KR" },
  { name: "Rtn. Vijayan P.", role: "Director – Club Service", profession: "Govt. Officer", initials: "VP" },
  { name: "Rtn. Shajahan K.", role: "Director – Community Service", profession: "Contractor", initials: "SJ" },
  { name: "Rtn. Anwar Sadath", role: "Director – Vocational Service", profession: "Doctor", initials: "AS" },
  { name: "Rtn. Ramesan N.", role: "Director – Youth Service", profession: "Teacher", initials: "RN" },
];

const generalMembers: Member[] = [
  { name: "IPP Rtn. Sathish Babu", role: "Immediate Past President", profession: "Businessman", initials: "SB", isPast: true },
  { name: "Rtn. Sivadas K.", role: "Member", profession: "Architect", initials: "SV" },
  { name: "Rtn. Muraleedharan K.", role: "Member", profession: "Businessman", initials: "MK" },
  { name: "Rtn. Joseph Mathew", role: "Member", profession: "Retired Bank Officer", initials: "JM" },
  { name: "Rtn. Hamza P.", role: "Member", profession: "Businessman", initials: "HP" },
  { name: "Rtn. Chandran V.", role: "Member", profession: "Advocate", initials: "CV" },
  { name: "Rtn. Gopinath R.", role: "Member", profession: "Educator", initials: "GR" },
  { name: "Rtn. Rajeev Kumar", role: "Member", profession: "Engineer", initials: "RK" },
  { name: "Rtn. Arun Prasad", role: "Member", profession: "Businessman", initials: "AP" },
  { name: "Rtn. Sunil Thomas", role: "Member", profession: "Pharmacist", initials: "ST" },
  { name: "Rtn. Narayanan M.", role: "Member", profession: "Retailer", initials: "NM" },
  { name: "Rtn. Faisal K.P.", role: "Member", profession: "Businessman", initials: "FK" },
  { name: "Rtn. Dinesh Babu", role: "Member", profession: "Civil Engineer", initials: "DB" },
  { name: "Rtn. Ramachandran T.", role: "Member", profession: "Advocate", initials: "RT" },
];

const avatarColors = [
  "bg-primary text-primary-content",
  "bg-secondary text-secondary-content",
  "bg-accent text-accent-content",
  "bg-rotary-blue-light text-white",
];

function Avatar({ initials, size = "lg", colorClass }: { initials: string; size?: "sm" | "lg" | "xl"; colorClass: string }) {
  const sizeClass = size === "xl" ? "w-20 h-20 text-2xl" : size === "lg" ? "w-14 h-14 text-lg" : "w-10 h-10 text-sm";
  return (
    <div class={`${sizeClass} ${colorClass} rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
      {initials}
    </div>
  );
}

function BoardCard({ member, index }: { member: Member; index: number }) {
  const colorClass = index % 2 === 0 ? "bg-primary text-primary-content" : "bg-secondary text-secondary-content";
  return (
    <div class="card bg-base-100 shadow-md border border-base-200 card-hover text-center p-6">
      <div class="flex justify-center mb-4">
        <Avatar initials={member.initials} size="xl" colorClass={colorClass} />
      </div>
      <h3 class="font-bold text-base-content text-lg leading-tight">{member.name}</h3>
      <div class="badge badge-primary badge-outline mt-2 mb-1 text-xs font-semibold px-3 py-2">
        {member.role}
      </div>
      <p class="text-gray-400 text-sm mt-1">{member.profession}</p>
    </div>
  );
}

function MemberRow({ member, index }: { member: Member; index: number }) {
  const colorClass = avatarColors[index % avatarColors.length];
  return (
    <div class="flex items-center gap-4 p-4 bg-base-100 rounded-xl border border-base-200 hover:border-primary/30 hover:shadow-sm transition-all">
      <Avatar initials={member.initials} size="lg" colorClass={colorClass} />
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
          <div class="badge badge-secondary badge-lg font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">
            Club Roster 2025–26
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Our Members
          </h1>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Meet the dedicated Rotarians of Perinthalmanna — professionals committed to service, fellowship, and lasting community impact.
          </p>
        </div>
      </section>

      {/* Club Board */}
      <section class="py-16 bg-base-200">
        <div class="max-w-6xl mx-auto px-6">
          <div class="text-center mb-10">
            <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
              Board of Directors
            </div>
            <h2 class="text-3xl font-extrabold text-base-content">
              Club Leadership <span class="text-primary">2025–26</span>
            </h2>
          </div>
          <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {boardMembers.map((m, i) => <BoardCard key={m.name} member={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* Directors */}
      <section class="py-14 bg-base-100">
        <div class="max-w-5xl mx-auto px-6">
          <div class="mb-8">
            <div class="badge badge-secondary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
              Committees
            </div>
            <h2 class="text-2xl font-extrabold text-base-content">
              Directors
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {directors.map((m, i) => <MemberRow key={m.name} member={m} index={i} />)}
          </div>
        </div>
      </section>

      {/* General Members */}
      <section class="py-14 bg-base-200">
        <div class="max-w-5xl mx-auto px-6">
          <div class="mb-8">
            <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
              Rotarians
            </div>
            <h2 class="text-2xl font-extrabold text-base-content">
              All Members
              <span class="ml-3 badge badge-neutral text-sm font-normal align-middle">
                {generalMembers.length + boardMembers.length + directors.length} total
              </span>
            </h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {generalMembers.map((m, i) => <MemberRow key={m.name} member={m} index={i + directors.length} />)}
          </div>
          <p class="text-center text-gray-400 text-sm mt-6 italic">
            * Placeholder data — update with actual member details
          </p>
        </div>
      </section>

      {/* Join CTA */}
      <section class="py-16 bg-primary/5 border-t border-primary/10">
        <div class="max-w-2xl mx-auto px-6 text-center">
          <h2 class="text-2xl font-extrabold text-base-content mb-3">
            Want to Join Our Club?
          </h2>
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
