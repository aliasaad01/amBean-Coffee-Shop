import Container from "../ui/Container";
import { NavLink } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "lucide-react";

const links = ["home", "shop", "about", "contact"];
const navLinks = links.map((link, i) => (
  <NavLink
    key={i}
    to={`/${link !== "home" ? link : ""}`}
    className={"hover:text-amber-700 transition-colors"}
  >
    {link[0].toUpperCase() + link.slice(1)}
  </NavLink>
));

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-neutral-500 pt-16 pb-8">
      <Container>
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-amber-700 mb-3">amBean ☕</h3>
            <p className="text-sm">
              Crafted coffee experiences made with passion and quality beans.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm">{navLinks}</ul>
          </div>

          {/* Useful */}
          <div>
            <h4 className="text-white font-semibold mb-3">Useful</h4>
            <ul className="flex flex-col gap-2 text-sm">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <Instagram className="hover:text-amber-700 transition-all hover:-translate-y-1 cursor-pointer" />
              <Twitter className="hover:text-amber-700 transition-all hover:-translate-y-1 cursor-pointer" />
              <Facebook className="hover:text-amber-700 transition-all hover:-translate-y-1 cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-neutral-700 pt-6 text-center text-neutral-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-amber-700">amBean</span>. All rights
          reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
