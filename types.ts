export interface Product {
  id: string;
  category: 'Dadih' | 'Dessert';
  name: string;
  description: string;
  price: number;
  unit: string;
  tags?: string[];
  imageSeed?: number; // For placeholder generation
}

export interface CartItem extends Product {
  quantity: number;
}

export interface OrderForm {
  name: string;
  phone: string;
  type: 'pickup' | 'delivery';
  dateTime: string;
  address: string;
  notes: string;
}

export type CartView = 'list' | 'checkout';