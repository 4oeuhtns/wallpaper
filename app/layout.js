import localFont from "next/font/local";
import "./globals.css";

const swiss911 = localFont({
  variable: "--font-swiss-911",
  src: [
    {
      path: "../public/swiss911.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

const optispire = localFont({
  variable: "--font-optispire",
  src: [
    {
      path: "../public/OPTISpire.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "wallpaper",
  description: "lively wallpaper",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${swiss911.variable} ${optispire.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
