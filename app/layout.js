import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Awesome application",
  description: "Build awesome stuff with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="">
        <NavBar />
        <main className="px-8 py-4 max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
