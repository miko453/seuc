
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '村口云 (Cunkou Cloud) | 专业超开，极致“绿”动',
  description: '全球首家位于村长家地窖的云服务商。内存超开 1000%，网络全靠隔壁 WiFi。',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-background text-foreground min-h-screen">
        {children}
      </body>
    </html>
  );
}
