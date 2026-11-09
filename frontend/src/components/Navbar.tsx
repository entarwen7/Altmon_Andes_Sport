import { ShoppingBag, UserRound } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Logo-altmonandesSport.png";

export default function Navbar() {
  const navStyle = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-green-800 underline underline-offset-8"
        : "text-slate-700 hover:text-green-800"
    }`;

  return (
    <header className="border-b border-[#d9d1b9] bg-[#f2ead2]">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
        {/* Logo y nombre de la marca */}
        <Link to="/" className="flex shrink-0 items-center gap-3">
          <img
            src={logo}
            alt="Logo de AltmonAndes Sport"
            className="h-11 w-11 object-contain"
          />

          <span>
            <strong className="block text-sm text-green-900 sm:text-base">
              AltmonAndes Sport
            </strong>

            <span className="text-[10px] tracking-[3px] text-slate-600">
              OUTDOOR & SPORT
            </span>
          </span>
        </Link>

        {/* Navegación principal */}
        <nav className="hidden items-center gap-7 md:flex">
          <NavLink to="/" end className={navStyle}>
            Inicio
          </NavLink>

          <NavLink to="/catalogo" className={navStyle}>
            Tienda
          </NavLink>

          <a
            href="/#outdoor"
            className="text-sm text-slate-700 transition-colors hover:text-green-800"
          >
            Outdoor
          </a>
        </nav>

        {/* Cuenta y acceso a la tienda */}
        <div className="flex shrink-0 items-center gap-3">
          <Link
            to="/login"
            className="flex items-center gap-2 text-sm font-medium text-green-900"
          >
            <UserRound size={18} />
            <span className="hidden sm:inline">Mi cuenta</span>
          </Link>

          <Link
            to="/catalogo"
            aria-label="Ir a la tienda"
            className="rounded-lg bg-green-800 p-2.5 text-white transition-colors hover:bg-green-900"
          >
            <ShoppingBag size={19} />
          </Link>
        </div>
      </div>
    </header>
  );
}
