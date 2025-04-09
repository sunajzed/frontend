import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  const navLinks = [
    { name: "Home", path: "/home" },
    { name: "Menu", path: "/" },
    { name: "Make a Reservation", path: "/reservation" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header style={{ display: "flex", alignItems: "center", padding: "10px 30px", background: "#222", color: "#fff" }}>
      <Image src="/logo.png" alt="Logo" width={40} height={40} />
      <nav style={{ marginLeft: "auto", display: "flex", gap: "20px" }}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            style={{
              color: router.pathname === link.path ? "#f0c040" : "#fff",
              fontWeight: router.pathname === link.path ? "bold" : "normal",
              textDecoration: "none",
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
