
import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f2ead2]">
      <Navbar />

      <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-8 px-5 py-10 lg:grid-cols-2">
        {/* Presentación de la marca */}
        <section className="hidden rounded-3xl bg-gradient-to-br from-[#103d27] to-[#397348] p-12 text-white lg:block">
          <p className="text-xs font-bold uppercase tracking-[3px] text-green-200">
            Bienvenido de vuelta
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight">
            Tu próxima aventura comienza aquí.
          </h1>

          <p className="mt-5 max-w-md leading-7 text-white/80">
            Accede a tu cuenta y descubre productos para acompañar tus
            entrenamientos y recorridos al aire libre.
          </p>

          <p className="mt-16 text-sm text-green-100">
            AltmonAndes Sport · Explora. Entrena. Disfruta.
          </p>
        </section>

        {/* Formulario de inicio de sesión */}
        <section className="mx-auto w-full max-w-md rounded-3xl bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-green-800">
            Mi cuenta
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-green-950">
            Iniciar sesión
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Ingresa tus datos para continuar en AltmonAndes Sport.
          </p>

          <form
            className="mt-7 space-y-5"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setMessage(true);
            }}
          >
            {/* Correo electrónico */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Correo electrónico
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 focus-within:border-green-700">
                <Mail size={18} className="text-slate-400" />

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="nombre@correo.com"
                  className="w-full py-3.5 text-sm outline-none"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <div className="mb-2 flex justify-between gap-3">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-slate-700"
                >
                  Contraseña
                </label>

                <button
                  type="button"
                  onClick={() => setMessage(true)}
                  className="text-xs font-semibold text-green-800"
                >
                  ¿La olvidaste?
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 focus-within:border-green-700">
                <LockKeyhole size={18} className="text-slate-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  placeholder="Ingresa tu contraseña"
                  className="w-full py-3.5 text-sm outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((previous) => !previous)}
                  aria-label={
                    showPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                  className="text-slate-400"
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* Recordar sesión */}
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input
                type="checkbox"
                name="remember"
                className="accent-green-800"
              />
              Recordarme
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-800 px-5 py-3.5 text-sm font-bold text-white hover:bg-green-900"
            >
              Ingresar
            </button>

            {message && (
              <p
                role="status"
                className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800"
              >
                Esta es una demostración visual. La autenticación todavía no
                está conectada.
              </p>
            )}
          </form>

          <p className="mt-7 text-center text-sm text-slate-600">
            ¿No tienes una cuenta?{" "}
            <Link
              to="/registro"
              className="font-bold text-green-800 hover:underline"
            >
              Regístrate aquí
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
