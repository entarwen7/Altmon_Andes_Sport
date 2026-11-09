
import { useState } from "react";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import { products, formatCOP } from "../data/product";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();

  const product = products.find((item) => item.id === id) ?? products[0];

  const [quantity, setQuantity] = useState<number>(1);
  const [message, setMessage] = useState<boolean>(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f2ead2]">
        <Navbar />
        <main className="mx-auto max-w-7xl px-5 py-12">
          <h1 className="text-2xl font-bold text-green-950">
            Producto no encontrado
          </h1>
          <Link
            to="/catalogo"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:underline"
          >
            <ArrowLeft size={17} />
            Volver al catálogo
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f2ead2]">
      <Navbar />

      <main className="mx-auto max-w-7xl px-5 py-8 lg:py-10">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:underline"
        >
          <ArrowLeft size={17} />
          Volver al catálogo
        </Link>

        <section className="mt-6 grid items-start gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-4 sm:p-6">
            <img
              src={product.image}
              alt={product.name}
              className="h-[330px] w-full rounded-2xl bg-slate-100 object-cover sm:h-[480px]"
            />

            <p className="mt-4 text-center text-xs text-slate-500">
              Imagen ilustrativa del producto
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-green-800">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-green-950 sm:text-4xl">
              {product.name}
            </h1>

            <p className="mt-4 text-3xl font-black text-green-800">
              {formatCOP(product.price)}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {product.details}
            </p>

            <div className="my-6 border-y border-slate-100 py-5">
              <h2 className="font-bold text-slate-800">
                Descripción del producto
              </h2>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {product.description}
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Truck size={20} className="text-green-800" />
              Información de entrega por confirmar.
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-lg border border-slate-300">
                <button
                  type="button"
                  aria-label="Disminuir cantidad"
                  onClick={() =>
                    setQuantity((q) => Math.max(1, q - 1))
                  }
                  className="p-3 hover:bg-slate-50"
                >
                  <Minus size={16} />
                </button>

                <span className="min-w-10 text-center font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  aria-label="Aumentar cantidad"
                  onClick={() =>
                    setQuantity((q) => Math.min(10, q + 1))
                  }
                  className="p-3 hover:bg-slate-50"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setMessage(true)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-800 px-4 py-3.5 text-sm font-bold text-white hover:bg-green-900"
              >
                <ShoppingBag size={18} />
                Agregar al carrito
              </button>
            </div>

            {message && (
              <p
                role="status"
                className="mt-4 rounded-lg bg-green-50 p-3 text-sm text-green-800"
              >
                Acción demostrativa: el carrito todavía no está conectado.
                Cantidad seleccionada: {quantity}.
              </p>
            )}

            <p className="mt-4 text-xs text-slate-400">
              Precio en pesos colombianos (COP). Datos de demostración.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-extrabold text-green-950">
            También te puede interesar
          </h2>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .filter((item) => item.id !== product.id)
              .slice(0, 3)
              .map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
