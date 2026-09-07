# Personal Project Showcase App

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Local Setup](#local-setup)
- [Usage Guide](#usage-guide)
- [Potential Improvements](#potential-improvements)
- [License](#license)

## Overview
**Flour & Butter Bakery** is a React and Tailwind CSS application for browsing and managing a bakery's product catalog. It has a public storefront for browsing and searching pastries, a detail page for each item, and an Admin Portal for adding, editing, and deleting pastries against a simulated backend.

### Purpose
- Showcase a bakery's pastry catalog in a clean, simple interface
- Provide an easy way for an admin to add, edit, and remove pastries
- Enable quick searching of the catalog
- Let a shopper view full details — including ingredients and allergens — for a single pastry


## Features

### Core Features
- **Pastry Display** — a grid view showing every pastry's name, description, and price
- **Pastry Detail View** — a dedicated page per pastry showing its category, price, description, ingredients, and allergens
- **Add New Pastry** — a form to add a pastry with name, category, price, ingredients, allergens, and description, with validation on all fields
- **Edit Pastry** — the same form can be reused to update an existing pastry's details
- **Delete Pastry** — remove a pastry from the catalog directly from the Admin Portal
- **Search Pastries** — real-time filtering of the catalog by name, category, or description as you type

### User Experience Features
- **Instant Updates** — added, edited, and deleted pastries are reflected immediately without a page refresh
- **Live Search** — results filter as you type, no submit button needed
- **Empty State** — a friendly message is shown when no pastries match a search
- **Client-Side Routing** — navigating between Home, Shop, a pastry's detail page, and the Admin Portal never triggers a full page reload
- **Accessible Search Input** — the search field includes an `aria-label` for screen readers

## Technologies Used

### Frontend
- **React 19** — UI library for building component-based interfaces
- **React Hooks** — state and lifecycle management via `useState`, `useEffect`, and `useParams`
- **React Router** — client-side routing between pages, including a dynamic `/shop/:id` route
- **Tailwind CSS** — utility-first CSS framework for styling
- **Vite** — fast build tool and development server

### Backend (Simulated)
- **json-server** — serves `db.json` as a REST API, providing full Create/Read/Update/Delete support for the pastry catalog

## Project Structure

The app is broken into small, single-purpose components:

```
App
├── Layout
│   ├── NavBar
│   └── <Outlet>
│       ├── Home
│       ├── Shop
│       │   ├── SearchBar
│       │   └── PastryCard (one per pastry)
│       ├── PastryDetail
│       └── AdminPortal
```

- `App` — owns the pastry list and all CRUD functions (fetch, add, update, delete), and defines the app's routes
- `Layout` — renders the navigation bar and an `<Outlet>` for whichever page is active
- `NavBar` — top navigation links (Home / Shop / Admin Portal)
- `Home` — static landing page introducing the bakery, with a link into the shop
- `Shop` — owns the search state and renders the filtered pastry grid
  - `SearchBar` — controlled search input
  - `PastryCard` — renders a single pastry as a link to its detail page
- `PastryDetail` — shows one pastry's full details, found by matching the `:id` route parameter against the pastry list
- `AdminPortal` — the add/edit form plus a manage list with edit and delete actions for every pastry

## Local Setup

### Requirements
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)
- A modern web browser

### Installation
1. Clone the repository:
   ```
   git clone <your-repo-url>
   ```
2. Navigate into the project directory:
   ```
   cd <your-project-folder>
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the simulated backend:
   ```
   npm run server
   ```
   This serves `db.json` at `http://localhost:3000`.
5. In a separate terminal, start the development server:
   ```
   npm run dev
   ```
6. Open in your browser:
   The application will be available at `http://localhost:5173/`

## Usage Guide

### Browsing and Searching Pastries
1. Navigate to the **Shop** page
2. Use the **Search Bakery...** input to filter by name, category, or description
3. Clear the search box to see the full catalog again

### Viewing a Pastry's Details
1. From the Shop page, click any pastry card
2. The detail page shows its category, price, full description, ingredients, and allergens

### Adding a New Pastry
1. Navigate to the **Admin Portal**
2. Fill in the following fields:
   - **Item Name** (required)
   - **Category** (required)
   - **Price** (required)
   - **Ingredients** (required)
   - **Allergens** (required)
   - **Description** (required)
3. Click **Submit**
4. The new pastry appears instantly in the Current Inventory list

### Editing an Existing Pastry
1. In the Admin Portal's **Current Inventory** list, click **Edit** on any pastry
2. The form fills in with that pastry's current details
3. Update any fields and click **Update**
4. Click **Cancel** at any point to discard your changes

### Deleting a Pastry
1. In the Admin Portal's **Current Inventory** list, click **Delete** on any pastry
2. The pastry is removed from the catalog immediately

## Potential Improvements
- **Delete Confirmation** — add a confirmation step before a pastry is permanently deleted
- **Debounced Search** — delay filtering slightly while typing, using a custom hook, to reduce unnecessary re-renders on a larger catalog
- **Category Filters** — add checkboxes to filter the Shop page by category alongside the search bar
- **Store Info on Home** — pull the bakery's name, description, and contact details from the backend instead of static text
- **Images per Pastry** — support a photo for each item instead of a placeholder icon
- **Automated Tests** — add component and integration tests for the CRUD flows

## License

MIT License

Copyright © 2026 Dennis Sambu

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
