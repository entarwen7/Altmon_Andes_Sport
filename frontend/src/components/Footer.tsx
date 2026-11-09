import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-14 border-t border-[#d9d1b9] bg-[#eee4c8]">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 AltmonAndes Sport</p>

        <nav
          aria-label="Enlaces del pie de página"
          className="flex flex-wrap gap-5"
        >
          <a
            href="#privacidad"
            className="transition-colors hover:text-green-800"
          >
            Privacidad
          </a>

          <a
            href="#terminos"
            className="transition-colors hover:text-green-800"
          >
            Términos y condiciones
          </a>

          <Link
            to="/catalogo"
            className="transition-colors hover:text-green-800"
          >
            Tienda
          </Link>
        </nav>
      </div>
    </footer>
  );
}