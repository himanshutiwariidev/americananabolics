import { GoogleIcon, FacebookIcon, InstagramIcon, XIcon } from "./SocialIcons";

const quickLinks = ["Home", "Shop", "Categories", "About", "Blog", "Contact"];
const legalLinks = [
  "Privacy Policy",
  "Terms of Service",
  "Shipping Policy",
  "Refund Policy",
];

const socials = [
  { Icon: GoogleIcon, label: "Google" },
  { Icon: FacebookIcon, label: "Facebook" },
  { Icon: InstagramIcon, label: "Instagram" },
  { Icon: XIcon, label: "X" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">
              CAN<span className="text-emerald-400">Series</span>
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Pharmaceutical-grade injectable compounds, manufactured to
              strict USP standards. Rx only.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 transition hover:border-emerald-500/50 hover:bg-slate-800"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Legal
            </h4>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-slate-400 transition hover:text-emerald-400"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-white">
              Stay Updated
            </h4>
            <p className="mt-5 text-sm text-slate-400">
              Get product drops and availability alerts.
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-lg border border-slate-800 bg-slate-900 px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="flex-shrink-0 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
              >
                Join
              </button>
            </form>
            <div className="mt-6 flex items-center gap-2 text-xs text-slate-500">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Rx Only · Licensed Distribution
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} CAN Series. All rights reserved.
          </p>
          <p className="max-w-md text-center text-xs text-slate-500 sm:text-right">
            These products are intended for use under appropriate medical
            supervision only. Not for sale to minors.
          </p>
        </div>
      </div>
    </footer>
  );
}
