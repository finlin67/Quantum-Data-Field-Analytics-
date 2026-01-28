# Quantum Data Field Analytics

A futuristic, real-time marketing analytics dashboard featuring organic nebula animations, glassmorphism effects, and interactive data visualization components.

## 🚀 Overview

This project serves as a high-fidelity UI prototype for a next-generation analytics platform. It demonstrates advanced frontend techniques including:

- **Organic Ambient Animations:** Background nebulae that drift and pulse using Framer Motion.
- **Glassmorphism:** Multi-layered transparency, blurs, and border gradients to create depth.
- **Simulated Real-time Telemetry:** React hooks drive a "live" data feed that updates metrics dynamically.
- **Interactive Drill-downs:** Modal dialogs with entrance/exit animations for detailed metric analysis.

## 🛠 Tech Stack

- **React 19:** Component architecture and state management.
- **TypeScript:** Type-safe development.
- **Tailwind CSS:** Utility-first styling for complex gradients and layout.
- **Framer Motion:** Complex orchestration of layout transitions and continuous background animations.
- **Lucide React:** Consistent, lightweight iconography.

## ✨ Key Features

1.  **Dashboard Pipeline:** Visualizes data flow through three stages: Data Ingestion, Processing, and Insights.
2.  **Live Metrics:** The dashboard updates numbers for data volume, processing throughput, and accuracy every 2.5 seconds to simulate a live environment.
3.  **Detailed Modals:** Clicking any stage opens a focused view with specific metrics (Latency, Packet Loss, ROI) and a historical sparkline chart.
4.  **Responsive Design:** Optimized for high-resolution displays with a fixed aspect ratio container that maintains design integrity.

## 📂 Project Structure

- `App.tsx`: Main layout wrapper handling the full-screen dark theme.
- `components/QuantumDashboard.tsx`: The core application logic. Contains:
    - `stageDetails`: Configuration object for the modal data.
    - `driftVariants` / `pulseVariants`: Animation definitions.
    - Main render loop and state management.

## 🎨 Customization

To modify the simulated data or metrics, edit the `stageDetails` object in `components/QuantumDashboard.tsx`. The background colors and gradients are controlled via Tailwind classes using `bg-gradient-to-tr` and specific color palettes (Blue, Indigo, Fuchsia).
