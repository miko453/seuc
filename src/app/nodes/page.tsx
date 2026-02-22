
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Wifi, Skull, Coffee, Flame, Signal, WifiOff, Bird, 
  Cpu, Zap, Database, Activity, Gauge, Monitor, HardDrive, Thermometer, 
  Car, Snowflake, Trash2, Radio, ArrowUpCircle, ArrowDownCircle, AlertTriangle,
  MoveUp, MoveDown
} from "lucide-react";
import { useEffect, useState } from "react";

type NodeStatus = {
  name: string;
  provider: string;
  location: string;
  uptime: string;
  cpu: number;
  ram: number;
  diskUsed: number;
  diskModel: string;
  diskIO: { read: number; write: number };
  netIn: number; // KB/s
  netOut: number; // KB/s
  netTotal: string;
  temp: number;
  gpu?: { model: string; load: number; temp: number };
  status: "online" | "offline" | "glitch" | "fire";
  isSwapNode?: boolean;
};

const INITIAL_NODES: NodeStatus[] = [
  { 
    name: "村口桥头-母鸡-01", 
    provider: "老王自营", 
    location: "电线杆配电箱", 
    uptime: "2d 5h", 
    cpu: 92.5, 
    ram: 98.9, 
    diskUsed: 85,
    diskModel: "120G 拆机 SSD", 
    diskIO: { read: 12, write: 4 },
    netIn: 124, netOut: 45, netTotal: "100 Mbps (共享)",
    temp: 72,
    status: "online" 
  },
  { 
    name: "极致超开-幻影节点", 
    provider: "村长电信", 
    location: "地窖咸菜缸旁", 
    uptime: "15m", 
    cpu: 105, 
    ram: 850, 
    diskUsed: 99,
    diskModel: "WD Blue 256G HDD (强制 SWAP)", 
    diskIO: { read: 450, write: 380 },
    netIn: 512, netOut: 128, netTotal: "10 Mbps (黑宽带)",
    temp: 98,
    isSwapNode: true,
    status: "glitch" 
  },
  { 
    name: "张三家 GPU 矿渣站", 
    provider: "张三移动", 
    location: "受热均匀处", 
    uptime: "1h 22m", 
    cpu: 80, 
    ram: 40, 
    diskUsed: 45,
    diskModel: "8G 闪迪内存卡", 
    diskIO: { read: 1, write: 0 },
    netIn: 2, netOut: 0, netTotal: "512 Kbps (拨号)",
    temp: 115,
    gpu: { model: "GTX 440 (透明胶版)", load: 99, temp: 108 },
    status: "fire" 
  },
  { 
    name: "信鸽转发中心-A", 
    provider: "专业禽类", 
    location: "村东头大槐树", 
    uptime: "随缘", 
    cpu: 5, 
    ram: 2, 
    diskUsed: 10,
    diskModel: "4G 金士顿 SD卡", 
    diskIO: { read: 0.1, write: 0.1 },
    netIn: 0.1, netOut: 0.1, netTotal: "IPoAC (1 谷子/s)", 
    temp: 38,
    status: "online" 
  },
  { 
    name: "小李家蹭网节点", 
    provider: "TP-Link", 
    location: "沙发缝隙", 
    uptime: "3min", 
    cpu: 120, 
    ram: 200, 
    diskUsed: 88,
    diskModel: "无 (远程 iSCSI 挂载)", 
    diskIO: { read: 0, write: 0 },
    netIn: 0, netOut: 0, netTotal: "信号 1 格 (受隔壁老王控制)", 
    temp: 65,
    status: "offline" 
  },
  { 
    name: "村委会 GPU 集群", 
    provider: "大喇叭", 
    location: "广播站二楼", 
    uptime: "播音时在线", 
    cpu: 60, 
    ram: 80, 
    diskUsed: 30,
    diskModel: "希捷机械硬盘 500G", 
    diskIO: { read: 5, write: 2 },
    netIn: 5, netOut: 2, netTotal: "模拟信号", 
    temp: 55,
    gpu: { model: "S3 Trio64 (文物级)", load: 10, temp: 45 },
    status: "online" 
  },
  { 
    name: "全自动韭菜收割机", 
    provider: "树莓派-01", 
    location: "厨房抽油烟机内", 
    uptime: "看炒菜频率", 
    cpu: 100, 
    ram: 800, 
    diskUsed: 95,
    diskModel: "16G 扩容版 U盘", 
    diskIO: { read: 2, write: 8 },
    netIn: 24, netOut: 8, netTotal: "蓝牙 2.0 (穿墙中)", 
    temp: 102,
    status: "fire" 
  },
  { 
    name: "村长家老红旗车载机", 
    provider: "车载电源", 
    location: "后备箱备胎坑", 
    uptime: "行驶中", 
    cpu: 25, 
    ram: 32, 
    diskUsed: 5,
    diskModel: "5.25寸大软盘 (磁道磨损)", 
    diskIO: { read: 0.1, write: 0 },
    netIn: 1, netOut: 0, netTotal: "收音机天线", 
    temp: 45,
    status: "online" 
  },
  { 
    name: "二狗子液氮冷区", 
    provider: "海信冰箱", 
    location: "冰箱冷冻层 (猪肉堆里)", 
    uptime: "12d", 
    cpu: 10, 
    ram: 15, 
    diskUsed: 2,
    diskModel: "USB 2.0 (防冻插头)", 
    diskIO: { read: 8, write: 5 },
    netIn: 1024, netOut: 512, netTotal: "2.4G WiFi (信号满格)", 
    temp: -12,
    status: "online" 
  }
];

