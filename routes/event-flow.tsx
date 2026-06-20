import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

type FlowItem = {
  time: string;
  title: string;
  arrangement?: string;
  by?: string;
  highlight?: boolean;
};

const flow: FlowItem[] = [
  { time: "6:30 PM", title: "Registration & List of Guests to be Recognised", arrangement: "Attendance Book", by: "Ann Lisha, Ann Dr Shameera, Ann Jasmine" },
  { time: "7:15 PM", title: "MC Voice Over", by: "Rtn Sharath Namboothiri & Ann Dr Karthika" },
  { time: "7:17 PM", title: "Procession led by Sergeant at Arms", by: "Rtn Suresh Kollathodi" },
  { time: "7:21 PM", title: "Adorning Collar on President", by: "Sergeant at Arms Rtn Salim A" },
  { time: "7:22 PM", title: "Meeting Call to Order by President", by: "Rtn Dr Kasim Kolakkadan" },
  { time: "7:23 PM", title: "Rotary Prayer & Four-Way Test", arrangement: "Print Out", by: "Ann Priya Suresh" },
  { time: "7:26 PM", title: "Welcome Address", by: "Rtn Suresh Kollathodi" },
  { time: "7:31 PM", title: "Secretary's Report", arrangement: "PPT", by: "Rtn Abdul Azeez" },
  { time: "7:41 PM", title: "Recognition of Guests", arrangement: "List of Guests", by: "Rtn Sharath Namboothiri & Ann Dr Karthika" },
  { time: "7:45 PM", title: "Farewell Speech", by: "Rtn Dr Kasim Kolakkadan" },
  { time: "7:55 PM", title: "Pleasantries by President", arrangement: "List of Pleasantries", by: "Rtn Dr Kasim Kolakkadan" },
  { time: "8:00 PM", title: "Recognition of Guests", arrangement: "List of Guests", by: "Rtn Sharath Namboothiri & Ann Dr Karthika" },
  { time: "8:01 PM", title: "Introduction of Incoming President", arrangement: "Script", by: "Ann Lisha Jayachandran" },
  { time: "8:02 PM", title: "Installation of President Elect", arrangement: "Charter" },
  { time: "8:04 PM", title: "Acceptance Speech & Vision Sharing", arrangement: "PPT", by: "Rtn PHF Kuriakose K K" },
  { time: "8:14 PM", title: "Installation of Office Bearers", arrangement: "BOD Pins", by: "Rtn PHF Kuriakose K K" },
  { time: "8:19 PM", title: "Recognition of Anns Forum", arrangement: "Pins", by: "Rtn PHF Kuriakose K K" },
  { time: "8:21 PM", title: "Honoring the Charter President", by: "Rtn PHF Kuriakose K K & Rtn Dr Anand Sriram" },
  { time: "8:23 PM", title: "Website & Social Media Platform Inauguration & Felicitations", by: "Rtn MPHF Deepak Kumar Koroth", highlight: true },
  { time: "8:23 PM", title: "Deputy District Coordinator 2026-27", by: "Rtn MPHF Dr A K Jayachandran" },
  { time: "8:26 PM", title: "Zonal Learning Facilitator 2026-27", by: "Rtn MPHF BEN Dr Praveen Ramanunni" },
  { time: "8:29 PM", title: "Assistant Governor 2026-27", by: "Rtn MPHF Dr Vijay P G" },
  { time: "8:32 PM", title: "Neighbouring Club Presidents", arrangement: "List of Names", by: "Rtn Sharath Namboothiri & Ann Dr Karthika" },
  { time: "8:42 PM", title: "IMA, Lions, JCI, Bar Association & Mudra", arrangement: "List of Names", by: "Rtn Sharath Namboothiri & Ann Dr Karthika" },
  { time: "8:50 PM", title: "Introduction of Chief Guest", arrangement: "Script", by: "Rtn MPHF BEN Dr Praveen Ramanunni" },
  { time: "8:53 PM", title: "Chief Guest Address", by: "Rtn MPHF Deepak Kumar Koroth" },
  { time: "9:00 PM", title: "Recognition of the Chief Guest", arrangement: "Gift", by: "Rtn PHF Kuriakose K K & Rtn Dr Anand Sriram" },
  { time: "9:02 PM", title: "Vote of Thanks", by: "Rtn Dr Anand Sriram" },
  { time: "9:06 PM", title: "National Anthem", by: "Rtn Dr Anand Sriram" },
  { time: "9:06 PM", title: "Meeting Adjourned for Dinner & Fellowship", by: "Rtn PHF Kuriakose K K" },
];

export default function EventFlowPage() {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section class="hero-gradient py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="badge badge-secondary badge-lg font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">
            Programme
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Event Flow
          </h1>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            39th Installation Ceremony
          </p>
          <p class="text-blue-200 text-sm mt-2">
            Saturday, 20 June 2026 · 6:30 PM · IMA Hall, Perinthalmanna
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section class="py-14 bg-base-200">
        <div class="max-w-3xl mx-auto px-4 sm:px-6">
          <div class="relative">
            {/* vertical rail */}
            <div class="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-0.5 bg-base-300">
            </div>

            <ol class="space-y-3 sm:space-y-4">
              {flow.map((item, i) => (
                <li key={i} class="relative pl-11 sm:pl-14">
                  {/* dot */}
                  <span
                    class={`absolute left-[8px] sm:left-3 top-4 w-4 h-4 rounded-full ring-4 ring-base-200 z-10 ${
                      item.highlight ? "bg-secondary" : "bg-primary"
                    }`}
                  >
                  </span>

                  <div
                    class={`card border shadow-sm card-hover ${
                      item.highlight
                        ? "bg-secondary/10 border-secondary/40"
                        : "bg-base-100 border-base-200"
                    }`}
                  >
                    <div class="card-body p-4 sm:p-5">
                      <div class="flex flex-wrap items-center gap-2 mb-1.5">
                        <span
                          class={`badge font-bold whitespace-nowrap ${
                            item.highlight ? "badge-secondary" : "badge-primary"
                          }`}
                        >
                          {item.time}
                        </span>
                        {item.highlight && (
                          <span class="text-xs font-bold text-secondary uppercase tracking-wide">
                            🎉 Website Launch
                          </span>
                        )}
                      </div>

                      <h3 class="font-bold text-base-content leading-snug">
                        {item.title}
                      </h3>

                      {(item.arrangement || item.by) && (
                        <div class="flex flex-col sm:flex-row sm:flex-wrap gap-x-4 gap-y-1 mt-2 text-sm">
                          {item.arrangement && (
                            <span class="inline-flex items-center gap-1.5 text-gray-500">
                              <span>📋</span>
                              <span>{item.arrangement}</span>
                            </span>
                          )}
                          {item.by && (
                            <span class="inline-flex items-start gap-1.5 text-gray-500">
                              <span class="mt-0.5">👤</span>
                              <span>{item.by}</span>
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <p class="text-center text-gray-400 text-sm mt-10 italic">
            Programme times are indicative and may vary on the day.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
