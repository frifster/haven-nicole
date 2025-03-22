# Haven - Premium Skincare Collection

Haven is a modern e-commerce website showcasing a premium collection of body care products. The website features interactive 3D product models, detailed product information, and a seamless shopping experience.

## Features

- **Interactive 3D Product Visualization**: Each product features a detailed 3D model powered by Pacdora, allowing customers to view products from all angles
- **Product Collection**:
  - Haven Glow: Nourishing Body Oil with Argan Oil & Vitamin E
  - Haven Bliss: Moisturizing Body Lotion with Shea Butter & Almond Oil
  - Haven Muse: Exfoliating Body Scrub with Sugar Crystals & Coconut Oil
- **Bundle Offering**: Special discounted bundle featuring all three products
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop and mobile devices
- **Shopping Cart**: Interactive shopping cart with real-time updates

## Tech Stack

- React
- TypeScript
- React Router for navigation
- CSS Modules for styling
- Vite for build tooling

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd haven
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:5173`

## Project Structure

```
haven/
├── src/
│   ├── components/         # Reusable components
│   ├── context/           # React context providers
│   ├── data/             # Product data and utilities
│   ├── pages/            # Page components
│   ├── styles/           # Global styles
│   └── App.tsx           # Main application component
├── public/               # Static assets
└── package.json         # Project dependencies and scripts
```

## Key Components

- **FeaturedProducts**: Displays the collection of products with 3D models
- **Product**: Individual product page with detailed information
- **Bundle**: Special bundle offer page
- **Cart**: Shopping cart functionality

## Product Data

Product information is centralized in `src/data/products.ts`, making it easy to update product details, prices, and 3D model URLs.

## Styling

The application uses CSS modules for component-specific styling, ensuring style isolation and maintainability. Each component has its own CSS file for styles scoped to that component.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- 3D Models powered by [Pacdora](https://www.pacdora.com)
- Icons from [Your Icon Provider]
- Design inspiration from modern e-commerce platforms