export default function NodesPage() {
  const [nodes, setNodes] = useState(INITIAL_NODES);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        if (node.status === 'offline') return node;
        
        const newCpu = Math.min(200, Math.max(0, node.cpu + (Math.random() - 0.5) * 20));
        const newTemp = Math.min(130, Math.max(-25, node.temp + (Math.random() - 0.5) * 10));
        const newNetIn = Math.max(0, node.netIn + (Math.random() - 0.5) * 100);
        const newNetOut = Math.max(0, node.netOut + (Math.random() - 0.5) * 40);
        const newDiskUsed = Math.min(100, Math.max(0, node.diskUsed + (Math.random() - 0.5) * 2));
        const newDiskIO = {
          read: Math.max(0, node.diskIO.read + (Math.random() - 0.5) * 50),
          write: Math.max(0, node.diskIO.write + (Math.random() - 0.5) * 30),
        };
        
        let newGpu = node.gpu;
        if (newGpu) {
          newGpu = {
            ...newGpu,
            load: Math.min(100, Math.max(0, newGpu.load + (Math.random() - 0.5) * 10)),
            temp: Math.min(125, Math.max(30, newGpu.temp + (Math.random() - 0.5) * 5))
          };
        }

        let newStatus = node.status;
        if (newTemp > 110) newStatus = "fire";
        else if (newCpu > 150) newStatus = "glitch";
        else if (node.status !== 'offline') newStatus = "online";

        return {
          ...node,
          cpu: newCpu,
          temp: newTemp,
          netIn: newNetIn,
          netOut: newNetOut,
          diskUsed: newDiskUsed,
          diskIO: newDiskIO,
          gpu: newGpu,
          status: newStatus
        };
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const getIconForNode = (node: NodeStatus) => {
    if (node.name.includes('车载')) return <Car className="h-5 w-5 text-primary" />;
    if (node.name.includes('冰箱')) return <Snowflake className="h-5 w-5 text-blue-400" />;
    if (node.name.includes('收割机')) return <Trash2 className="h-5 w-5 text-destructive" />;
    if (node.status === 'online') return <Signal className="h-5 w-5 text-primary" />;
    if (node.status === 'offline') return <WifiOff className="h-5 w-5 text-muted-foreground" />;
    if (node.status === 'fire') return <Flame className="h-5 w-5 text-destructive animate-bounce" />;
    if (node.status === 'glitch') return <Skull className="h-5 w-5 text-accent animate-glitch" />;
    return <Radio className="h-5 w-5 text-primary" />;
  };

  const formatNet = (speed: number) => {
    if (speed > 1024) return `${(speed / 1024).toFixed(2)} MB/s`;
    return `${speed.toFixed(1)} KB/s`;
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <main className="max-w-7xl mx-auto px-4">
        <header className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-primary text-primary animate-pulse font-black italic">PROBE V4.0 ACTIVE</Badge>
            <span className="text-xs font-mono opacity-50 uppercase tracking-tighter">VILLAGE-IDC-MONITOR SYSTEM (SIGNED BY GIT-S)</span>
          </div>
          <h1 className="text-6xl font-headline font-black italic text-primary tracking-tighter">
            全球 <span className="text-accent underline decoration-8 underline-offset-8">瘫痪</span> 母鸡探针
          </h1>
          <p className="text-muted-foreground font-mono uppercase tracking-[0.3em] text-sm">
            STATUS: 正在努力尝试不让地窖起火 | 监控节点: {nodes.length} | 上游出口: 邻居家 TP-Link
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nodes.map((node, i) => (
            <Card key={i} className={`bg-card border-4 transition-all duration-500 shadow-2xl relative overflow-hidden group ${
              node.status === 'online' ? 'border-primary/20 hover:border-primary' : 
              node.status === 'offline' ? 'border-muted opacity-60' : 
              node.status === 'fire' ? 'border-destructive animate-pulse' : 'border-accent/40'
            }`}>
              {node.isSwapNode && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[8px] font-black px-4 py-1 rotate-45 translate-x-5 -translate-y-1 shadow-lg z-10 animate-pulse">
                  HDD SWAP 物理超卖
                </div>
              )}
              
              <CardHeader className="pb-4 border-b border-primary/10">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <CardTitle className="text-xl font-black italic flex items-center gap-2">
                      {getIconForNode(node)}
                      {node.name}
                    </CardTitle>
                    <p className="text-[10px] text-muted-foreground font-mono flex items-center gap-1 uppercase">
                      <Gauge className="h-3 w-3" /> {node.location}
                    </p>
                  </div>
                  <Badge variant={node.status === 'online' ? 'default' : 'destructive'} className="font-black italic uppercase text-[9px]">
                    {node.status === 'online' ? 'Running' : node.status === 'fire' ? 'Burning' : node.status === 'glitch' ? 'Glitching' : 'Power Off'}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase font-black">
                      <span className="flex items-center gap-1"><Cpu className="h-3 w-3" /> CPU 负载</span>
                      <span className={node.cpu > 95 ? "text-destructive" : "text-primary"}>{node.cpu.toFixed(1)}%</span>
                    </div>
                    <Progress value={Math.min(100, node.cpu)} className="h-2 bg-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase font-black">
                      <span className="flex items-center gap-1"><Thermometer className="h-3 w-3" /> 核心温度</span>
                      <span className={node.temp > 85 ? "text-destructive font-bold" : "text-primary"}>{node.temp.toFixed(1)}°C</span>
                    </div>
                    <Progress value={Math.min(100, (node.temp + 30) / 1.6)} className="h-2 bg-primary/10" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono uppercase font-black">
                    <span className="flex items-center gap-1"><HardDrive className="h-3 w-3" /> 磁盘占用 ({node.diskModel})</span>
                    <span className={node.diskUsed > 92 ? "text-destructive" : "text-primary"}>{node.diskUsed.toFixed(1)}%</span>
                  </div>
                  <Progress value={node.diskUsed} className="h-2 bg-primary/10" />
                  <div className="flex justify-between text-[8px] font-mono opacity-60">
                    <span className="flex items-center gap-1"><MoveUp className="h-2 w-2" /> Read: {node.diskIO.read.toFixed(1)} MB/s</span>
                    <span className="flex items-center gap-1"><MoveDown className="h-2 w-2" /> Write: {node.diskIO.write.toFixed(1)} MB/s</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5 flex flex-col gap-1">
                    <p className="opacity-40 text-[9px] uppercase font-black flex items-center gap-1">
                      <Activity className="h-3 w-3" /> 实时流量
                    </p>
                    <div className="flex flex-col font-mono font-bold text-[10px]">
                      <div className="flex items-center gap-1 text-primary">
                        <ArrowUpCircle className="h-3 w-3" /> {formatNet(node.netOut)}
                      </div>
                      <div className="flex items-center gap-1 text-accent">
                        <ArrowDownCircle className="h-3 w-3" /> {formatNet(node.netIn)}
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5 flex flex-col gap-1">
                    <p className="opacity-40 text-[9px] uppercase font-black flex items-center gap-1">
                      <Wifi className="h-3 w-3" /> 带宽总量
                    </p>
                    <p className="font-mono font-bold text-[10px] text-foreground leading-tight">
                      {node.netTotal}
                    </p>
                  </div>
                </div>

                {node.gpu && (
                  <div className="p-4 bg-primary/5 rounded-xl border-2 border-dashed border-primary/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase flex items-center gap-1">
                        <Monitor className="h-3 w-3" /> GPU: {node.gpu.model}
                      </span>
                      <Badge variant="outline" className="text-[8px] font-bold border-primary/40 text-primary">{node.gpu.temp.toFixed(0)}°C</Badge>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[8px] font-mono font-bold uppercase">
                        <span>负载</span>
                        <span>{node.gpu.load.toFixed(0)}%</span>
                      </div>
                      <Progress value={node.gpu.load} className="h-1.5" />
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5">
                    <p className="opacity-40 text-[9px] uppercase font-black mb-1 flex items-center gap-1"><Zap className="h-3 w-3" /> 内存压力</p>
                    <p className={`font-bold ${node.ram > 100 ? 'text-destructive' : 'text-accent'}`}>{node.ram.toFixed(1)}%</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5">
                    <p className="opacity-40 text-[9px] uppercase font-black mb-1 flex items-center gap-1"><Database className="h-3 w-3" /> 在线时长</p>
                    <p className="font-bold text-primary">{node.uptime}</p>
                  </div>
                </div>

                {node.isSwapNode && (
                  <div className="mt-2 text-[9px] text-destructive font-bold italic animate-pulse bg-destructive/5 p-3 rounded border-2 border-dashed border-destructive/30 space-y-1">
                    <p className="flex items-center gap-1"><AlertTriangle className="h-3 w-3" /> 严重警告：物理级超开危险</p>
                    <p className="opacity-80">该节点由于预算不足，使用 WD Blue HDD 作为 SWAP。磁头正处于每秒百万次的疯狂摩擦中，请避免在此上传大文件。</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
