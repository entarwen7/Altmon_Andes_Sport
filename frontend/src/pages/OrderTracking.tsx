
import { useState } from "react";
import {
  ArrowLeft,
  Check,
  CheckCircle2,
  Clock3,
  Headphones,
  MapPin,
  Package,
  PackageCheck,
  Search,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products, formatCOP } from "../data/product";

const order = {
  number: "AMS-2026-00124",
  date: "8 de octubre de 2026",
  customer: "Valentina Rodríguez",
  city: "Bogotá D. C., Colombia",
  address: "Dirección de entrega de ejemplo",
  payment: "Tarjeta de crédito · •••• 4821",
  status: 2,
  productId: "mochila",
  quantity: 1,
};

const steps = [
  {
    title: "Pedido confirmado",
    description: "Tu compra fue registrada.",
    date: "8 oct. · 10:30 a. m.",
    icon: CheckCircle2,
  },
  {
    title: "Preparando pedido",
    description: "Los productos están en preparación.",
    date: "9 oct. · 9:00 a. m.",
    icon: Package,
  },
  {
    title: "En camino",
    description: "Tu pedido está listo para el envío.",
    date: "Próxima actualización",
    icon: Truck,
  },
  {
    title: "Pedido entregado",
    description: "La entrega está pendiente de confirmación.",
    date: "Fecha por confirmar",
    icon: PackageCheck,
  },
];

