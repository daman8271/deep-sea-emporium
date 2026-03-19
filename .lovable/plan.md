# Mehtab Aquarium — Mobile-First Aquarium Shop Website

## Design System

- **Background**: Full-site deep ocean gradient (navy `#041C2C` → royal blue `#0057B7` → teal `#0a4d6e`)
- **Glassmorphism**: All cards, navbars, modals use `backdrop-filter: blur(16px)`, `rgba(255,255,255,0.08)` bg, white border at 18% opacity, 20px radius
- **Accent**: Cyan `#00D4FF` for active states, highlights, glows
- **Font**: Poppins (Bold headings, Regular body, Light captions), all text white/white-opacity
- **Badges**: Purple glow (`#9B59B6`) for premium fish (₹8000+), soft green for beginner-friendly
- **Logo**: "Mehtab" in white, "Aquarium" in cyan, Poppins Bold

## Pages & Features

### Page 1 — Home / Landing

- Full-screen hero with the aquarium fish photo I uploaded as the background image — use exactly that uploaded image, not a placeholder or clownfish
- Overlay text: "Welcome to / Mehtab Aquarium / Your house without an aquarium is just walls." + store info: "Visit us at our stores in Udhampur & Jammu — 25 years of trust, 19 varieties of fish, custom aquariums built for you."
- Glowing "Get Started" button with fish icon
- Horizontal scrollable category pills (All, Fish, Aquariums, Pumps & Filters, Plants, Accessories, Food)
- Featured sections: Popular Fish, Custom Aquariums, Plants & Accessories — horizontal scroll glass cards
- Maintenance service banner with WhatsApp CTA — **clearly showing price starting from ₹499**
- Beginner's Corner info card
- Sticky bottom nav (Home, Shop, Cart, Contact) — glassmorphism, active = cyan
- Floating WhatsApp button on all pages

### Page 2 — Shop / Product Listing

- Glass navbar with logo, search, bell icons
- Glass search bar with filter icon
- Category filter tabs (active = cyan pill)
- Product sections with "See All" + horizontal scroll cards
- Card: fish photo, glass price badge, heart icon, name, tagline, arrow button
- Premium/beginner badges; 2-column grid for "All" view

### Page 3 — Product Detail

- Back arrow, product name, search/bell icons
- Specs header with price badge
- Image carousel with dot indicators
- 3×2 specs grid (Weight, Size, Temperature, Tank Size, Age, Diet) — glass tiles
- Name + star rating, description with "Read More"
- Beginner/premium badges
- Sticky "Add to Cart >>>" bottom bar
- Floating WhatsApp button

### Page 4 — Custom Aquarium

- Hero heading + subheading
- Glass pricing cards (Ready-made ₹600 through Cabinet = Contact)
- Popular sizes section, fish capacity guide, growth tip card
- WhatsApp CTA with pre-filled message: "Hi! I'd like to order a custom aquarium from Mehtab Aquarium. Please guide me."

### Page 5 — Beginner's Guide

- Glass tip cards with icons covering starter fish, tanks, equipment, feeding, water change, winter care tips
- "Shop Beginner Starter Kits" CTA

### Page 6 — Contact / About Us

- About paragraph (25 years, 19 varieties, Jammu & Kashmir)
- Two branch cards (Udhampur & Jammu) with placeholder contact details
- WhatsApp CTA, Google Maps placeholders, social icons
- "No home delivery — please visit your nearest branch" note

### Cart — Slide-Up Drawer

- Triggered from bottom nav cart icon (shows count badge in cyan)
- Product image, name, price, quantity controls, remove button
- Subtotal + "Order via WhatsApp" button generating pre-filled message listing every item, quantity and total amount sent to +91XXXXXXXXXX

## Data

- 19 fish types with realistic specs, badges, and prices hardcoded:


| Name                     | Badge             | Price    |
| ------------------------ | ----------------- | -------- |
| Koi Carp                 | ✅ Beginner        | ₹150     |
| Guppy                    | ✅ Beginner        | ₹30      |
| Blue Goldfish            | ✅ Beginner        | ₹80      |
| Koi Carp Coco            | ✅ Beginner        | ₹200     |
| Catfish                  | ✅ Beginner        | ₹60      |
| Goldfish                 | ✅ Beginner        | ₹50      |
| Calico Goldfish          | —                 | ₹120     |
| Shubunkin Goldfish       | —                 | ₹100     |
| Oscar                    | —                 | ₹250     |
| Blood Parrot             | —                 | ₹400     |
| Discus                   | —                 | ₹800     |
| Arowana                  | 👑 Premium Purple | ₹10,000+ |
| Bubble Eye Goldfish      | —                 | ₹300     |
| Angelfish                | —                 | ₹150     |
| Mono Fish                | —                 | ₹200     |
| Pencil Fish              | —                 | ₹80      |
| Red Tail Black Shark     | —                 | ₹350     |
| Bala Shark Silver Shark  | —                 | ₹300     |
| Bristlenose Pleco Onkara | —                 | ₹180     |


- For every fish, auto-fill realistic specifications (temperature, size, diet, tank size, age, weight) based on actual known data for each species
- Aquarium products:


| Name                    | Price              |
| ----------------------- | ------------------ |
| Ready-made Aquarium     | ₹600               |
| Basic Setup 24×12×15    | ₹1,500             |
| Standard Setup 30×12×15 | ₹2,500             |
| Custom Aquarium         | ₹1,500 – ₹1,00,000 |
| Cabinet Aquarium        | Contact for Price  |


- Equipment:


| Name                         | Price     |
| ---------------------------- | --------- |
| Basic Pump                   | ₹200      |
| Standard Filter              | ₹350      |
| Aquarium Maintenance Service | From ₹499 |


- Plants:


| Name                     | Type       | Price |
| ------------------------ | ---------- | ----- |
| Amazon Plant             | Real       | ₹120  |
| Red Comba                | Real       | ₹100  |
| Green Comba              | Real       | ₹90   |
| Decorative Plastic Plant | Artificial | ₹60   |


- Accessories:


| Name                          | Price |
| ----------------------------- | ----- |
| Gravel                        | ₹80   |
| Decorative Toys and Artifacts | ₹100+ |
| Packaged Fish Food            | ₹99   |


- All prices in ₹
- WhatsApp number placeholder +91XXXXXXXXXX
- No backend, no login, no payment gateway,