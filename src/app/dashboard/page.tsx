
"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Server, Wifi, Database, Activity, Coffee } from "lucide-react";

type ServerMetric = {
  id: string;
  name: string;
  location: string;
  status: "UP" | "DOWN" | "MAYBE" | "MELTING";
  uptime: string;
  latency: number;
  packetLoss: number;
  cpuLoad: number;
  isOutage: boolean;
};

const LOCATIONS = ["Village Basement A", "Storage Unit 42", "Attic (East Wing)", "Garage (Next to lawnmower)", "Old Fridge"];
const NAMES = ["Cluster-F", "Broken-Node-01", "Debt-Collector-VPS", "Slow-Burn-04", "The-Toaster"];

export default function DashboardPage() {
  const [servers, setServers] = useState<ServerMetric[]>([]);
  const [announcement, setAnnouncement] = useState("");

  const generateServers = () => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `srv-${i}`,
      name: NAMES[i],
      location: LOCATIONS[i],
      status: (Math.random() > 0.8 ? "DOWN" : Math.random() > 0.6 ? "MAYBE" : "UP") as any,
      uptime: (Math.random() * 20 + 70).toFixed(2) + "%",
      latency: Math.floor(Math.random() * 2000),
      packetLoss: Math.floor(Math.random() * 50),
      cpuLoad: Math.floor(Math.random() * 100),
      isOutage: false,
    }));
  };

  const ANNOUNCEMENTS = [
    "Technician spilled coffee on the main cluster. Expected downtime: Yes.",
    "A cat walked over the patch panel. Network is now purring but slow.",
    "The landlord cut the power to Basement A. Our battery backup is a single AA battery.",
    "Mining Bitcoin on customer CPUs is reaching peak efficiency. Your apps might be slower.",
    "Packet loss has reached 100% in Sector 4. This is an intentional security feature.",
  ];

  useEffect(() => {
    setServers(generateServers());
    setAnnouncement(ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)]);

    const interval = setInterval(() => {
      setServers(prev => prev.map(srv => {
        const isSpike = Math.random() > 0.8;
        return {
          ...srv,
          status: isSpike ? (Math.random() > 0.5 ? "DOWN" : "MELTING") : (Math.random() > 0.1 ? "UP" : "MAYBE"),
          latency: isSpike ? Math.floor(srv.latency + Math.random() * 5000) : Math.floor(Math.random() * 500),
          cpuLoad: Math.min(100, Math.max(0, srv.cpuLoad + (Math.random() * 20 - 10))),
        };
      }));
      
      if (Math.random() > 0.9) {
        setAnnouncement(ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)]);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <GlitchOverlay />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-headline font-bold text-accent italic flex items-center gap-4">
              <Activity className="h-10 w-10 animate-pulse" />
              SYSTEM_STATUS_v0.1-BETA
            </h1>
            <p className="text-muted-foreground mt-2 font-mono">Real-time metrics from our unreliable global infrastructure.</p>
          </div>
          
          <div className="bg-destructive/10 border border-destructive/50 p-4 rounded flex items-center gap-4 max-w-md">
            <AlertTriangle className="h-8 w-8 text-destructive shrink-0 animate-bounce" />
            <div className="text-xs font-mono uppercase">
              <span className="text-destructive font-bold block mb-1">IMPORTANT ANNOUNCEMENT:</span>
              {announcement}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map(server => (
            <Card key={server.id} className={`bg-card border-2 transition-all duration-500 ${server.status === 'DOWN' ? 'border-destructive shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-primary/20'}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-headline flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" />
                      {server.name}
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">{server.location}</p>
                  </div>
                  <Badge variant={server.status === 'UP' ? 'secondary' : server.status === 'DOWN' ? 'destructive' : 'outline'} 
                    className={`font-bold ${server.status === 'UP' ? 'bg-green-500/20 text-green-400' : ''}`}>
                    {server.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">Latency</p>
                    <p className={`text-xl font-bold ${server.latency > 1000 ? 'text-destructive' : 'text-accent'}`}>{server.latency}ms</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">Packet Loss</p>
                    <p className="text-xl font-bold text-primary">{server.packetLoss}%</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-mono">
                    <span>CPU LOAD (Shared)</span>
                    <span className={server.cpuLoad > 90 ? 'text-destructive animate-pulse' : ''}>{Math.round(server.cpuLoad)}%</span>
                  </div>
                  <Progress value={server.cpuLoad} className="h-1 bg-muted [&>div]:bg-primary" />
                  <p className="text-[9px] text-muted-foreground italic">Current user: [REDACTED_CRYPTO_MINER]</p>
                </div>

                <div className="pt-4 border-t border-primary/10 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-muted-foreground">UPTIME PROMISE: <span className="text-foreground">0.01%</span></span>
                  <span className="text-muted-foreground">ACTUAL: <span className="text-foreground">{server.uptime}</span></span>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-muted/20 border-dashed border-2 border-primary/40 flex items-center justify-center p-8 opacity-60 hover:opacity-100 transition-opacity">
            <div className="text-center space-y-4">
              <Coffee className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="font-headline text-sm">HIRE MORE BASEMENT SPACE</p>
              <p className="text-[10px] text-muted-foreground font-mono">Buy another VPS and we'll literally just use your own computer to host it.</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
