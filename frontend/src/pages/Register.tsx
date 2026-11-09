
import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Register() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#f2ead2]">
      <Navbar />

      <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-8 px-5 py-10 lg:grid-cols-2">
        {/* Presentación de la marca */}
        <section className="hidden rounded-3xl bg-gradient-to-br from-[#103d27] to-[#397348] p-12 text-white lg:block">
          <p className="text-xs font-bold uppercase tracking-[3px] text-green-200">
            Únete a la comunidad
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight">
            Prepárate para descubrir nuevos caminos.
          </h1>

          <p className="mt-5 max-w-md leading-7 text-white/80">
            Crea tu cuenta y encuentra productos para tus entrenamientos,
            recorridos y aventuras.
          </p>

          <p className="mt-16 text-sm text-green-100">
            AltmonAndes Sport · Movimiento y aventura.
          </p>
        </section>

        {/* Formulario de registro */}
        <section className="mx-auto w-full max-w-md rounded-3xl bg-white p-7 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-widest text-green-800">
            Nueva cuenta
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-green-950">
            Crear cuenta
          </h2>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            Completa tus datos para formar parte de AltmonAndes Sport.
          </p>

          <form
            className="mt-7 space-y-4"
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setMessage(true);
            }}
          >
            {/* Nombre completo */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Nombre completo
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 focus-within:border-green-700">
                <UserRound size={18} className="text-slate-400" />

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  placeholder="Tu nombre completo"
                  className="w-full py-3 text-sm outline-none"
                />
              </div>
            </div>

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
                  autoComplete="email"
                  required
                  placeholder="nombre@correo.com"
                  className="w-full py-3 text-sm outline-none"
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Contraseña
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-slate-300 px-4 focus-within:border-green-700">
                <LockKeyhole size={18} className="text-slate-400" />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  minLength={8}
                  required
                  placeholder="Mínimo 8 caracteres"
                  className="w-full py-3 text-sm outline-none"
                />

                <button
                  type="button"
                  aria-label={
                    showPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                  onClick={() =>
                    setShowPassword((previous) => !previous)
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

            {/* Términos y privacidad */}
            <label className="flex items-start gap-2 text-xs leading-5 text-slate-600">
              <input
                type="checkbox"
                name="terms"
                required
                className="mt-1 accent-green-800"
              />

              <span>
                Acepto los términos y condiciones y la política de privacidad.
              </span>
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-green-800 px-5 py-3.5 text-sm font-bold text-white hover:bg-green-900"
            >
              Crear cuenta
            </button>

            {message && (
              <p
                role="status"
                className="rounded-lg bg-amber-50 p-3 text-sm text-amber-800"
              >
                Esta es una demostración visual. El registro todavía no guarda
                datos.
              </p>
            )}
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            ¿Ya tienes cuenta?{" "}
            <Link
              to="/login"
              className="font-bold text-green-800 hover:underline"
            >
              Inicia sesión
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
