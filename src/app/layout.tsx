import type {Metadata} from 'next';
import './globals.css';
import { Navigation } from "@/components/Navigation";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: '村口云控制台 | Cunkou Cloud Console',
  description: '专业的（指超开）云计算控制面板。一站式管理您的地窖机房和发电机。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen bg-[#f8f9fa]">
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 lg:ml-64 pt-6 pb-20">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}