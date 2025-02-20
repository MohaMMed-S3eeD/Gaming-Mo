import type { Metadata } from "next";
import { Russo_One} from "next/font/google";
import "./globals.css";


const oxanium = Russo_One({weight:["400"],subsets:["latin"]});

export const metadata: Metadata = {
  title: "Gaming Mo | Store",
  description: "Gaming Mo is a store for games",
  icons: {
    icon: "/globe.webp"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${oxanium.className}  antialiased dark`}
      >
        {children}
      </body>
    </html>
  );
}
