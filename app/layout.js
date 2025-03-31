import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "./../components/header";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HireTrack  - AI Career Coach Planner",
  description: "Inspires students to achieve their career goals",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            {/* footer */}
           <div className="border-t"></div>
           <Footer/>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
