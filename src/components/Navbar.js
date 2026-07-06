const leftLinks = ["Home", "Shop", "Categories"];
const rightLinks = ["About", "Blog", "Contact"];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="relative mx-auto flex h-[88px] max-w-7xl items-center justify-between px-6">
        <div className="hidden items-center gap-8 md:flex">
          {leftLinks.map((link) => (
            <NavLink key={link} href="#">
              {link}
            </NavLink>
          ))}
        </div>

        <a
          href="/"
          className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          aria-label="Go to homepage"
        >
         {/*  <img
           src ="logo.png" className="h-15 w-auto object-cover"/> */}
          
           
         
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {rightLinks.map((link) => (
            <NavLink key={link} href="#">
              {link}
            </NavLink>
          ))}
        </div>

        <div className="flex w-full items-center justify-between md:hidden">
          <button
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700"
            type="button"
          >
            Menu
          </button>
          <button
            className="rounded-md bg-emerald-600 px-3 py-2 text-sm font-semibold text-white"
            type="button"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-600 transition hover:text-emerald-700"
    >
      {children}
    </a>
  );
}
