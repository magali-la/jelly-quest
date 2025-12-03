#Jelly Quest

A fun and interactive web project that fetches Jelly Belly jellybean flavors, displays them in a responsive grid, and links users to a quiz-style experience through a “Jelly Quest” page.

## Overview

**Jelly Quest** is a small front-end application that:

- Fetches different types of **Jelly Belly jellybean flavors** from an external data source (or local JSON—depending on your setup).
- Dynamically creates flavor cards using a template and injects them into a Bootstrap grid.
- Displays key jellybean data including:

  - Image
  - Flavor name
  - Category / group name(s)
  - Description
  - Color group

- Provides navigation to different areas of the site including:

  - **Discover** (current page)
  - **Jelly Quest** (quiz or interactive challenge page)
  - **Jelly Match** (future or additional feature)

This project demonstrates responsive design, DOM manipulation, API/data fetching, and Bootstrap integration.

---

## Tech Stack

| Technology               | Purpose                                               |
| ------------------------ | ----------------------------------------------------- |
| **HTML5**                | Base structure of the application                     |
| **CSS / Bootstrap 5.3**  | Layout, styling, responsive grid                      |
| **JavaScript (Modules)** | Fetch jellybean data, clone templates, generate cards |
| **External Data/API**    | Supplies jellybean flavors and associated metadata    |

---

## Project Structure

```
.
├── index.html
├── jellymatch.html
├── readme.md
└── src
    ├── assets
    │   └── mascot.png
    ├── scripts
    │   ├── apiFetch.js
    │   └── script.js
    └── style.css
```

### **index.html**

Contains:

- Navbar
- Bootstrap styling & scripts
- A template card that JavaScript clones for each jellybean
- A responsive grid that displays dynamically generated flavor cards

### **src/style.css**

Controls additional styling for:

- Layout adjustments
- Custom navigation design
- Card styling beyond Bootstrap defaults

### **src/scripts/script.js**

Handles:

- Fetching jellybean data
- Cloning the template card
- Injecting each card into the Bootstrap grid
- Binding data such as image URL, flavor name, groups, description, and color

---

## How It Works

1. **Page loads**
2. `script.js` fetches the flavor data, imports methods from apiFetch.js
3. For each jellybean:

   - A hidden card template (`templateJellyCol`) is cloned
   - Content placeholders (image, name, groups, description, etc.) are populated
   - The card is appended to the `#jellyCardGrid`

4. User sees a full gallery of jellybean flavors
5. Navigation links allow movement to quiz-related pages (“Jelly Quest”) or other game features (“Jelly Match”)

---

## Features

✔ Fully responsive grid layout
✔ Dynamic DOM generation
✔ Reusable Bootstrap card template
✔ Clean UI with smooth data rendering
✔ Extensible structure for quizzes / games

---

## Future Enhancements

- Add scoring logic for Jelly Quest quiz
- Add a matching game for “Jelly Match”
- Implement search or filtering by flavor category
- Animate card loading
- Dark mode

---

## Contributors

Magali Lapu
Thierno Bah (Bah)
Uchenna Williams (Dan)

---
