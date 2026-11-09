import {
  ArrowRight,
  Compass,
  Mountain,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";
import logo from "../assets/Logo-altmonandesSport.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f2ead2]">
      <Navbar />

      <main>
        {/* Sección principal */}
        <section className="overflow-hidden bg-gradient-to-br from-[#103d27] via-[#185b36] to-[#527a4e] text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <img
                src={logo}
                alt="Logo de AltmonAndes Sport"
                className="mb-8 h-20 w-auto object-contain object-left"
              />

              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-green-200">
                <Compass size={17} />
                Tu próxima aventura
              </p>

              <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                Explora nuevos caminos.
                <span className="block text-[#d5e6b7]">
                  Supera tus límites.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-7 text-white/80">
                Encuentra productos deportivos y equipo outdoor que te
                acompañen en cada entrenamiento, recorrido y aventura.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/catalogo"
                  className="flex items-center gap-2 rounded-lg bg-[#e0ebcb] px-6 py-3.5 text-sm font-bold text-green-950 transition-colors hover:bg-white"
                >
                  Explorar catálogo
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/registro"
                  className="rounded-lg border border-white/50 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
                >
                  Crear cuenta
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-white/80">
                <span className="flex items-center gap-2">
                  <ShieldCheck size={18} />
                  Compra informada
                </span>

                <span className="flex items-center gap-2">
                  <Mountain size={18} />
                  Espíritu aventurero
                </span>
              </div>
            </div>

            {/* Imagen de montaña */}
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl border border-white/20" />

              <img
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85"
                alt="Montañas que inspiran las aventuras de AltmonAndes Sport"
                className="relative h-[320px] w-full rounded-2xl object-cover shadow-2xl sm:h-[420px]"
              />

              <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-[#123e28]/90 p-4 backdrop-blur">
                <p className="text-xs uppercase tracking-widest text-green-200">
                  AltmonAndes Sport
                </p>

                <p className="mt-1 font-bold">
                  Equípate para llegar más lejos.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Misión de la marca */}
        <section
          id="outdoor"
          className="mx-auto max-w-7xl px-5 py-14"
        >
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[3px] text-green-800">
              Nuestra misión
            </p>

            <h2 className="mt-3 text-3xl font-extrabold text-green-950">
              El movimiento nos conecta con nuevas posibilidades.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              En AltmonAndes Sport buscamos acercar productos deportivos y
              artículos para actividades al aire libre, motivando a las
              personas a explorar, entrenar y disfrutar de un estilo de vida
              activo.
            </p>
          </div>
        </section>

        {/* Productos destacados */}
        <section className="mx-auto max-w-7xl px-5 pb-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-green-800">
                Selección destacada
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-green-950">
                Prepárate para tu próxima aventura
              </h2>
            </div>

            <Link
              to="/catalogo"
              className="text-sm font-bold text-green-800 hover:underline"
            >
              Ver todos los productos →
            </Link>
          </div>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
