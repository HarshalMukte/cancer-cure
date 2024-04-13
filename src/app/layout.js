import "./globals.css";

export const metadata = {
  title: "Cancure Cure",
  description: "Empowering Cancer Journeys with Expert Guidance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
