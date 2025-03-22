export interface Product {
  id: string;
  name: string;
  description: string;
  subtitle: string;
  price: number;
  size: string;
  imageType: string;
  modelUrl: string;
  benefits: string[];
  ingredients: string[];
  usage: string;
}

export const products: Record<string, Product> = {
  'haven-glow': {
    id: 'haven-glow',
    name: 'Haven Glow',
    description: 'Nourishing Body Oil',
    subtitle: 'With Argan Oil & Vitamin E',
    price: 1499,
    size: '200ml',
    imageType: 'oil',
    modelUrl: 'https://www.pacdora.com/share?filter_url=pst4uiokns',
    benefits: [
      'Seals in moisture',
      'Enhances natural radiance',
      'Provides lasting nourishment',
      'Improves skin tone',
      'Adds healthy sheen'
    ],
    ingredients: [
      'Argan Oil',
      'Vitamin E',
      'Jojoba Oil',
      'Sweet Almond Oil',
      'Natural Fragrance'
    ],
    usage: 'Apply to damp skin after bathing. Massage in upward motions until fully absorbed.'
  },
  'haven-bliss': {
    id: 'haven-bliss',
    name: 'Haven Bliss',
    description: 'Moisturizing Body Lotion',
    subtitle: 'With Shea Butter & Almond Oil',
    price: 1299,
    size: '250ml',
    imageType: 'lotion',
    modelUrl: 'https://www.pacdora.com/share?filter_url=pss3674dl4',
    benefits: [
      'Provides 24-hour hydration',
      'Nourishes and softens skin',
      'Locks in moisture',
      'Improves skin elasticity',
      'Creates protective barrier'
    ],
    ingredients: [
      'Shea Butter',
      'Sweet Almond Oil',
      'Vitamin E',
      'Glycerin',
      'Natural Fragrance'
    ],
    usage: 'Apply generously all over body after bathing or whenever skin feels dry.'
  },
  'haven-muse': {
    id: 'haven-muse',
    name: 'Haven Muse',
    description: 'Exfoliating Body Scrub',
    subtitle: 'With Sugar Crystals & Coconut Oil',
    price: 999,
    size: '200g',
    imageType: 'scrub',
    modelUrl: 'https://www.pacdora.com/share?filter_url=psc7mpldah',
    benefits: [
      'Gentle exfoliation',
      'Removes dead skin cells',
      'Promotes cell renewal',
      'Leaves skin soft and smooth',
      'Prepares skin for moisturizing'
    ],
    ingredients: [
      'Sugar Crystals',
      'Coconut Oil',
      'Vitamin E',
      'Sweet Almond Oil',
      'Natural Fragrance'
    ],
    usage: 'Use 2-3 times per week. Apply to damp skin in circular motions, focusing on rough areas. Rinse thoroughly.'
  }
};

export const BUNDLE_DISCOUNT = 0.15; // 15% discount

export const getProductList = (): Product[] => {
  return Object.values(products);
};

export const getProductById = (id: string): Product | null => {
  return products[id] || null;
};

export const getTotalPrice = (): number => {
  return Object.values(products).reduce((sum, product) => sum + product.price, 0);
};

export const getBundlePrice = (): number => {
  return getTotalPrice() * (1 - BUNDLE_DISCOUNT);
}; 