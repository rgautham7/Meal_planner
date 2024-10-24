# Plate Perfect

**Plate Perfect** is a Next.js application designed to simplify meal planning. It offers personalized meal plans, generates grocery lists, and provides a seamless user experience with both light and dark themes.

## Features

- **Personalized Meal Plans**: Tailor meals to your dietary needs and fitness goals.
- **Grocery List Generation**: Automatically create detailed grocery lists based on your meal plans.
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Dark Mode Support**: Easily switch between light and dark themes.

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (version 14 or later)
- **npm** (version 6 or later)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mealcraft.git
   cd mealcraft
```

2. Install the dependencies:

```bash
npm install
```

Running the Development Server
Start the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser to view the application.

###Building for Production
To create an optimized production build:

```bash
npm run build
```
##Start the production server:

```bash
npm start
```

##Project Structure
src/app: Main application files, including the entry point and layout.
src/components: Reusable React components used throughout the application.
src/components/ui: UI-specific components like buttons and cards.
src/lib: Utility functions and helpers.
src/styles: Global styles and Tailwind CSS configuration.
Key Components
NavBar
The navigation bar includes a dark mode toggle.

```typescript
// src/components/NavBar.tsx
// Lines 5 to 102
```

###MovingBorderButton
A button component with animated borders.

```typescript
// src/components/ui/MovingBorderButton.tsx
// Lines 13 to 73
```

###TestimonialSection
Displays user testimonials.

```typescript
// src/components/TestimonialSection.tsx
// Lines 34 to 74
```

##Styling
The project uses Tailwind CSS for styling. The configuration is located in tailwind.config.ts:

```typescript
// tailwind.config.ts
// Lines 8 to 48
```

##Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

##License
This project is licensed under the MIT License.

##Contact
For any inquiries, please contact gauthamramesh93442@gmail.com
