
import { useMemo, useState } from "react";
import {
  Bell,
  ChartNoAxesCombined,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  Pencil,
  Plus,
  Search,
  Settings,
  ShieldCheck,
  ShoppingCart,
  Trash2,
  Users,
  X,
} from "lucide-react";
import { products, formatCOP } from "../data/product";

type ProductStatus = "Activo" | "Agotado";

export default function Admin() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [status, setStatus] = useState("Todos");
  const [activeMenu, setActiveMenu] = useState("Productos");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [notice, setNotice] = useState("");

  const categories = [
    "Todas",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product, index) => {
      const matchesSearch =
        `${product.name} ${product.category}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "Todas" || product.category === category;

      const productStatus: ProductStatus =
        index === 4 ? "Agotado" : "Activo";

      const matchesStatus = status === "Todos" || productStatus === status;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [search, category, status]);

  const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard },
    { label: "Productos", icon: Package },
    { label: "Pedidos", icon: ClipboardList },
    { label: "Usuarios", icon: Users },
    { label: "Estadísticas", icon: ChartNoAxesCombined },
    { label: "Configuración", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#f2ead2] text-slate-700">
      {sidebarOpen && (
        <button
          aria-label="Cerrar menú"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-gradient-to-b from-[#103d27] to-[#174d30] text-white transition-transform duration-200 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[76px] items-center gap-3 border-b border-white/10 px-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
            <span className="text-2xl">▲</span>
          </div>
          <div>
            <p className="font-extrabold tracking-tight">AltmonAndes</p>
            <p className="text-xs tracking-[3px] text-green-200">SPORT</p>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="ml-auto lg:hidden"
            aria-label="Cerrar navegación"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-4 py-7">
          <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-green-200/70">
            Menú principal
          </p>

          <nav className="space-y-2">
            {menuItems.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => {
                  setActiveMenu(label);
                  if (label !== "Productos") {
                    setNotice(
                      `Vista de ${label.toLowerCase()} pendiente de maquetación.`
                    );
                  } else {
                    setNotice("");
                  }
                  setSidebarOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                  activeMenu === label
                    ? "bg-[#38844d] font-bold text-white shadow-sm"
                    : "text-white/80 hover:bg-white/10"
                }`}
              >
                <Icon size={19} />
                {label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-auto border-t border-white/10 p-4">
          <div className="mb-4 flex items-center gap-3 rounded-xl bg-white/10 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e0ebcb] font-bold text-green-900">
              AD
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">Administrador</p>
              <p className="text-xs text-green-100/70">Gestión de tienda</p>
            </div>
          </div>
          <button
            onClick={() => setNotice("La opción de cerrar sesión es demostrativa.")}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/80 hover:bg-white/10"
          >
            <LogOut size={18} /> Cerrar sesión
          </button>
        </div>
      </aside>

      <div className="min-h-screen lg:pl-64">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-[#e2dac2] bg-[#f5efdF]/95 px-4 backdrop-blur sm:px-7 lg:px-9">
          <div className="flex items-center gap-3">
            <button
              aria-label="Abrir menú"
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-white lg:hidden"
            >
              <Menu size={22} />
            </button>
            <div>
              <p className="text-xs text-slate-500">Panel de control</p>
              <p className="text-sm font-bold text-green-900">
                Administración
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              aria-label="Notificaciones"
              onClick={() => setNotice("No tienes notificaciones nuevas.")}
              className="relative rounded-full p-2 hover:bg-white"
            >
              <Bell size={20} />
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-green-700" />
            </button>
            <div className="hidden items-center gap-2 sm:flex">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce6d7] text-green-900">
                <ShieldCheck size={20} />
              </div>
              <span className="text-sm font-semibold">Administrador</span>
              <ChevronDown size={15} />
            </div>
          </div>
        </header>

        <main className="mx-auto max-w-[1600px] px-4 py-7 sm:px-7 lg:px-9">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[2px] text-green-800">
                <span className="mr-2">━</span> Administración
              </p>
              <h1 className="mt-2 text-3xl font-extrabold text-green-900 sm:text-4xl">
                {activeMenu === "Productos"
                  ? "Administración de productos"
                  : activeMenu}
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Gestiona el catálogo de AltmonAndes Sport y consulta el estado
                general de tu tienda.
              </p>
            </div>

            <button
              onClick={() => {
                setShowForm(true);
                setSelectedProduct(null);
              }}
              className="flex items-center justify-center gap-2 self-start rounded-xl bg-green-800 px-5 py-3.5 text-sm font-bold text-white shadow-sm hover:bg-green-900 sm:self-auto"
            >
              <Plus size={19} /> Agregar producto
            </button>
          </div>

          {notice && (
            <div className="mt-5 flex items-center justify-between rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-900">
              {notice}
              <button onClick={() => setNotice("")} aria-label="Cerrar aviso">
                <X size={17} />
              </button>
            </div>
          )}

          <section className="mt-7 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Productos registrados",
                value: String(products.length),
                detail: "En el catálogo",
                icon: Package,
              },
              {
                label: "Pedidos recibidos",
                value: "24",
                detail: "Dato de demostración",
                icon: ShoppingCart,
              },
              {
                label: "Usuarios registrados",
                value: "128",
                detail: "Dato de demostración",
                icon: Users,
              },
              {
                label: "Ventas del mes",
                value: formatCOP(2849500),
                detail: "Dato de demostración",
                icon: ChartNoAxesCombined,
              },
            ].map(({ label, value, detail, icon: Icon }) => (
              <article
                key={label}
                className="rounded-2xl border border-white bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm text-slate-500">{label}</p>
                    <p className="mt-3 text-2xl font-extrabold text-green-950">
                      {value}
                    </p>
                    <p className="mt-2 text-xs text-slate-400">{detail}</p>
                  </div>
                  <div className="rounded-xl bg-[#e7f2e5] p-3 text-green-800">
                    <Icon size={22} />
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="mt-7 overflow-hidden rounded-2xl border border-white bg-white shadow-sm">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-100 p-5 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-lg font-extrabold text-green-950">
                  Inventario de productos
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  Consulta los productos registrados en la tienda.
                </p>
              </div>

              <button
                onClick={() => setNotice("Reporte visual de demostración.")}
                className="flex items-center justify-center gap-2 self-start rounded-lg border border-green-700 px-4 py-2.5 text-sm font-semibold text-green-800 hover:bg-green-50"
              >
                <ClipboardList size={17} /> Ver reporte
              </button>
            </div>

            <div className="grid gap-3 border-b border-slate-100 p-4 md:grid-cols-3">
              <div className="flex items-center gap-2 rounded-lg border border-slate-300 px-3">
                <Search size={18} className="shrink-0 text-slate-400" />
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Buscar por nombre o categoría..."
                  className="min-w-0 flex-1 py-3 text-sm outline-none"
                />
              </div>

              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-green-700"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item === "Todas" ? "Todas las categorías" : item}
                  </option>
                ))}
              </select>

              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
                className="rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-green-700"
              >
                <option value="Todos">Todos los estados</option>
                <option value="Activo">Activo</option>
                <option value="Agotado">Agotado</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] text-left text-sm">
                <thead className="bg-[#faf9f5] text-xs text-slate-600">
                  <tr>
                    <th className="px-5 py-4 font-bold">Imagen</th>
                    <th className="px-4 py-4 font-bold">Nombre</th>
                    <th className="px-4 py-4 font-bold">Categoría</th>
                    <th className="px-4 py-4 font-bold">Precio</th>
                    <th className="px-4 py-4 font-bold">Estado</th>
                    <th className="px-4 py-4 font-bold">Acciones</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredProducts.map((product) => {
                    const originalIndex = products.findIndex(
                      (item) => item.id === product.id
                    );
                    const productStatus: ProductStatus =
                      originalIndex === 4 ? "Agotado" : "Activo";

                    return (
                      <tr key={product.id} className="hover:bg-[#fcfbf7]">
                        <td className="px-5 py-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-14 w-14 rounded-xl bg-slate-100 object-cover"
                          />
                        </td>
                        <td className="max-w-[190px] px-4 py-3 font-semibold text-slate-700">
                          {product.name}
                        </td>
                        <td className="px-4 py-3">
                          <span className="rounded-full bg-[#e5f3e5] px-3 py-1.5 text-xs font-medium text-green-800">
                            {product.category}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 font-medium">
                          {formatCOP(product.price)}
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                              productStatus === "Activo"
                                ? "bg-[#e1f2e4] text-green-800"
                                : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {productStatus}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => {
                                setSelectedProduct(product.id);
                                setShowForm(true);
                              }}
                              className="flex items-center gap-1.5 rounded-lg border border-green-600 px-3 py-2 text-xs font-semibold text-green-800 hover:bg-green-50"
                            >
                              <Pencil size={14} /> Editar
                            </button>
                            <button
                              onClick={() =>
                                setNotice(
                                  `La eliminación de "${product.name}" es solo visual.`
                                )
                              }
                              className="flex items-center gap-1.5 rounded-lg border border-red-300 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                            >
                              <Trash2 size={14} /> Eliminar
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 px-5 py-4 text-xs text-slate-500">
              <span>
                Mostrando {filteredProducts.length} de {products.length} productos.
              </span>
              <span>Datos de demostración · AltmonAndes Sport</span>
            </div>
          </section>

          <div className="mt-5 flex items-start gap-3 rounded-xl border border-[#e5dcc4] bg-white/60 p-4 text-xs leading-5 text-slate-500">
            <CircleHelp size={18} className="mt-0.5 shrink-0 text-green-800" />
            <p>
              Esta pantalla es una maqueta. Las métricas, el inventario y los
              estados no representan información de ventas real. La
              administración de datos se conectará posteriormente al backend.
            </p>
          </div>
        </main>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/40 p-4">
          <section className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-green-800">
                  Inventario
                </p>
                <h2 className="mt-1 text-2xl font-extrabold text-green-950">
                  {selectedProduct ? "Editar producto" : "Agregar producto"}
                </h2>
              </div>
              <button
                onClick={() => setShowForm(false)}
                aria-label="Cerrar formulario"
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Formulario de demostración para la evidencia visual. No guarda
              cambios en el inventario.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setShowForm(false);
                setNotice("Formulario de demostración completado. No se guardaron datos.");
              }}
            >
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Nombre del producto *
                </label>
                <input
                  required
                  defaultValue={
                    products.find((item) => item.id === selectedProduct)?.name ?? ""
                  }
                  placeholder="Ej. Mochila de senderismo 30 L"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Categoría *
                </label>
                <select
                  required
                  defaultValue={
                    products.find((item) => item.id === selectedProduct)?.category ?? ""
                  }
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-green-700"
                >
                  <option value="" disabled>Selecciona una categoría</option>
                  {categories.filter((item) => item !== "Todas").map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Precio (COP) *
                </label>
                <input
                  required
                  type="number"
                  min="0"
                  defaultValue={
                    products.find((item) => item.id === selectedProduct)?.price ?? ""
                  }
                  placeholder="189900"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-green-700"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Descripción *
                </label>
                <textarea
                  required
                  defaultValue={
                    products.find((item) => item.id === selectedProduct)?.description ?? ""
                  }
                  rows={3}
                  placeholder="Describe las características del producto..."
                  className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 text-sm outline-none focus:border-green-700"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 rounded-lg border border-slate-300 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 rounded-lg bg-green-800 px-4 py-3 text-sm font-bold text-white hover:bg-green-900"
                >
                  {selectedProduct ? "Guardar cambios" : "Guardar producto"}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </div>
  );
}