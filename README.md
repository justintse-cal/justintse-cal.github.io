# Personal Portfolio Website

A modern, high-performance, and interactive personal portfolio web application built with **React 19**, **Vite**, **GSAP**, and **Swiper**. Designed with dark theme aesthetics, dynamic animations, and interactive theme customization.

Live Demo: [https://justintse-cal.github.io](https://justintse-cal.github.io)

## ✨ Features

- **Dynamic Interactive Themes**: Real-time theme customizer allowing visitors to switch background tones, accent colors, and layout aesthetics.
- **Fluid GSAP Animations**: Smooth transitions, scroll triggers, and micro-interactions.
- **Project Showcase Carousel**: Interactive project slider powered by Swiper with detailed drawer modals for each project.
- **Custom Cursor & Smooth Micro-Interactions**: Modern pointer interactions for an immersive user experience.
- **Fully Responsive**: Optimized across all device viewports from mobile screens to desktop displays.
- **Fast Performance & Modern Tech Stack**: Powered by Vite and React 19 for instantaneous load times and lightweight client bundles.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, HTML5, Vanilla CSS3 (Custom Design System)
- **Animations**: GSAP (GreenSock Animation Platform)
- **Carousel & UI**: Swiper.js, Lucide React Icons
- **Testing**: Vitest, React Testing Library, JSDOM
- **Deployment**: GitHub Pages (`gh-pages`)

## 🚀 Getting Started Locally

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your system.

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/justintse-cal/justintse-cal.github.io.git
   cd justintse-cal.github.io
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your web browser.

4. **Run unit tests**:
   ```bash
   npm run test
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```


## 📦 Deployment to GitHub Pages

This project is configured to deploy directly to GitHub Pages.

1. **Build and Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

2. The `gh-pages` script automatically publishes the contents of the `dist/` directory to the `gh-pages` branch on GitHub.

3. Under repository **Settings** $\rightarrow$ **Pages** on GitHub, set the deployment branch to `gh-pages` (or `main` if deploying via GitHub Actions).

## 📄 License

This project is licensed under the MIT License. Feel free to fork this repository, customize it with your own project details, and use it as a foundation for your own personal portfolio!
