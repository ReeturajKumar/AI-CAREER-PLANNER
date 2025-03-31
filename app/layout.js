

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from './../components/header';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"], 
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HireTrack",
  description: "Tracks progress from learning to hiring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header/>
            <main className="min-h-screen">{children}</main>
              {/* footer */}
              <footer className="bg-muted/50 py-12">
                <div className="container mx-auto text-center px-4 text-gray-200">
                  <p>
                    Created by{" "}
                    <a
                      href="https://github.com/iamshaunjp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      @iamshaunjp
                    </a>
                  </p>
                </div>
              </footer>
          </ThemeProvider>
      </body>
    </html>
  );
}
