import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import Wrapper from "@/components/custom/Wrapper";
import { ThemeProvider } from "@/components/custom/theme-provider";
import LocaleProvider from "@/contexts/LocaleContext";
import Footer from "@/components/custom/Footer";
import SideButton from "@/components/custom/SideButton";
import "./globals.css";

const APP_NAME = "Explore Nias";
const APP_DEFAULT_TITLE = "Explore Nias";
const APP_TITLE_TEMPLATE = "Explore Nias - %s";
const APP_DESCRIPTION =
  "Mengenal Lebih Dekat Nias dan Kekayaan Budayanya Serta Keindahan Alamnya.";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#4B483C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LocaleProvider>
            <NextTopLoader
              color="#4B483C"
              shadow="0 0 15px #9C9680,0 0 10px #9C9680, 0 0 5px #9C9680"
              speed={250}
              crawlSpeed={250}
              showSpinner={false}
            />
            <Wrapper />
            <div className="w-full h-fit">{children}</div>
            <SideButton />
            <Footer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
