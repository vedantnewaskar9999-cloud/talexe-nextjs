import "./globals.css";

export const metadata = {
  title: "Talexe.in — Personal HR & Career Guidance",
  description: "Resume rewrites, LinkedIn glow-ups, interview drills and career strategy."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
