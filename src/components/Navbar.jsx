import { links } from "../data";
const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element  py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
              </h2>
          <div className="flex gap-x-3">
            {links.map((link) => {
              const { id, text, href } = link;
              return (
                <a
                  className="duration-300 capitalize tracking-wide text-lg hover:text-emerald-600"
                  key={id}
                  href={href}
                >
                  {text}
                </a>
              );
            })}
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
