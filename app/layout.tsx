import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SlackOptimizer – Cut Slack Costs by Removing Inactive Users",
  description: "Identify inactive Slack seats, calculate wasted spend, and get actionable recommendations to reduce your Slack bill."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76db771e-5b2b-4d61-a8c5-62340e854a4b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
