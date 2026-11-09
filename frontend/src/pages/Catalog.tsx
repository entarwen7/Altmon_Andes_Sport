
import { useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products } from "../data/product";

const categories = [
  "Todos",
  "Senderismo",
  "Camping",
  "Ropa deportiva",
  "Entrenamiento",
  "Accesorios",
] as const;

type Category = (typeof categories)[number];

export default function Catalog() {
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<Category>("Todos");

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "Todos" || product.category === category;

    const matchesSearch =
      `${product.name} ${product.category}`
        .toLowerCase()
        .includes(search.trim().toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f2ead2]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 lg:py-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-green-800">
          — Tu próxima aventura
        </p>

        <h1 className="mt-2 text-3xl font-extrabold text-green-900 sm:text-4xl">
          Catálogo de productos
        </h1>

        <p className="mt-2 text-sm text-slate-600 sm:text-base">
          Encuentra equipo para moverte, explorar y disfrutar al aire libre.
        </p>

        <section className="mt-6 rounded-2xl bg-white p-5 sm:p-6">
          <label
            htmlFor="product-search"
            className="mb-2 block text-xs font-bold text-slate-700"
          >
            Buscar productos
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex flex-1 items-center gap-3 rounded-lg border border-slate-300 px-3">
              <Search size={19} className="text-slate-500" />

              <input
                id="product-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="¿Qué necesitas para tu aventura?"
                className="w-full py-3 text-sm outline-none"
              />
            </div>

            <button
              type="button"
              onClick={() => setSearch((current) => current.trim())}
              className="flex items-center justify-center gap-2 rounded-lg bg-green-800 px-6 py-3 text-sm font-bold text-white hover:bg-green-900"
            >
              Buscar <ArrowRight size={17} />
            </button>
          </div>

          <p className="mb-3 mt-5 text-xs font-bold text-slate-700">
            Categorías
          </p>

          <div className="flex flex-wrap gap-2">
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={category === item}
                onClick={() => setCategory(item)}
                className={`rounded-lg border px-4 py-2.5 text-xs font-semibold ${
                  category === item
                    ? "border-green-800 bg-green-800 text-white"
                    : "border-slate-300 bg-white text-slate-700 hover:border-green-800"
                }`}
              >
                {category === item && item === "Todos" ? "✓  " : ""}
                {item}
              </button>
            ))}
          </div>
        </section>

        <div className="mt-6 flex flex-wrap justify-between gap-2 text-sm">
          <p className="font-semibold text-slate-700">
            {filteredProducts.length} productos · {category}
          </p>

          <p className="text-xs text-slate-500">
            Precios en pesos colombianos (COP)
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="mt-5 rounded-2xl bg-white p-10 text-center">
            <h2 className="font-bold text-slate-700">
              No encontramos productos
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Intenta otra búsqueda o selecciona una categoría diferente.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("Todos");
              }}
              className="mt-4 rounded-lg bg-green-800 px-4 py-2 text-sm font-bold text-white hover:bg-green-900"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
