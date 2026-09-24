import "./globals.css";
import ReduxProvider from "./providers/ReduxProvider";

const siteUrl = "https://smartappinfo.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SmartAppInfo - Safe APK Downloads & App Reviews",
    template: "%s | SmartAppInfo",
  },
  description:
    "Find and download 100% safe APKs, apps, and games. Read reviews, topics, blogs, and discover top trending apps.",
  keywords: [
    "safe apk downloads",
    "app reviews",
    "top apps",
    "Android APK",
    "mobile apps",
    "app discovery",
  ],
  openGraph: {
    title: "SmartAppInfo",
    description:
      "Find and download 100% safe APKs, apps, and games. Read reviews, topics, blogs, and discover top trending apps.",
    url: siteUrl,
    siteName: "SmartAppInfo",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SmartAppInfo - Safe APK Downloads & App Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmartAppInfo",
    description:
      "Find and download 100% safe APKs, apps, and games. Read reviews, topics, blogs, and discover top trending apps.",
    images: [`${siteUrl}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/smartAppInfoLogo.png" />
        <link rel="apple-touch-icon" href="/smartAppInfoLogo.png" />
      </head>
      <body>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
