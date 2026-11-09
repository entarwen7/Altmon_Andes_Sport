export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  details: string;
}

export const products: Product[] = [
  {
    id: "mochila",
    name: "Mochila de senderismo 30 L",
    category: "Senderismo",
    price: 189900,
    description:
      "Mochila práctica para caminatas y excursiones, con compartimentos funcionales y correas ajustables.",
    image:
      "https://images.unsplash.com/photo-1622260614153-03223fb72052?auto=format&fit=crop&w=900&q=80",
    details: "Verde bosque · 30 litros",
  },
  {
    id: "botas",
    name: "Botas de trekking",
    category: "Senderismo",
    price: 249900,
    description:
      "Botas de diseño outdoor para acompañarte en caminatas y recorridos por senderos.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    details: "Arena · Tallas 36 a 44",
  },
  {
    id: "chaqueta",
    name: "Chaqueta cortavientos",
    category: "Ropa deportiva",
    price: 159900,
    description:
      "Chaqueta ligera para caminatas y actividades deportivas al aire libre.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
    details: "Verde oliva · Tallas S a XL",
  },
  {
    id: "carpa",
    name: "Carpa de camping para 2",
    category: "Camping",
    price: 329900,
    description:
      "Carpa compacta para escapadas, campamentos y experiencias en la naturaleza.",
    image:
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=900&q=80",
    details: "Arena y verde · 2 personas",
  },
  {
    id: "botella",
    name: "Botella térmica 750 ml",
    category: "Accesorios",
    price: 69900,
    description:
      "Botella reutilizable para llevar hidratación al gimnasio, al trabajo o durante tus recorridos.",
    image:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=80",
    details: "Verde bosque · 750 ml",
  },
  {
    id: "esterilla",
    name: "Esterilla de entrenamiento",
    category: "Entrenamiento",
    price: 89900,
    description:
      "Esterilla para ejercicios de movilidad, estiramientos y entrenamiento.",
    image:
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?auto=format&fit=crop&w=900&q=80",
    details: "Verde salvia · 6 mm",
  },
];

export function formatCOP(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(price);
}