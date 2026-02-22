
"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Wifi, Skull, Coffee, Flame, Signal, WifiOff, Bird, 
  Cpu, Zap, Database, Activity, Gauge, Monitor, HardDrive, Thermometer, 
  Car, Snowflake, Trash2, Radio
} from "lucide-react";
import { useEffect, useState } from "react";

type NodeStatus = {
  name: string;
  provider: string;
  location: string;
  uptime: string;
  cpu: number;
  ram: number;
  disk: string;
  network: string;
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
    uptime: "0.01%", 
    cpu: 98.5, 
    ram: 99.9, 
    disk: "120G 拆机 SSD", 
    network: "128Kbps", 
    temp: 85,
    status: "online" 
  },
  { 
    name: "极致超开-幻影节点", 
    provider: "村长电信", 
    location: "地窖咸菜缸旁", 
    uptime: "15s", 
    cpu: 105, 
    ram: 450, // 疯狂超卖
    disk: "WD Blue 256G HDD (强制 SWAP)", 
    network: "5Mbps", 
    temp: 98,
    isSwapNode: true,
    status: "glitch" 
  },
  { 
    name: "张三家 GPU 矿渣站", 
    provider: "张三移动", 
    location: "受热均匀处", 
    uptime: "0.1%", 
    cpu: 80, 
    ram: 40, 
    disk: "8G 内存卡", 
    network: "1Mbps", 
    temp: 115,
    gpu: { model: "GTX 440 (胶带版)", load: 99, temp: 108 },
    status: "fire" 
  },
  { 
    name: "信鸽转发中心-A", 
    provider: "专业禽类", 
    location: "村东头大槐树", 
    uptime: "随缘", 
    cpu: 5, 
    ram: 2, 
    disk: "4G SD卡", 
    network: "IPoAC", 
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
    disk: "无(远程映射)", 
    network: "信号 1 格", 
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
    disk: "机械硬盘 500G", 
    network: "模拟信号", 
    temp: 55,
    gpu: { model: "S3 Trio64 (传家宝)", load: 10, temp: 45 },
    status: "glitch" 
  },
  { 
    name: "全自动韭菜收割机", 
    provider: "树莓派-01", 
    location: "厨房抽油烟机内", 
    uptime: "看炒菜频率", 
    cpu: 100, 
    ram: 800, 
    disk: "16G 金士顿 (扩容版)", 
    network: "蓝牙 2.0", 
    temp: 102,
    status: "fire" 
  },
  { 
    name: "村长家老红旗车载机", 
    provider: "车载电源", 
    location: "后备箱备胎坑", 
    uptime: "开车时在线", 
    cpu: 25, 
    ram: 32, 
    disk: "5.25寸大软盘", 
    network: "收音机天线", 
    temp: 45,
    status: "online" 
  },
  { 
    name: "二狗子液氮冷区", 
    provider: "海信冰箱", 
    location: "冰箱冷冻层", 
    uptime: "100%", 
    cpu: 10, 
    ram: 15, 
    disk: "U 盘 (插在猪肉上)", 
    network: "2.4G WiFi", 
    temp: -5,
    status: "online" 
  },
  { 
    name: "老王家地窖-漏电版", 
    provider: "村口电力", 
    location: "水坑正上方", 
    uptime: "0.0001%", 
    cpu: 150, 
    ram: 20, 
    disk: "IDE 40G 硬盘", 
    network: "电话线拨号", 
    temp: 110,
    status: "glitch" 
  }
];

