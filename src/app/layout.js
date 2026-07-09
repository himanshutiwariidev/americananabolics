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
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FlyingBirdLayout>{children}</FlyingBirdLayout>
        <ChatBot />
      </body>
    </html>
  );
}
