import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="Logo" height={32} style={{ marginRight: "10px" }} />
        DEEP NET SOFT
      </div>
      <nav className="nav-links">
        <Link href="/" className={router.pathname === "/" ? "active" : ""}>
          Menu
        </Link>
        <Link href="/reservation" className={router.pathname === "/reservation" ? "active" : ""}>
          Make a Reservation
        </Link>
        <Link href="/contact" className={router.pathname === "/contact" ? "active" : ""}>
          Contact Us
        </Link>
      </nav>
    </header>
  );
};

export default Header;
