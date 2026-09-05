# EstateX - Modern Real Estate Marketplace

A premium, modern real estate marketplace frontend built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 Browse and search properties with advanced filters
- 👥 Connect with verified real estate agents
- 💾 Save favorite properties to your dashboard
- 📱 Fully responsive mobile-first design
- ⚡ Fast, optimized performance
- 🎨 Premium UI with orange and dark color scheme
- 🔍 Real-time property search and filtering

## Tech Stack

- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Routing:** Next.js App Router

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Immax007/real-estate-website.git
cd real-estate-website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
estate-x/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── agents/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── properties/
│   │   ├── [id]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── register/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── PropertyCard.tsx
│   ├── PropertySearch.tsx
│   └── SectionHeading.tsx
│
├── data/
│   └── properties.ts
│
├── types/
│   └── property.ts
│
└── public/
```

## Available Routes

- `/` - Home page with hero, featured properties, and call-to-action
- `/properties` - Property marketplace with filters
- `/properties/[id]` - Property detail page
- `/agents` - Professional agents listing
- `/about` - About EstateX
- `/contact` - Contact form and information
- `/login` - User login
- `/register` - User registration
- `/dashboard` - User dashboard with saved properties and inspections

## Features Implemented

### Pages
- ✅ Home page with hero section, search, featured properties, and trust indicators
- ✅ Properties marketplace with real-time filtering
- ✅ Property detail page with agent contact
- ✅ Agents page with verified agent profiles
- ✅ About page with company mission and values
- ✅ Contact page with form and information
- ✅ Login page
- ✅ Register page
- ✅ Dashboard with saved properties, messages, and inspections

### Components
- ✅ Responsive Navbar with mobile menu
- ✅ Premium Footer with social links
- ✅ Property Card with images, features, and links
- ✅ Property Search component
- ✅ Section Heading component

### Design
- ✅ Premium color scheme (Orange #f97316 and Dark #0f172a)
- ✅ Responsive design for all screen sizes
- ✅ Smooth animations and transitions
- ✅ Accessibility-friendly components
- ✅ Modern typography and spacing

## Mock Data

The application includes 6 mock properties with realistic Nigerian real estate data:

1. Modern Luxury Duplex - ₦85m (Lekki Phase 1)
2. Contemporary Family Home - ₦120m (Ikoyi)
3. Elegant Garden Villa - ₦65m (Ajah)
4. Luxury City Apartment - ₦8.5m/year (Victoria Island)
5. Executive Penthouse - ₦180m (Banana Island)
6. Modern Family Apartment - ₦3.5m/year (Yaba)

## Build for Production

```bash
npm run build
npm start
```

## Future Enhancements

- Backend API integration with NestJS
- Real authentication system
- Property image uploads
- Agent messaging system
- Payment processing
- Property reviews and ratings
- Advanced analytics dashboard
- Email notifications

## Frontend-Only Note

This is **Phase 1** of EstateX - a frontend prototype. The following features are frontend-only:

- Authentication (forms only, no backend)
- Property filtering (client-side with mock data)
- Favorites/saved properties (local state)
- Contact forms (no email backend)
- Agent messaging (UI only)

These will be connected to a NestJS backend in future phases.

## License

MIT License

## Author

Immax007
