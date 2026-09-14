import "./globals.css";

export const metadata = {
  title: "Talexe.in — Personal HR & Career Guidance",
  description: "Resume rewrites, LinkedIn glow-ups, interview drills and career strategy."
  verification: {
    google: "PGA9prNQey-QYy4J8TR0IBdI5ZuEp4Use6uifhCvdcY",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
