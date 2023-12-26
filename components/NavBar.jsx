import Link from "next/link";

const links = [
  { href: "/client", label: "Client" },
  { href: "/drinks", label: "Drinks" },
  { href: "/prismaexample", label: "Prismaexample" },
  { href: "/tasks", label: "Tasks" },
  { href: "/query", label: "Query" },
];

function NavBar() {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row">
        <Link
          href="/"
          className="text-3xl bg-primary text-secondary-content py-4 px-4 rounded-xl font-semibold "
        >
          Awesome application
        </Link>
        <ul className="menu menu-horizontal md:ml-8">
          {links.map((link) => (
            <li key={link.href} className="mr-4">
              <Link href={link.href} className="capitalize text-lg">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
