import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SITE_DESCRIPTION, SITE_GA_ID, SITE_TITLE, SITE_URL } from "@/helper";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    images: [{ url: SITE_URL + "/social-seo.png" }],
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    url: SITE_URL,
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: SITE_URL + "/social-seo.png",
    site: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <div id="app">{children}</div>
        <ToastContainer />
      </body>
      <GoogleAnalytics gaId={SITE_GA_ID} />
    </html>
  );
}
