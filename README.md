# SAN Web Technology — Task 1: Responsive Company Web Pages

> **Full-Stack Development Internship Program**  
> **Level 1: Beginner — Task 1**  
> *"Build the browser-side foundation first. Hands-on. Doable. Portfolio-ready."*

---

## 📖 Project Overview

This repository contains the complete implementation of **Task 1: Responsive Company Web Pages** developed for the **SAN Web Technology Full-Stack Development Internship**. 

The goal of this task is to construct a modern, production-grade, 100% responsive corporate website using only foundational browser technologies: **semantic HTML5**, **modern CSS3 (Flexbox & CSS Grid)**, and **vanilla JavaScript**. The website consists of three seamlessly integrated pages:

1. **Home Page (`index.html`)**: Corporate landing page featuring brand identity, hero section with call-to-actions, core advantages, service overview, live performance metrics, and pre-footer CTA.
2. **About Page (`about.html`)**: In-depth company background, foundational engineering principles, mission and vision statements, core organizational values, and leadership team profiles.
3. **Contact Page (`contact.html`)**: Two-column layout featuring an accessible, frontend-validated inquiry form, comprehensive corporate contact details, and operating hours.

---

## ✨ Features Implemented

### 1. Structure & Semantic Markup
- **Semantic HTML5 Elements**: Proper document outline using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, and `<footer>`.
- **Accessibility by Design (a11y)**:
  - Skip-to-content keyboard bypass link (`.skip-link`).
  - Explicit `<label for="...">` associations for every form input.
  - ARIA attributes (`aria-expanded`, `aria-controls`, `aria-current="page"`, `aria-live="assertive"`, `aria-describedby`, `aria-invalid`).
  - Screen reader helper utility class (`.sr-only`).
  - Strict color contrast ratios exceeding WCAG AA standards.

### 2. Styling & Responsive Design
- **CSS3 Architecture**:
  - CSS custom properties (variables) for consistent design tokens (colors, spacing, shadows, typography, radii).
  - Modern layout mechanisms: CSS Flexbox for navigation and toolbars; CSS Grid for multi-column grids and card layouts.
  - Sticky blurred header (`backdrop-filter`) with shadow elevation.
  - Fluid typography and responsive clamp scaling (`clamp()`).
- **Cross-Device Responsiveness**:
  - **Desktop (1024px+)**: Spacious multi-column grids, horizontal navigation bar, expanded footer layout.
  - **Tablet (768px – 1023px)**: Reflowed 2-column grids and adjusted padding scales.
  - **Mobile (< 768px)**: Single-column stacked layouts, touch-friendly interactive targets (min 44px), and slide-out mobile drawer navigation.
  - **Zero Horizontal Scroll**: Verified viewport safety across all screen widths.

### 3. Vanilla JavaScript Functionality
- **Mobile Navigation Drawer**:
  - Hamburger toggle button animating smoothly to an "X" icon.
  - Keyboard accessibility (closes on `Escape` key, returns focus to toggle).
  - Outside click (backdrop click) detection to close automatically.
  - Body scroll lock during menu expansion to prevent unwanted background scrolling.
  - Auto-closes when navigating between links or resizing to desktop viewports.
- **Client-Side Form Validation (`contact.html`)**:
  - Custom JavaScript validation preventing standard page reloads (`e.preventDefault()`).
  - Required field validation (Name, Email, Subject, Message) ensuring non-empty and non-whitespace inputs.
  - Specific regex validation for email addresses (`RFC 5322` standard).
  - Length constraints (Name >= 2 chars, Subject >= 3 chars, Message >= 10 chars).
  - Inline error feedback with visible red styling and ARIA live announcements.
  - Automatic accessible focus shifting to the first erroneous input on submission.
  - Real-time / on-blur validation feedback once the user interacts with a field.
  - Dynamic user-friendly success alert banner simulating successful inquiry submission without server overhead.

---

## 🛠️ Technologies Used

- **HTML5**: Semantic markup, accessible forms, meta viewport configuration.
- **CSS3**: Custom properties, Flexbox, CSS Grid, media queries, CSS transitions.
- **Vanilla JavaScript (ES6+)**: DOM manipulation, event listeners, input validation.
- **Git / GitHub**: Clean version control history and repository organization.
- **Vector Graphics (SVG)**: Royalty-free, lightweight, infinitely scalable vector illustrations and logos.

*(No frontend frameworks, CSS preprocessors, backend runtimes, or external CDNs used).*

---

## 📁 Project Folder Structure

```text
Task-1-Company-Website/
├── index.html            # Landing / Home Page
├── about.html            # Company Background, Mission, Vision, and Team
├── contact.html          # Contact Form and Corporate Info
├── css/
│   └── style.css         # Unified responsive stylesheet and design tokens
├── js/
│   └── script.js         # Mobile menu drawer and client-side form validation
├── images/               # Scalable vector assets and brand icons
│   ├── logo.svg          # SAN Web Technology official vector logo
│   ├── favicon.svg       # Browser tab vector favicon
│   ├── hero-graphic.svg  # Responsive web engineering illustration
│   ├── avatar-1.svg      # Team profile avatar - Solution Architect
│   ├── avatar-2.svg      # Team profile avatar - Lead Frontend Engineer
│   └── avatar-3.svg      # Team profile avatar - Head of Design
├── README.md             # Project documentation and submission details
└── .gitignore            # Git configuration ignoring unnecessary artifacts
```

