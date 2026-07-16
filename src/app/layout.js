import Script from "next/script";
import FlyingBirdLayout from "@/components/flyingbirdlayout";
import "./globals.css";
import ChatBot from "@/components/Chatbot";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Centered GIF Navbar",
  description: "A Next.js navbar with a centered animated logo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-FXH7P79ED7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FXH7P79ED7');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FlyingBirdLayout>{children}</FlyingBirdLayout>
        <ChatBot />
      </body>
    </html>
  );
}
