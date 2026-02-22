
"use client";

import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, Boxes, Network, Globe, Cpu, Database, Activity, HardDrive, ShieldCheck, ChevronRight, Terminal, ShoppingCart, CloudOff
} from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { DynamicOutageList } from "@/components/DynamicOutageList";
import { PRODUCTS } from "@/lib/satire-data";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background">
      <GlitchOverlay />
      <Navigation />
      
      {/* Hero Section - IDC Style */}
      <section className="relative py-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background border-b border-primary/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 relative z-10">
          <HeroAnnouncement />
          <div className="max-w-3xl">
            <h1 className="text-6xl font-headline font-black mb-6 leading-[1.1] tracking-tighter text-white">
              专业的 <span className="text-primary italic">超开</span> 云计算<br />
              <span className="text-accent underline decoration-primary decoration-4">赋能每一份被绿的信任</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-light max-w-xl italic">
              “地窖架构”先行者。内存超卖 1000%，带宽全靠邻居老王，让您的应用在玄学中优雅奔跑。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 font-black px-10 h-14 text-lg" asChild>
                <Link href="/products">立即开启受骗之旅</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8 h-14" asChild>
                <Link href="/beian">进行终身备案</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none overflow-hidden">
          <div className="grid grid-cols-10 gap-2 rotate-12">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="h-8 w-8 border border-primary/30 rounded-sm animate-pulse" style={{ animationDelay: `${i * 10}ms` }} />
            ))}
          </div>
        </div>
      </section>

      <main className="max-w-[1400px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Main Content Area (75%) */}
          <div className="lg:col-span-3 space-y-16">
            
            {/* Featured Section */}
            <div>
              <div className="flex items-center justify-between mb-8 border-b border-primary/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/20 p-2 rounded">
                    <Boxes className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold uppercase tracking-tighter italic">核心受骗业务</h2>
                </div>
                <Link href="/products" className="text-sm text-primary hover:underline flex items-center gap-1 font-bold">
                  进入产品中心 (WHMCS 模式) <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {PRODUCTS.slice(0, 6).map(product => (
                  <Card key={product.id} className="bg-card/40 border-primary/10 hover:border-accent transition-all group relative overflow-hidden">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-[9px] font-mono uppercase bg-primary/5 text-primary border-primary/20">{product.category}</Badge>
                      </div>
                      <CardTitle className="text-lg font-bold flex items-center gap-2">
                        {product.id.includes('v') && <Cpu className="h-4 w-4" />}
                        {product.id === 'db' && <Database className="h-4 w-4" />}
                        {product.id === 'oss' && <HardDrive className="h-4 w-4" />}
                        {product.id === 'cdn' && <Network className="h-4 w-4" />}
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-xs text-muted-foreground line-clamp-2 h-8">{product.description}</p>
                      <div className="flex justify-between items-end pt-4 border-t border-primary/5">
                        <div>
                          <span className="text-[10px] opacity-50 block font-mono">起步受骗价</span>
                          <span className="text-xl font-black text-primary font-mono">${product.price}<span className="text-[10px] font-normal text-muted-foreground">/{product.unit}</span></span>
                        </div>
                        <Button size="sm" variant="default" className="bg-primary text-white h-9 font-bold" asChild>
                          <Link href={`/products/${product.id}`}>
                            立即受骗
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Satirical Marketing Banner */}
            <div className="bg-primary/5 border-2 border-dashed border-primary/20 rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute -right-10 -bottom-10 opacity-5">
                <Terminal className="h-64 w-64" />
              </div>
              <div className="flex-1 space-y-4 relative z-10">
                <Badge className="bg-accent text-black font-bold uppercase">HOT ISSUE</Badge>
                <h3 className="text-4xl font-headline font-black italic tracking-tighter italic">地窖 3.0：全面兼容“老王 WiFi”</h3>
                <p className="text-muted-foreground text-lg italic">
                  我们优化了信鸽的飞行路径，现在即使村口老王在下载 4K 广场舞，您的 1KB 流量也能在 24 小时内准时送达。
                </p>
                <Button className="bg-accent text-black font-black px-8 h-12" asChild>
                  <Link href="/products">抢先受骗</Link>
                </Button>
              </div>
            </div>

          </div>

          {/* Right Sidebar (25%) */}
          <aside className="lg:col-span-1 space-y-8">
            <DynamicOutageList />
            
            <Card className="bg-card border-primary/10 p-5">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-primary">
                <div className="h-2 w-2 rounded-full bg-primary animate-ping" />
                基础设施状态
              </h4>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase font-mono">
                    <span>信鸽存活率</span>
                    <span className="text-accent">12.5%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[12.5%]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase font-mono">
                    <span>机房老鼠活跃度</span>
                    <span className="text-primary">99% (忙碌)</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[99%]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase font-mono">
                    <span>技术员发量</span>
                    <span className="text-destructive">0% (已秃)</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-destructive w-[2%]" />
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="w-full mt-4 h-8 text-[10px] font-mono text-primary/60" asChild>
                <Link href="/nodes">查看实时节点探针 <ChevronRight className="h-3 w-3" /></Link>
              </Button>
            </Card>

            <div className="p-8 bg-primary/5 border border-dashed border-primary/30 rounded-xl text-center relative group overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20 animate-pulse" />
              <Activity className="h-10 w-10 mx-auto text-primary mb-4 animate-bounce" />
              <p className="text-[10px] font-mono uppercase text-muted-foreground font-bold">平均跑路速度</p>
              <p className="text-4xl font-black text-primary font-mono tracking-tighter">0.03s</p>
              <p className="text-[9px] mt-3 opacity-60 italic">
                “从您点击支付，到我们技术员消失在村口，仅需瞬息之间。”
              </p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="py-20 border-t border-primary/10 bg-card/40">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <CloudOff className="h-6 w-6 text-primary" />
              <span className="font-headline font-bold text-lg tracking-tighter">村口云</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              全球首家“地窖架构”云服务商。我们不生产流量，我们只是隔壁老王 WiFi 的搬运工。
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-primary">受骗指南</h5>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li><Link href="/products" className="hover:text-primary">选购受骗方案</Link></li>
              <li><Link href="/beian" className="hover:text-primary">进行梦幻备案</Link></li>
              <li><Link href="/nodes" className="hover:text-primary">查看监控探针</Link></li>
              <li>老王杂货铺 (硬件部)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-primary">法律豁免</h5>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li><Link href="/sla" className="hover:text-primary">跑路免责协议</Link></li>
              <li><Link href="/tos" className="hover:text-primary">谁看啊服务条款</Link></li>
              <li><Link href="/contact" className="hover:text-primary">投诉建议 (无用)</Link></li>
              <li>数据捐赠协议</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold uppercase tracking-widest text-primary">村口生态</h5>
            <div className="flex gap-4">
              <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center cursor-help border border-primary/20">
                <Globe className="h-5 w-5" />
              </div>
              <div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center cursor-help border border-primary/20">
                <Terminal className="h-5 w-5" />
              </div>
            </div>
            <p className="text-[10px] text-muted-foreground italic">
              关注公众号“村口老王”，解锁更多被绿姿势。
            </p>
          </div>
        </div>
        <div className="text-center opacity-30 text-[10px] font-mono uppercase tracking-[0.3em] px-4">
          © 2024 CUNKOU CLOUD · NO SLA · NO REFUNDS · NO BRAIN · POWERED BY OLD WANG'S WIFI & VILLAGE CHIEF'S GENERATOR
        </div>
      </footer>
    </div>
  );
}
