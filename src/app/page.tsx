"use client";

import { 
  Zap, ShieldCheck, Activity, Globe, 
  Cpu, HardDrive, ShoppingCart, ArrowRight,
  Bird, Wifi, Database, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { DynamicOutageList } from "@/components/DynamicOutageList";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-primary/10">
        <div className="absolute inset-0 bg-primary/[0.02] -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <HeroAnnouncement />
              <h1 className="text-6xl md:text-7xl font-headline font-black italic tracking-tighter leading-none">
                赋能每一份 <br />
                <span className="text-primary">被绿的</span> 信任
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                全球首家“地窖托管”云服务商。我们不保证在线率，我们只保证在村长喝醉前，您的业务大概率是在运行的。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-black h-16 px-10 text-xl shadow-lg shadow-primary/20" asChild>
                  <Link href="/products">
                    选购受骗方案 <ArrowRight className="ml-2 h-6 w-6" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 font-bold h-16 px-8" asChild>
                  <Link href="/nodes">查看实时瘫痪探针</Link>
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 grayscale opacity-40">
                <div className="flex items-center gap-2 font-black italic text-sm">TP-LINK</div>
                <div className="flex items-center gap-2 font-black italic text-sm">邻居老王</div>
                <div className="flex items-center gap-2 font-black italic text-sm">大槐树村委</div>
              </div>
            </div>

            <div className="relative">
              <DynamicOutageList />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center space-y-1">
            <p className="text-3xl font-black text-primary italic">0.01%</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">平均在线率</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl font-black text-primary italic">1000%</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">内存超开比例</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl font-black text-primary italic">50+</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">合作信鸽总数</p>
          </div>
          <div className="text-center space-y-1">
            <p className="text-3xl font-black text-primary italic">-$8.4k</p>
            <p className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">每分钟净亏损</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <Badge variant="outline" className="mb-4 border-primary text-primary">明星业务</Badge>
            <h2 className="text-4xl font-headline font-black italic tracking-tighter">本月最火受骗入口</h2>
          </div>
          <Button variant="link" className="text-primary font-bold" asChild>
            <Link href="/products">查看全部全线业务 <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "VPS (老王发电机版)", 
              icon: Cpu, 
              price: "0.15", 
              desc: "高性能虚拟化，全靠邻居老王没改 WiFi 密码。",
              tags: ["超开 1:100", "手摇发电"]
            },
            { 
              title: "CDN (信鸽载体)", 
              icon: Bird, 
              price: "5.00", 
              desc: "纯物理分发，支持全国范围内的谷子支付。",
              tags: ["极低丢包(指没被吃)", "环保"]
            },
            { 
              title: "RDS (基于地窖红薯)", 
              icon: Database, 
              price: "0.99", 
              desc: "完全托管数据库，数据像红薯一样深埋地底。",
              tags: ["防潮备份", "内存即焚"]
            }
          ].map((product, i) => (
            <Card key={i} className="group hover:border-primary transition-all duration-300 overflow-hidden">
              <CardContent className="p-8 space-y-6">
                <div className="h-14 w-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <product.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold italic">{product.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                </div>
                <div className="flex gap-2">
                  {product.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="text-[9px] uppercase tracking-wider">{tag}</Badge>
                  ))}
                </div>
                <div className="pt-6 border-t border-primary/5 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-muted-foreground block font-bold uppercase">起步价</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-primary">${product.price}</span>
                      <span className="text-xs text-muted-foreground">/mo</span>
                    </div>
                  </div>
                  <Button className="bg-primary text-white font-bold h-12 px-6" asChild>
                    <Link href="/products">选购</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-card border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-headline font-black italic tracking-tighter">为什么选择村口云？</h2>
            <p className="text-muted-foreground italic">“因为承诺可靠性太贵了，我们把钱都拿去喝咖啡了。”</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4 text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wifi className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold italic">超低延迟</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">基于信鸽 Carrier 协议，虽然响应时间以天计费，但我们主打一个情怀。</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold italic">极速合规</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">只要给村长递两根烟，您的备案在 5 分钟内（或村长抽完烟前）即可完成。</p>
            </div>
            <div className="space-y-4 text-center">
              <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold italic">透明计费</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">每一笔扣款都会清晰地标注为“发电机油费”或“大黄狗狗粮”。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
