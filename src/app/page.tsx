
"use client";

import { 
  Zap, ArrowRight,
  Wifi, Database, Terminal,
  CloudOff, Network, Cpu, HardDrive, ShoppingCart, Globe, Signal, Activity, ShieldCheck,
  MapPin, CheckCircle, Users, BarChart3
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { DynamicOutageList } from "@/components/DynamicOutageList";
import Link from "next/link";

const PARTNERS = [
  { name: "TP-LINK (地窖版)", icon: Wifi },
  { name: "老王 WiFi 实验室", icon: Zap },
  { name: "村委会大数据局", icon: Database },
  { name: "拼夕夕云 (战合)", icon: ShoppingCart },
  { name: "村口超市 POS", icon: Terminal },
  { name: "张三手摇发电机", icon: Cpu },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-primary/10 bg-[#f8f9fa]">
        <div className="absolute inset-0 bg-primary/[0.02] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <HeroAnnouncement />
              <h1 className="text-6xl md:text-8xl font-headline font-black italic tracking-tighter leading-none text-foreground">
                赋能每一份 <br />
                <span className="text-primary underline decoration-8 underline-offset-8">被绿的</span> 信任
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed font-medium">
                全球首家“地窖托管”云服务商。我们只保证在发电机没油前，您的业务大概率是在运行的。
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-20 px-12 text-2xl shadow-2xl shadow-primary/30 rounded-2xl" asChild>
                  <Link href="/products">
                    选购受骗方案 <ArrowRight className="ml-2 h-8 w-8" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 font-black h-20 px-10 text-xl rounded-2xl" asChild>
                  <Link href="/nodes">实时瘫痪监控</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <DynamicOutageList />
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-b border-primary/10 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="text-center space-y-2 group">
            <p className="text-5xl font-black text-primary italic group-hover:scale-110 transition-transform">0.01%</p>
            <p className="text-xs uppercase font-black tracking-widest text-muted-foreground">平均在线率</p>
          </div>
          <div className="text-center space-y-2 group">
            <p className="text-5xl font-black text-primary italic group-hover:scale-110 transition-transform">1:1000</p>
            <p className="text-xs uppercase font-black tracking-widest text-muted-foreground">内存超开比例</p>
          </div>
          <div className="text-center space-y-2 group">
            <p className="text-5xl font-black text-primary italic group-hover:scale-110 transition-transform">5,000+</p>
            <p className="text-xs uppercase font-black tracking-widest text-muted-foreground">在编信鸽总数</p>
          </div>
          <div className="text-center space-y-2 group">
            <p className="text-5xl font-black text-destructive italic group-hover:scale-110 transition-transform">-$8.4k</p>
            <p className="text-xs uppercase font-black tracking-widest text-muted-foreground">每秒钟净亏损</p>
          </div>
        </div>
      </section>

      {/* Global Infrastructure Map (Village Edition) */}
      <section className="py-32 bg-muted/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-20">
            <Badge className="bg-accent/10 text-accent border-accent/20 uppercase font-black tracking-widest">Global Base</Badge>
            <h2 className="text-6xl font-headline font-black italic tracking-tighter">全球基建分布 (村落级)</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto italic font-medium">
              我们的边缘节点遍布大槐树村每一个角落，从村头老王家到村尾二狗子地窖，实现真正的“全村覆盖”。
            </p>
          </div>
          
          <div className="relative aspect-[21/9] bg-white rounded-3xl border-4 border-primary/20 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 opacity-10 grayscale">
              {/* Simplified Village Map Visualization */}
              <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#22c55e_1px,_transparent_1px)] bg-[length:24px_24px]" />
            </div>
            
            {/* Pulsing Nodes */}
            <div className="absolute top-1/4 left-1/4 group cursor-help">
              <div className="relative h-4 w-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">村头电线杆 (核心网)</div>
            </div>
            <div className="absolute top-1/2 left-1/2 group cursor-help">
              <div className="relative h-4 w-4 bg-accent rounded-full animate-pulse" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">村委会 (IDC 总部)</div>
            </div>
            <div className="absolute bottom-1/4 right-1/3 group cursor-help">
              <div className="relative h-4 w-4 bg-destructive rounded-full animate-pulse" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">地窖机房 (冷数据区)</div>
            </div>
            <div className="absolute top-1/3 right-1/4 group cursor-help">
              <div className="relative h-4 w-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[8px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">老王家后院 (边缘节点)</div>
            </div>

            <div className="absolute bottom-4 left-4 flex gap-4">
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold"><div className="h-2 w-2 bg-primary rounded-full" /> 正常运行</div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold"><div className="h-2 w-2 bg-accent rounded-full" /> 正在冒烟</div>
              <div className="flex items-center gap-1 text-[10px] font-mono font-bold"><div className="h-2 w-2 bg-destructive rounded-full" /> 已经火化</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Victims Ticker */}
      <section className="bg-primary py-4 overflow-hidden border-y-4 border-black">
        <div className="flex whitespace-nowrap animate-marquee font-black italic text-white uppercase tracking-tighter text-2xl">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-8 flex items-center gap-4">
              <Users className="h-6 w-6" /> 恭喜用户 dawayuanzhong_{i} 成功入坑
              <CheckCircle className="h-6 w-6" /> 恭喜用户 victim_{i*123} 成功被绿
            </span>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="space-y-4">
            <Badge variant="outline" className="border-primary text-primary font-black uppercase tracking-widest px-4 py-1">HOT PRODUCTS</Badge>
            <h2 className="text-6xl font-headline font-black italic tracking-tighter text-foreground">本月最火受骗入口</h2>
          </div>
          <Button variant="link" className="text-primary font-black text-lg h-auto p-0 hover:no-underline group" asChild>
            <Link href="/products" className="flex items-center">
              查看全部业务 <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            { 
              title: "GPU 服务器 (GTX 440)", 
              icon: Cpu, 
              price: "88.00", 
              desc: "顶级算力（指扫雷），全靠地窖发电机维持。",
              href: "/products/gpu-beast"
            },
            { 
              title: "NAT VPS (18层套娃)", 
              icon: Network, 
              price: "5.00", 
              desc: "共享 IP 极致转发。您的出口可能在村长办公室。",
              href: "/products/nat-taowa"
            },
            { 
              title: "VDS (独占虚拟机)", 
              icon: Activity, 
              price: "45.00", 
              desc: "KVM 架构独占村长电脑核。不会被邻居抢带宽。",
              href: "/products/vds-dedicated"
            }
          ].map((product, i) => (
            <Card key={i} className="group hover:border-primary transition-all duration-500 overflow-hidden shadow-xl hover:shadow-primary/10 rounded-3xl border-2">
              <CardContent className="p-10 space-y-8">
                <div className="h-20 w-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12 shadow-inner">
                  <product.icon className="h-10 w-10" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black italic tracking-tight">{product.title}</h3>
                  <p className="text-base text-muted-foreground leading-relaxed font-medium">{product.desc}</p>
                </div>
                <div className="pt-8 border-t border-primary/10 flex items-end justify-between">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-primary italic">${product.price}</span>
                    <span className="text-sm text-muted-foreground font-bold">/mo</span>
                  </div>
                  <Button className="bg-primary text-white font-black h-16 px-8 rounded-2xl shadow-xl hover:scale-105 transition-transform" asChild>
                    <Link href={product.href}>立即受骗</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer Brand */}
      <section className="bg-card border-t border-primary/10 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <CloudOff className="h-6 w-6 text-primary" />
            <span className="font-headline font-bold text-lg tracking-tighter">村口云</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © 2026 大槐树村信息技术发展司. <br />
            ICP备案：村ICP备20260001号-1 (村长已阅)
          </p>
        </div>
      </section>
      
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