export default function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState(order.number);
  const [searched, setSearched] = useState(false);
  const [notice, setNotice] = useState("");

  const product =
    products.find((item) => item.id === order.productId) ?? products[0];

  const currentStep = order.status;

  return (
    <div className="min-h-screen bg-[#f2ead2] text-slate-700">
      <Navbar />

      <main className="mx-auto max-w-6xl px-5 py-8 sm:py-10">
        <Link
          to="/catalogo"
          className="inline-flex items-center gap-2 text-sm font-semibold text-green-800 hover:underline"
        >
          <ArrowLeft size={17} /> Volver a la tienda
        </Link>

        <div className="mt-6">
          <p className="text-xs font-bold uppercase tracking-[2px] text-green-800">
            AltmonAndes Sport · Mi cuenta
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-green-950 sm:text-4xl">
            Seguimiento de tu pedido
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Consulta el estado de tu compra y revisa la información de entrega
            desde un solo lugar.
          </p>
        </div>

        <section className="mt-7 rounded-2xl border border-white bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-start gap-3">
            <div className="rounded-xl bg-[#e5f1e2] p-3 text-green-800">
              <Search size={21} />
            </div>
            <div>
              <h2 className="font-extrabold text-green-950">
                Consulta tu pedido
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Introduce el número de referencia de tu compra.
              </p>
            </div>
          </div>

          <form
            onSubmit={(event) => {
              event.preventDefault();
              setSearched(true);
              setNotice(
                orderNumber.trim() === order.number
                  ? "Pedido de demostración encontrado."
                  : "Esta maqueta solo contiene un pedido de ejemplo. Prueba AMS-2026-00124."
              );
            }}
            className="mt-5 flex flex-col gap-3 sm:flex-row"
          >
            <input
              value={orderNumber}
              onChange={(event) => {
                setOrderNumber(event.target.value);
                setNotice("");
              }}
              placeholder="Ej. AMS-2026-00124"
              className="min-w-0 flex-1 rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-green-700"
            />

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-xl bg-green-800 px-6 py-3 text-sm font-bold text-white hover:bg-green-900"
            >
              <Search size={17} /> Consultar pedido
            </button>
          </form>

          {searched && (
            <p
              role="status"
              className={`mt-3 rounded-lg p-3 text-sm ${
                orderNumber.trim() === order.number
                  ? "bg-green-50 text-green-800"
                  : "bg-amber-50 text-amber-800"
              }`}
            >
              {notice}
            </p>
          )}
        </section>

        <section className="mt-6 overflow-hidden rounded-2xl border border-white bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 bg-gradient-to-r from-[#123f29] to-[#286541] p-5 text-white sm:flex-row sm:items-center sm:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-green-200">
                Número de pedido
              </p>
              <h2 className="mt-2 text-2xl font-extrabold">
                {order.number}
              </h2>
              <p className="mt-2 text-sm text-white/75">
                Realizado el {order.date}
              </p>
            </div>

            <div className="self-start rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold sm:self-center">
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#d5e6b7]" />
              En preparación
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-800">
                  Estado del envío
                </p>
                <h2 className="mt-2 text-xl font-extrabold text-green-950 sm:text-2xl">
                  Estamos preparando tu aventura
                </h2>
              </div>
              <p className="text-xs text-slate-500">
                Actualización ilustrativa
              </p>
            </div>

            <div className="mt-8 grid grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const completed = index < currentStep;
                const active = index === currentStep;

                return (
                  <div key={step.title} className="relative">
                    {index < steps.length - 1 && (
                      <div
                        className={`absolute left-1/2 top-5 h-1 w-full ${
                          index < currentStep ? "bg-green-700" : "bg-slate-200"
                        }`}
                      />
                    )}

                    <div className="relative flex flex-col items-center px-1 text-center">
                      <div
                        className={`z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                          completed
                            ? "border-green-800 bg-green-800 text-white"
                            : active
                              ? "border-green-800 bg-[#e5f1e2] text-green-900"
                              : "border-slate-200 bg-white text-slate-400"
                        }`}
                      >
                        {completed ? <Check size={19} /> : <Icon size={18} />}
                      </div>

                      <p
                        className={`mt-3 text-xs font-bold sm:text-sm ${
                          completed || active
                            ? "text-green-950"
                            : "text-slate-400"
                        }`}
                      >
                        {step.title}
                      </p>

                      <p className="mt-1 hidden max-w-36 text-xs leading-5 text-slate-500 sm:block">
                        {step.description}
                      </p>
                      <p className="mt-2 hidden text-[10px] text-slate-400 md:block">
                        {step.date}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-xl border border-[#e4ddca] bg-[#faf8f0] p-4 sm:p-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-white p-2.5 text-green-800 shadow-sm">
                  <Clock3 size={21} />
                </div>
                <div>
                  <h3 className="font-bold text-green-950">
                    ¿Qué sucede ahora?
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Tu pedido se encuentra en preparación. La fecha estimada
                    de entrega se confirmará cuando exista información del
                    servicio de envío.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-6 lg:grid-cols-5">
          <section className="rounded-2xl border border-white bg-white p-5 shadow-sm sm:p-6 lg:col-span-3">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-[#e5f1e2] p-3 text-green-800">
                <ShoppingBag size={21} />
              </div>
              <div>
                <h2 className="font-extrabold text-green-950">
                  Resumen de la compra
                </h2>
                <p className="text-xs text-slate-500">
                  {order.quantity} producto en este pedido
                </p>
              </div>
            </div>

            <div className="mt-5 flex gap-4 border-b border-slate-100 pb-5">
              <img
                src={product.image}
                alt={product.name}
                className="h-24 w-24 rounded-xl bg-slate-100 object-cover sm:h-28 sm:w-28"
              />
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-green-800">
                  {product.category}
                </p>
                <h3 className="mt-1 font-bold text-slate-800">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  {product.details}
                </p>
                <p className="mt-3 text-sm font-extrabold text-green-800">
                  {formatCOP(product.price)}
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 text-sm">
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">Subtotal</span>
                <span className="font-semibold">
                  {formatCOP(product.price * order.quantity)}
                </span>
              </div>
              <div className="flex justify-between gap-3">
                <span className="text-slate-500">Envío</span>
                <span className="font-semibold">Por confirmar</span>
              </div>
              <div className="flex justify-between gap-3 border-t border-slate-100 pt-4">
                <span className="font-bold text-slate-800">
                  Total ilustrativo
                </span>
                <span className="text-lg font-extrabold text-green-800">
                  {formatCOP(product.price * order.quantity)}
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl border border-white bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#e5f1e2] p-3 text-green-800">
                  <MapPin size={21} />
                </div>
                <h2 className="font-extrabold text-green-950">
                  Datos de entrega
                </h2>
              </div>

              <p className="mt-5 text-sm font-bold text-slate-800">
                {order.customer}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {order.address}
                <br />
                {order.city}
              </p>

              <div className="mt-4 rounded-lg bg-[#faf8f0] p-3 text-xs leading-5 text-slate-500">
                Datos ficticios para la maqueta. No corresponden a una entrega
                real.
              </div>
            </div>

            <div className="rounded-2xl border border-white bg-white p-5 shadow-sm sm:p-6">
              <h2 className="font-extrabold text-green-950">
                Información de pago
              </h2>
              <p className="mt-3 text-sm text-slate-600">{order.payment}</p>
              <p className="mt-2 text-xs text-slate-400">
                Medio de pago de ejemplo
              </p>

              <button
                onClick={() =>
                  setNotice(
                    "El centro de ayuda estará disponible en una etapa posterior."
                  )
                }
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-green-700 px-4 py-3 text-sm font-bold text-green-800 hover:bg-green-50"
              >
                <Headphones size={18} /> Necesito ayuda
              </button>

              {notice && (
                <p className="mt-3 rounded-lg bg-[#faf8f0] p-3 text-xs leading-5 text-slate-600">
                  {notice}
                </p>
              )}
            </div>
          </section>
        </div>

        <div className="mt-7 flex items-start gap-3 rounded-xl border border-[#e5dcc4] bg-white/60 p-4 text-xs leading-5 text-slate-500">
          <PackageCheck size={19} className="mt-0.5 shrink-0 text-green-800" />
          <p>
            Maqueta de seguimiento: el estado, las fechas, el pago y la
            información de entrega son ilustrativos. No hay conexión con
            transportadoras ni actualización automática de pedidos.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}