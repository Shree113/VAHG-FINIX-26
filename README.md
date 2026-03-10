# LOS REYES '26

Welcome to the official repository for **LOS REYES '26**, a National Level Technical Symposium organized by the **Department of Computer Science and Engineering** at **JCT College of Engineering and Technology**.

## 📅 Event Dates
**March 7 & 8, 2026**

## 🚀 About The Event
Los Reyes '26 is an exciting technical symposium designed to bring together brilliant minds from various colleges to showcase their technical prowess and participate in engaging non-technical activities.

## 🌐 Website Architecture
The project entails a dynamic web application built using:
- **React 18** (Standalone via Babel for the `losreyes26.html` entry point)
- **Vite** (Modern build setup available in the `losreyes26-vite` directory)
- **HTML5 & CSS3** (Custom styled with immersive animations, utilizing Orbitron & Exo 2 fonts)

## 📂 Folder Structure
```text
jfinagles/
├── losreyes26.html         # Standalone HTML entry point
├── README.md               # Project documentation
└── losreyes26-vite/        # Vite + React project directory
    └── losreyes26/
        ├── package.json    # Dependencies and scripts
        ├── index.html      # Vite entry point
        ├── vite.config.js  # Vite configuration
        ├── public/         # Public statically served files
        └── src/            # Source code for Vite React app
            ├── main.jsx    # React mounting point
            ├── App.jsx     # Main application container
            ├── index.css   # Global styling and CSS variables
            ├── assets/     # Static media assets (posters, icons)
            ├── components/ # React functional components
            │   ├── Navbar.jsx
            │   ├── Hero.jsx
            │   ├── Events.jsx
            │   ├── EventCard.jsx
            │   ├── Register.jsx
            │   └── Footer.jsx
            └── data/       # JSON / JS static event data
```

## 🎯 Events

### Day 1: Technical Events
- **Paper Presentation:** Present your research and innovative ideas. (Team of 2-4)
- **Technical Quiz:** Test your technical acumen in a multi-round quiz. (Individual)
- **Code Debugging:** Identify and fix bugs in complex code snippets. (Individual)
- **Vibe Coding:** Use your logic and AI tools to build a working application. (Team of 1-2)

### Day 1: Non-Technical Events
- **Rhythm Blast:** Showcase your musical or dance talent. (Individual)
- **Spot The Lie:** A fun game of deception and deduction. (Individual)

### Day 2: Webinar
- **Career AI Nexus '26:** An exclusive webinar exploring the intersection of artificial intelligence and career development.

## 🧑‍🏫 Coordinators

**Staff Coordinator:**
- Prof. U Ashok Kumar (CSE) - Mobile: 7708776431

**Student Coordinators:**
- S.KARTHICK (CSE) - Mobile: 6379001194
- K.SHARMI (CSE) - Mobile: 8122676S70

## 🛠️ Setup & Local Development

### Option 1: Standalone HTML
Simply open `losreyes26.html` in any modern web browser. No complicated setup or build step is required as it loads React directly via a Babel standalone script.

### Option 2: Vite Project
If you prefer developing using the Vite build tool:
1. Navigate to the Vite directory:
   ```bash
   cd losreyes26-vite
   ```
2. Install dependencies (Node.js required):
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## 📜 License
*This project is created for the JCT College of Engineering and Technology symposium. All rights reserved.*