---

## 🚀 How to Run the Website Locally

You can run this frontend project on any computer with a web browser. No server installation, Node modules, or database configurations are required.

### Method 1: Direct File Opening
1. Navigate to the `Task-1-Company-Website` folder in your file explorer (Windows Explorer / macOS Finder).
2. Double-click `index.html` (or right-click -> **Open With** -> **Google Chrome / Microsoft Edge / Mozilla Firefox**).
3. The website will open and run locally.

### Method 2: Using VS Code Live Server (Recommended)
1. Open Visual Studio Code.
2. Select **File > Open Folder...** and choose the `Task-1-Company-Website` directory.
3. Install the **Live Server** extension (by *Ritwick Dey*) from the Extensions marketplace (`Ctrl+Shift+X`).
4. Right-click `index.html` in the explorer sidebar and click **"Open with Live Server"** (or click **Go Live** on the bottom status bar).
5. The site will launch automatically at `http://127.0.0.1:5500/index.html` with hot reloading enabled.

---

## 🧪 Contact Form Validation Architecture (Frontend-Only)

Because this is a frontend-focused task, no backend server or third-party mailing service is involved. Instead, the form implements robust client-side validation logic:

1. **Form Interception**: The `<form>` element has the `novalidate` attribute set to suppress default browser tooltips and allow our custom UI to handle feedback.
2. **Field Rules**:
   - **Full Name**: Must be non-empty, at least 2 characters, and contain valid alphabetic characters.
   - **Email Address**: Tested against standard regular expression:
     ```javascript
     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
     ```
   - **Subject**: Must contain at least 3 characters.
   - **Message**: Must contain at least 10 characters.
3. **Error Presentation**:
   - Erroneous fields receive the `.is-invalid` CSS class (red border, highlighted background).
   - Descriptive error text appears directly below the input inside an `aria-live="polite"` span.
   - An alert banner is displayed at the top of the form with `role="alert"`.
   - Focus is automatically placed on the first invalid field for keyboard navigation.
4. **Success Presentation**:
   - When all fields pass validation, the script displays a dismissible green alert banner confirming submission with the user's name:  
     `"Thank you, [Name]. Your message has been received. Our team will review your inquiry and get back to you within 24 hours."`
   - All input controls are reset via `form.reset()`, and all error/success borders are removed cleanly.

---

## 📋 Cross-Device Testing Checklist

| Test Item | Desktop (1920×1080 / 1440×900) | Tablet (768px – 1024px) | Mobile (375px – 480px) | Status |
| :--- | :---: | :---: | :---: | :---: |
| **Navigation Bar** | Full horizontal links + CTA button | Full horizontal / hamburger transition | Hamburger toggle with slide drawer | ✅ PASSED |
| **Mobile Menu Toggle** | Hidden | Displays hamburger when narrow | Opens/closes drawer, locks body scroll | ✅ PASSED |
| **Hero Section** | 2-column layout (text + SVG art) | Responsive stacked layout | Fluid typography, CTA buttons full-width | ✅ PASSED |
| **Card Grids (Features/Services)** | 4-col and 3-col grids | Auto-wrapping 2-column cards | Single-column cards, full touch area | ✅ PASSED |
| **About Page (Mission/Vision)** | Side-by-side balanced cards | Balanced 2-col or stacked cards | Stacked cards with colored accent borders | ✅ PASSED |
| **Team Profiles** | 3-column card grid | 2-column card grid | Centered single-column cards | ✅ PASSED |
| **Contact Form Validation** | Real-time & submit validation | Real-time & submit validation | Touch-friendly inputs, readable error alerts | ✅ PASSED |
| **Keyboard Navigation** | `Tab`, `Shift+Tab`, `Enter`, `Esc` work | Accessible focus indicators | Accessible focus indicators | ✅ PASSED |
| **Horizontal Scrolling** | None (`overflow-x: hidden`) | None | None | ✅ PASSED |
| **Internal Page Links** | All links switch pages correctly | All links switch pages correctly | All links switch pages correctly | ✅ PASSED |

---

## 📦 Git Commands Guide

To initialize Git tracking and push this task to your GitHub repository:

```bash
# 1. Navigate to the project directory
cd "Task-1-Company-Website"

# 2. Initialize a new Git repository
git init

# 3. Add all project files
git add .

# 4. Create your initial commit
git commit -m "feat: complete Task 1 responsive company web pages with HTML5, CSS3, and vanilla JS"

# 5. Rename branch to main
git branch -M main

# 6. Add your remote GitHub repository (replace with your actual GitHub repo URL)
git remote add origin https://github.com/<your-username>/<your-repo-name>.git

# 7. Push to GitHub
git push -u origin main
```

---

## 📜 Internship Deliverable Sign-off

- **Program**: SAN Web Technology Full-Stack Development Internship
- **Level**: Level 1 (Beginner)
- **Task**: Task 1 — Responsive Company Web Pages
- **Deliverable Status**: Complete, verified, and ready for review.
