import { Product } from './types';

export const WHATSAPP_NUMBER = '60126872069';

export const PRODUCTS: Product[] = [
  // Dadih Series
  {
    id: "dadih-original",
    category: "Dadih",
    name: "Dadih Susu Original",
    description: "Lembut, berkrim, rasa susu klasik, tidak terlalu manis.",
    price: 2.50,
    unit: "per cup (80 ml)",
    tags: ["signature", "kids friendly"],
    imageSeed: 101
  },
  {
    id: "dadih-coklat",
    category: "Dadih",
    name: "Dadih Coklat",
    description: "Dadih coklat pekat, sesuai untuk penggemar coklat.",
    price: 2.80,
    unit: "per cup",
    tags: ["popular"],
    imageSeed: 102
  },
  {
    id: "dadih-strawberi",
    category: "Dadih",
    name: "Dadih Strawberi",
    description: "Rasa strawberi ringan dengan warna pink lembut, favourite kanak kanak.",
    price: 2.80,
    unit: "per cup",
    tags: ["kids friendly"],
    imageSeed: 103
  },
  {
    id: "dadih-jagung",
    category: "Dadih",
    name: "Dadih Jagung",
    description: "Dadih jagung manis dengan sedikit tekstur jagung, sedap sejuk.",
    price: 2.80,
    unit: "per cup",
    imageSeed: 104
  },
  {
    id: "dadih-pandan",
    category: "Dadih",
    name: "Dadih Pandan Gula Melaka",
    description: "Rasa pandan wangi dengan lapisan sos gula Melaka.",
    price: 3.00,
    unit: "per cup",
    tags: ["traditional"],
    imageSeed: 105
  },
  {
    id: "dadih-milo",
    category: "Dadih",
    name: "Dadih Milo",
    description: "Dadih coklat Milo, sesuai untuk budak sekolah dan Milo lovers.",
    price: 3.00,
    unit: "per cup",
    imageSeed: 106
  },
  {
    id: "dadih-oreo",
    category: "Dadih",
    name: "Dadih Oreo Crunch",
    description: "Dadih susu dengan hancuran biskut Oreo di atas.",
    price: 3.50,
    unit: "per cup",
    tags: ["bestseller"],
    imageSeed: 107
  },
  {
    id: "dadih-mango",
    category: "Dadih",
    name: "Dadih Mango",
    description: "Dadih buah mangga yang manis dan berbau harum.",
    price: 3.00,
    unit: "per cup",
    imageSeed: 108
  },
  {
    id: "dadih-lychee",
    category: "Dadih",
    name: "Dadih Lychee",
    description: "Rasa lychee yang lembut dan segar, sesuai untuk jamuan.",
    price: 3.00,
    unit: "per cup",
    imageSeed: 109
  },
  {
    id: "dadih-mix-box",
    category: "Dadih",
    name: "Dadih Mix Box 12 Cups",
    description: "Kombinasi 3 perisa pilihan (Susu, Coklat, Strawberi, dll).",
    price: 32.00,
    unit: "per box",
    tags: ["value pack"],
    imageSeed: 110
  },
  // Other Desserts
  {
    id: "mini-trifle",
    category: "Dessert",
    name: "Mini Trifle Cups",
    description: "Lapisan kek vanilla, custard, jelly dan buah. Min order 6 cups.",
    price: 4.50,
    unit: "per cup",
    imageSeed: 201
  },
  {
    id: "puding-karamel",
    category: "Dessert",
    name: "Puding Karamel",
    description: "Puding telur lembut dengan sos karamel pahit manis.",
    price: 5.00,
    unit: "per bekas",
    tags: ["classic"],
    imageSeed: 202
  },
  {
    id: "brownies-fudge",
    category: "Dessert",
    name: "Brownies Fudge Potong",
    description: "Brownies coklat fudgy, dipotong kecil. Anggaran 16 potong.",
    price: 28.00,
    unit: "per box",
    tags: ["party"],
    imageSeed: 203
  },
  {
    id: "cheesecake-cup",
    category: "Dessert",
    name: "Mini Cheesecake Cup",
    description: "Cheesecake dalam cup dengan base biskut dan topping berry. Min 6 cups.",
    price: 6.00,
    unit: "per cup",
    imageSeed: 204
  },
  {
    id: "agar-kelapa",
    category: "Dessert",
    name: "Agar Agar Kelapa",
    description: "Agar agar dua lapis, santan dan sirap, rasa klasik kenduri.",
    price: 18.00,
    unit: "per loyang",
    imageSeed: 205
  },
  {
    id: "jelly-buah",
    category: "Dessert",
    name: "Jelly Buah Mix Cup",
    description: "Jelly pelbagai warna dengan potongan buah dalam cup. Min 10 cups.",
    price: 2.80,
    unit: "per cup",
    imageSeed: 206
  },
  {
    id: "box-raya",
    category: "Dessert",
    name: "Dessert Box Raya",
    description: "Campuran 6 dadih + brownies + agar agar.",
    price: 45.00,
    unit: "per box",
    tags: ["gift"],
    imageSeed: 207
  },
  {
    id: "box-office",
    category: "Dessert",
    name: "Dessert Box Office",
    description: "12 dadih mix perisa + 1 tray brownies potong untuk office sharing.",
    price: 75.00,
    unit: "per set",
    tags: ["corporate"],
    imageSeed: 208
  },
  {
    id: "kids-pack",
    category: "Dessert",
    name: "Kids Party Pack",
    description: "20 dadih mini assorted perisa untuk birthday atau party sekolah.",
    price: 60.00,
    unit: "per pack",
    imageSeed: 209
  },
  {
    id: "custom-table",
    category: "Dessert",
    name: "Custom Dessert Table",
    description: "Pakej meja dessert kecil untuk event. Mula dari RM150.",
    price: 150.00,
    unit: "per set",
    tags: ["event"],
    imageSeed: 210
  }
];

export const TESTIMONIALS = [
  {
    text: "Dadih dia sangat lembut, anak anak suka.",
    author: "Puan Aisyah"
  },
  {
    text: "Senang untuk jamuan office, tinggal susun je.",
    author: "Farah, KL"
  },
  {
    text: "Packing kemas, rasa pun sedap, tak terlalu manis.",
    author: "Kak Ina"
  }
];