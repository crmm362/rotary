import { Handlers, PageProps } from "$fresh/server.ts";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import SocialLinks from "../components/SocialLinks.tsx";

type FormState = {
  success?: boolean;
  error?: string;
};

export const handler: Handlers<FormState> = {
  GET(_req, ctx) {
    return ctx.render({});
  },
  async POST(req, ctx) {
    const form = await req.formData();
    const name = (form.get("name") as string)?.trim() ?? "";
    const email = (form.get("email") as string)?.trim() ?? "";

    if (!name || !email) {
      return ctx.render({ error: "Name and email are required." });
    }

    // TODO: Connect to an email service (e.g. Resend, Formspree) or database
    // For now, form submission is acknowledged on the UI
    return ctx.render({ success: true });
  },
};

export default function ContactPage({ data }: PageProps<FormState>) {
  return (
    <div class="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero */}
      <section class="hero-gradient py-16">
        <div class="max-w-4xl mx-auto px-6 text-center">
          <div class="badge badge-secondary badge-lg font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-5">
            Get in Touch
          </div>
          <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact Us
          </h1>
          <p class="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            Reach out for membership inquiries, project partnerships, or any
            questions about our club activities.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section class="py-16 bg-base-200">
        <div class="max-w-5xl mx-auto px-6">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info Column */}
            <div class="flex flex-col gap-6">
              <div>
                <div class="badge badge-primary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-3">
                  Club Details
                </div>
                <h2 class="text-2xl font-extrabold text-base-content">
                  Rotary Club of Perinthalmanna
                </h2>
                <p class="text-gray-500 mt-2 leading-relaxed">
                  Established 1988 · Rotary District 3204 · Club ID 25399 ·
                  Rotary International
                </p>
              </div>

              <div class="card bg-base-100 shadow-sm border border-base-200">
                <div class="card-body p-6 flex flex-col gap-5">
                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p class="font-semibold text-base-content">Address</p>
                      <p class="text-gray-500 text-sm leading-relaxed">
                        Rotary Hall, Thanneer Panthal<br />
                        Pathaikara, Perinthalmanna<br />
                        Malappuram – 679 322<br />
                        Kerala, India
                      </p>
                    </div>
                  </div>

                  <div class="divider my-0"></div>

                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                      📧
                    </div>
                    <div>
                      <p class="font-semibold text-base-content">Email</p>
                      <a
                        href="mailto:rotary.perinthalmanna@gmail.com"
                        class="text-primary text-sm hover:underline"
                      >
                        rotary.perinthalmanna@gmail.com
                      </a>
                    </div>
                  </div>

                  <div class="divider my-0"></div>

                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                      🗓️
                    </div>
                    <div>
                      <p class="font-semibold text-base-content">
                        Weekly Meetings
                      </p>
                      <p class="text-gray-500 text-sm">
                        Every <strong>Friday</strong>, 7 PM<br />
                        Rotary Hall, Pathaikara, Perinthalmanna
                      </p>
                    </div>
                  </div>

                  <div class="divider my-0"></div>

                  <div class="flex items-start gap-4">
                    <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                      🌐
                    </div>
                    <div>
                      <p class="font-semibold text-base-content">
                        Rotary International
                      </p>
                      <a
                        href="https://www.rotary.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-primary text-sm hover:underline"
                      >
                        www.rotary.org
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card bg-base-100 shadow-sm border border-base-200">
                <div class="card-body p-6">
                  <p class="font-semibold text-base-content mb-3">Follow Us</p>
                  <p class="text-gray-500 text-sm leading-relaxed mb-4">
                    Follow our social channels for full event albums, weekly
                    activities, and club updates.
                  </p>
                  <SocialLinks />
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div class="card bg-base-100 shadow-md border border-base-200">
              <div class="card-body p-8">
                {data?.success
                  ? (
                    <div class="flex flex-col items-center justify-center gap-4 py-12 text-center">
                      <div class="text-6xl">🎉</div>
                      <h3 class="text-2xl font-extrabold text-base-content">
                        Thank You!
                      </h3>
                      <p class="text-gray-500 max-w-xs leading-relaxed">
                        Your message has been received. We'll get back to you
                        within 2–3 business days.
                      </p>
                      <a
                        href="/contact"
                        class="btn btn-primary rounded-full px-8 mt-2"
                      >
                        Send Another Message
                      </a>
                    </div>
                  )
                  : (
                    <>
                      <div class="badge badge-secondary badge-outline font-semibold tracking-widest uppercase text-xs px-4 py-3 mb-4">
                        Membership / Enquiry
                      </div>
                      <h2 class="text-2xl font-extrabold text-base-content mb-6">
                        Send Us a Message
                      </h2>

                      {data?.error && (
                        <div class="alert alert-error mb-4 text-sm py-3">
                          {data.error}
                        </div>
                      )}

                      <form method="POST" class="flex flex-col gap-4">
                        <div class="form-control">
                          <label class="label pb-1">
                            <span class="label-text font-semibold">
                              Full Name *
                            </span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            placeholder="e.g. Rtn. Suresh Kumar"
                            class="input input-bordered w-full focus:input-primary"
                            required
                          />
                        </div>

                        <div class="form-control">
                          <label class="label pb-1">
                            <span class="label-text font-semibold">
                              Email Address *
                            </span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            class="input input-bordered w-full focus:input-primary"
                            required
                          />
                        </div>

                        <div class="form-control">
                          <label class="label pb-1">
                            <span class="label-text font-semibold">Phone</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            placeholder="+91 98765 43210"
                            class="input input-bordered w-full focus:input-primary"
                          />
                        </div>

                        <div class="form-control">
                          <label class="label pb-1">
                            <span class="label-text font-semibold">
                              Profession
                            </span>
                          </label>
                          <input
                            type="text"
                            name="profession"
                            placeholder="e.g. Doctor, Engineer, Educator..."
                            class="input input-bordered w-full focus:input-primary"
                          />
                        </div>

                        <div class="form-control">
                          <label class="label pb-1">
                            <span class="label-text font-semibold">
                              Purpose
                            </span>
                          </label>
                          <select
                            name="purpose"
                            class="select select-bordered w-full focus:select-primary"
                          >
                            <option value="">Select...</option>
                            <option value="membership">
                              Interested in Membership
                            </option>
                            <option value="project">Project Partnership</option>
                            <option value="donation">
                              Donation / Sponsorship
                            </option>
                            <option value="general">General Enquiry</option>
                          </select>
                        </div>

                        <div class="form-control">
                          <label class="label pb-1">
                            <span class="label-text font-semibold">
                              Message
                            </span>
                          </label>
                          <textarea
                            name="message"
                            placeholder="Tell us a bit about yourself or your enquiry..."
                            class="textarea textarea-bordered w-full focus:textarea-primary h-28 resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          class="btn btn-primary btn-lg rounded-full w-full font-bold mt-2"
                        >
                          Send Message →
                        </button>

                        <p class="text-xs text-gray-400 text-center">
                          We respect your privacy and will never share your
                          details.
                        </p>
                      </form>
                    </>
                  )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
