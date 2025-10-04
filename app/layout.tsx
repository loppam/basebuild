// app/layout.tsx
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";
import { RootProvider } from "./rootProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
