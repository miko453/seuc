
"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AlertTriangle, Server, Database, Activity, Skull } from "lucide-react";

type ServerMetric = {
  id: string;
  name: string;
  location: string;
  status: "运行中" | "已挂" | "玄学运行" | "火化中";
  uptime: string;
  latency: number;
  packetLoss: number;
  cpuLoad: number;
  isOutage: boolean;
};

const LOCATIONS = ["地窖 A-01", "村长家床底下", "旧冰柜 (断电版)", "垃圾堆边上", "露天节点 04"];
const NAMES = ["垃圾-VPS-01", "超开-节点-99", "没网-主机", "随时跑路-04", "二手小霸王"];

export default function DashboardPage() {
  const [servers, setServers] = useState<ServerMetric[]>([]);
  const [announcement, setAnnouncement] = useState("");

  const generateServers = () => {
    return Array.from({ length: 5 }).map((_, i) => ({
      id: `srv-${i}`,
      name: NAMES[i],
      location: LOCATIONS[i],
      status: (Math.random() > 0.8 ? "已挂" : Math.random() > 0.6 ? "玄学运行" : "运行中") as any,
      uptime: (Math.random() * 5 + 1).toFixed(2) + "%",
      latency: Math.floor(Math.random() * 5000),
      packetLoss: Math.floor(Math.random() * 99),
      cpuLoad: Math.floor(Math.random() * 100),
      isOutage: false,
    }));
  };

  const ANNOUNCEMENTS = [
    "因村口大黄狗咬断了网线，目前所有流量由信鸽手动转接。",
    "技术员小王为了省电，把主服务器关了去给电动车充电了。",
    "隔壁老王改了 WiFi 密码，我们正在尝试暴力破解中...",
    "因房东涨价，我们决定把 40 个客户塞进同一块 2GB 的内存里。",
    "重要公告：我们的数据库刚刚不小心被猫删了，祝大家新年快乐。",
  ];

  useEffect(() => {
    setServers(generateServers());
    setAnnouncement(ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)]);

    const interval = setInterval(() => {
      setServers(prev => prev.map(srv => {
        const isSpike = Math.random() > 0.7;
        return {
          ...srv,
          status: isSpike ? (Math.random() > 0.5 ? "已挂" : "火化中") : (Math.random() > 0.1 ? "运行中" : "玄学运行"),
          latency: isSpike ? Math.floor(srv.latency + Math.random() * 10000) : Math.floor(Math.random() * 1000),
          cpuLoad: Math.min(100, Math.max(0, srv.cpuLoad + (Math.random() * 40 - 20))),
        };
      }));
      
      if (Math.random() > 0.8) {
        setAnnouncement(ANNOUNCEMENTS[Math.floor(Math.random() * ANNOUNCEMENTS.length)]);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <GlitchOverlay />
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-headline font-bold text-primary italic flex items-center gap-4">
              <Activity className="h-10 w-10 animate-pulse" />
              实时瘫痪指数
            </h1>
            <p className="text-muted-foreground mt-2 font-mono">数据每秒都在随机跳动，仅供娱乐。</p>
          </div>
          
          <div className="bg-primary/10 border border-primary/50 p-4 rounded flex items-center gap-4 max-w-md">
            <AlertTriangle className="h-8 w-8 text-primary shrink-0 animate-bounce" />
            <div className="text-xs font-mono uppercase">
              <span className="text-primary font-bold block mb-1">今日噩耗:</span>
              {announcement}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servers.map(server => (
            <Card key={server.id} className={`bg-card border-2 transition-all duration-500 ${server.status === '已挂' ? 'border-destructive shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-primary/20'}`}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-headline flex items-center gap-2">
                      <Server className="h-5 w-5 text-primary" />
                      {server.name}
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">{server.location}</p>
                  </div>
                  <Badge variant={server.status === '运行中' ? 'secondary' : server.status === '已挂' ? 'destructive' : 'outline'} 
                    className={`font-bold ${server.status === '运行中' ? 'bg-primary text-white' : ''}`}>
                    {server.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">延迟 (越高越慢)</p>
                    <p className={`text-xl font-bold ${server.latency > 2000 ? 'text-destructive' : 'text-accent'}`}>{server.latency}ms</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] text-muted-foreground uppercase font-mono">丢包率</p>
                    <p className="text-xl font-bold text-primary">{server.packetLoss}%</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] uppercase font-mono">
                    <span>CPU 负载 (超开中)</span>
                    <span className={server.cpuLoad > 90 ? 'text-destructive animate-pulse' : ''}>{Math.round(server.cpuLoad)}%</span>
                  </div>
                  <Progress value={server.cpuLoad} className="h-1 bg-muted [&>div]:bg-primary" />
                </div>

                <div className="pt-4 border-t border-primary/10 flex justify-between items-center text-[10px] font-mono">
                  <span className="text-muted-foreground">承诺在线率: <span className="text-foreground">0.001%</span></span>
                  <span className="text-muted-foreground">实际上线: <span className="text-foreground">{server.uptime}</span></span>
                </div>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-muted/20 border-dashed border-2 border-primary/40 flex items-center justify-center p-8 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="text-center space-y-4">
              <Skull className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="font-headline text-sm">租用更多邻居资源</p>
              <p className="text-[10px] text-muted-foreground font-mono">再买一台，我们会尝试偷隔壁老李家的电来跑。</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
