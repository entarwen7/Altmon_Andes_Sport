import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { formatCOP } from "../data/product";
import type { Product } from "../data/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <Link
        to={`/producto/${product.id}`}
        className="overflow-hidden rounded-xl bg-slate-100"
      >
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col p-2 pt-4">
        <span className="text-xs font-bold text-green-800">
          {product.category}
        </span>

        <h2 className="mt-2 text-lg font-bold text-slate-700">
          {product.name}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          {product.details}
        </p>

        <p className="mt-3 text-xl font-extrabold text-green-800">
          {formatCOP(product.price)}
        </p>

        <Link
          to={`/producto/${product.id}`}
          className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-green-800 px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-green-900"
        >
          Ver producto
          <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
