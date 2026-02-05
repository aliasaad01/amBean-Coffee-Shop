import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X, ShoppingBag } from "lucide-react";
import Container from "../ui/Container";
import { useTheme } from "../../hooks/useTheme";
import { useCart } from "../../context/CartContext";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "Shop", path: "/shop" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { items, openCart } = useCart();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-neutral-900 shadow-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <span className="text-xl font-bold">amBean ☕</span>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-black dark:text-white font-medium"
                    : "text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions (always visible) */}
          <div className="flex items-center gap-3">
            {/* Theme */}
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Cart */}
            <button
              onClick={openCart}
              className="relative flex items-center justify-center p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <ShoppingBag className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 h-5 w-5 rounded-full bg-amber-700 text-white text-xs flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Burger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 md:hidden"
          />

          {/* Mobile menu */}
          <div className="fixed top-16 left-0 z-50 w-full md:hidden bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800">
            <nav className="flex flex-col gap-4 p-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="text-neutral-700 dark:text-neutral-300 text-lg"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
};

export default Navbar;
