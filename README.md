# Axiom Trade Pulse Replica

This project is a high-fidelity, pixel-perfect replica of the Axiom Trade token discovery dashboard ([axiom.trade/pulse](https://axiom.trade/pulse)). It is built with a modern, scalable tech stack and focuses on real-time data handling, complex UI interactions, and high performance, replicating the "New Pairs," "Final Stretch," and "Migrated" sections of the original site.

This application was built to meet a specific set of technical and functional requirements, including real-time updates, complex UI patterns, and a robust state management architecture.

### [Vercel Deployment](https://eterna-axiom.vercel.app/pulse)


## Core Features

* **Real-time Price Updates:** A mock WebSocket connection (`useMockWebSocket`) pushes data to the Redux store, causing the UI to update in real-time.
* **Smooth Color Transitions:** Updated token rows "flash" a different color for half a second to draw the user's attention.
* **Complex UI Patterns:**
    * **Popover:** Clicking a token's name or image opens a detailed popover with a placeholder for a chart.
    * **Tooltip:** Hovering over stat icons or timestamps reveals detailed information.
* **Advanced Loading States:**
    * **Skeleton & Shimmer:** A custom `TokenRowSkeleton` component with a `tailwind-pulse` animation is shown while data is being fetched.
    * **Progressive Loading:** Data for the three columns is fetched in parallel, and each column renders as its data becomes available.
* **Atomic Architecture:** Components are split into reusable atoms and molecules (e.g., `TokenRow`, `TokenColumn`, `ColumnFilters`).

## Technical Stack

This project was built using the specific stack from the technical requirements:

* **Framework:** Next.js 14
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **UI Components:** shadcn/ui
* **State Management:** Redux Toolkit (for global UI state and token data)
* **Data Fetching:** React Query (`@tanstack/react-query`) (for server state, caching, and parallel queries)

### Getting Started

#### 1. Clone the repository

```bash
git clone https://github.com/imsonu2030/eterna-task-axom-trade-replica.git
cd eterna-task-axom-trade-replica
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Run
```bash
npm run dev
```
Open `http://localhost:3000/pulse` with your browser to see the result.