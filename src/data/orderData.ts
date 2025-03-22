export interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageType: string;
}

export interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  country: string;
}

export const dummyOrderItems: OrderItem[] = [
  {
    id: 'oil',
    name: 'Haven Glow - Nourishing Body Oil',
    price: 599,
    quantity: 1,
    imageType: 'oil'
  },
  {
    id: 'lotion',
    name: 'Haven Bliss - Moisturizing Body Lotion',
    price: 599,
    quantity: 1,
    imageType: 'lotion'
  }
];

export const dummyShippingDetails: ShippingDetails = {
  firstName: 'Juan',
  lastName: 'Dela Cruz',
  email: 'juan.delacruz@example.com',
  phone: '+63 912 345 6789',
  address: '123 Main Street',
  city: 'Manila',
  province: 'Metro Manila',
  postalCode: '1000',
  country: 'Philippines'
};

export const generateOrderNumber = () => {
  return 'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}; 