export default function NodesPage() {
  const [nodes, setNodes] = useState(INITIAL_NODES);

  useEffect(() => {
    const interval = setInterval(() => {
      setNodes(prev => prev.map(node => {
        if (node.status === 'offline') return node;
        
        // 模拟数据随机波动
        const newCpu = Math.min(200, Math.max(0, node.cpu + (Math.random() - 0.5) * 15));
        const newTemp = Math.min(130, Math.max(-20, node.temp + (Math.random() - 0.5) * 8));
        
        let newGpu = node.gpu;
        if (newGpu) {
          newGpu = {
            ...newGpu,
            load: Math.min(100, Math.max(0, newGpu.load + (Math.random() - 0.5) * 5)),
            temp: Math.min(120, Math.max(30, newGpu.temp + (Math.random() - 0.5) * 3))
          };
        }

        return {
          ...node,
          cpu: newCpu,
          temp: newTemp,
          gpu: newGpu,
          status: newTemp > 100 ? "fire" : newCpu > 120 ? "glitch" : node.status
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
    if (node.status === 'fire') return <Flame className="h-5 w-5 text-destructive" />;
    if (node.status === 'glitch') return <Skull className="h-5 w-5 text-accent" />;
    return <Radio className="h-5 w-5 text-primary" />;
  };

  return (
    <div className="min-h-screen bg-background text-foreground py-16">
      <main className="max-w-7xl mx-auto px-4">
        <header className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="border-primary text-primary animate-pulse font-black italic">PROBE ACTIVE</Badge>
            <span className="text-xs font-mono opacity-50 uppercase tracking-tighter">VILLAGE-IDC-MONITOR v3.0</span>
          </div>
          <h1 className="text-6xl font-headline font-black italic text-primary tracking-tighter">
            全球 <span className="text-accent underline decoration-8 underline-offset-8">瘫痪</span> 母鸡监控
          </h1>
          <p className="text-muted-foreground font-mono uppercase tracking-[0.3em] text-sm">
            STATUS: 正在努力尝试不让发电机起火 | 当前母鸡总数: {nodes.length}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nodes.map((node, i) => (
            <Card key={i} className={`bg-card border-4 transition-all duration-500 shadow-2xl relative overflow-hidden ${
              node.status === 'online' ? 'border-primary/20 hover:border-primary' : 
              node.status === 'offline' ? 'border-muted opacity-60' : 
              node.status === 'fire' ? 'border-destructive animate-pulse' : 'border-accent/40'
            }`}>
              {node.isSwapNode && (
                <div className="absolute top-0 right-0 bg-accent text-white text-[8px] font-black px-3 py-1 rotate-45 translate-x-4 -translate-y-1 shadow-lg z-10">
                  极致超卖
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
                  <Badge variant={node.status === 'online' ? 'default' : 'destructive'} className="font-black italic">
                    {node.status === 'online' ? '运行中' : node.status === 'fire' ? '已火化' : node.status === 'glitch' ? '玄学中' : '已断电'}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase font-black">
                      <span className="flex items-center gap-1"><Cpu className="h-3 w-3" /> CPU 负载</span>
                      <span className={node.cpu > 90 ? "text-destructive" : "text-primary"}>{node.cpu.toFixed(1)}%</span>
                    </div>
                    <Progress value={Math.min(100, node.cpu)} className="h-2 bg-primary/10" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase font-black">
                      <span className="flex items-center gap-1"><Thermometer className="h-3 w-3" /> 核心温度</span>
                      <span className={node.temp > 80 ? "text-destructive" : "text-primary"}>{node.temp.toFixed(1)}°C</span>
                    </div>
                    <Progress value={Math.min(100, (node.temp + 20) / 1.5)} className="h-2 bg-primary/10" />
                  </div>
                </div>

                {node.gpu && (
                  <div className="p-4 bg-primary/5 rounded-xl border-2 border-dashed border-primary/20 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase flex items-center gap-1">
                        <Monitor className="h-3 w-3" /> GPU: {node.gpu.model}
                      </span>
                      <Badge variant="outline" className="text-[8px] font-bold border-primary/40">{node.gpu.temp.toFixed(0)}°C</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={node.gpu.load} className="h-1.5 flex-1" />
                      <span className="text-[9px] font-mono font-bold w-8">{node.gpu.load.toFixed(0)}%</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 text-[11px] font-mono">
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5">
                    <p className="opacity-40 text-[9px] uppercase font-black mb-1">内存压力</p>
                    <p className={`font-bold ${node.ram > 100 ? 'text-destructive' : 'text-accent'}`}>{node.ram.toFixed(1)}%</p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5">
                    <p className="opacity-40 text-[9px] uppercase font-black mb-1">物理磁盘</p>
                    <p className={`font-bold truncate ${node.isSwapNode ? 'text-destructive text-[10px]' : ''}`}>
                      <HardDrive className="h-3 w-3 inline mr-1" />
                      {node.disk}
                    </p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5">
                    <p className="opacity-40 text-[9px] uppercase font-black mb-1">网络速率</p>
                    <p className="font-bold flex items-center gap-1">
                      {node.network === 'IPoAC' ? <Bird className="h-3 w-3" /> : <Wifi className="h-3 w-3" />}
                      {node.network}
                    </p>
                  </div>
                  <div className="bg-muted/30 p-3 rounded-lg border border-primary/5">
                    <p className="opacity-40 text-[9px] uppercase font-black mb-1">在线时长</p>
                    <p className="font-bold text-primary">{node.uptime}</p>
                  </div>
                </div>

                {node.isSwapNode && (
                  <div className="mt-2 text-[9px] text-destructive font-bold italic animate-pulse">
                    ⚠️ 警告：检测到 WD Blue HDD 正在进行每秒 100 万次的读写模拟 RAM，由于磁盘读写头与盘片摩擦生热，可能会引发物理火灾。
                  </div>
                )}
                {node.name.includes('老王') && (
                  <div className="mt-2 text-[9px] text-amber-600 font-bold italic">
                    ⚡ 提示：该节点漏电严重，建议远程操作，切勿靠近物理机柜。
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-24 p-12 border-8 border-dashed border-primary/20 rounded-[3rem] text-center bg-primary/5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <Coffee className="h-16 w-16 mx-auto text-primary/40 mb-6 animate-bounce" />
          <h3 className="text-3xl font-black italic mb-4 uppercase tracking-tighter">想在您的地窖部署“母鸡”？</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed italic">
            只要您家有稳健的 220V 电源（不建议偷电），且能容忍服务器散热风扇引发的小规模震感，您就能加入“村口云”算力矩阵。我们将支付您每月两桶豆油作为托管费。
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Badge variant="outline" className="border-primary/40 px-6 py-2">已有 10,281 个村民加入</Badge>
            <Badge variant="outline" className="border-accent/40 px-6 py-2 text-accent">待审核：二蛋家的洗衣机节点</Badge>
          </div>
        </div>
      </main>
    </div>
  );
}
