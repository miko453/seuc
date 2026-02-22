
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, HardDrive, Cpu, Skull, AlertTriangle, 
  Server, Activity, Clock, Gauge, Network, Layers, 
  Globe, Boxes, ShieldAlert, CpuIcon
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { DynamicOutageList } from "@/components/DynamicOutageList";
import { PRODUCTS } from "@/lib/satire-data";

export default function Home() {
  const villageImage = PlaceHolderImages.find(img => img.id === 'village-datacenter');
  
  return (
    <div className="relative min-h-screen bg-background">
      <GlitchOverlay />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroAnnouncement />
          
          <h1 className="text-6xl md:text-9xl font-headline font-extrabold mb-8 leading-tight">
            <span className="block italic opacity-60 text-2xl mb-4 tracking-[0.5em] uppercase">VILLAGE INFRASTRUCTURE</span>
            <span className="glitch-effect text-primary" data-text="极致超开 · 极致被绿">极致超开 · 极致被绿</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-mono italic">
            “全球首家支持‘离线运行’的云服务商。即便是断电了，我们也能靠信仰让你的网站活在缓存里。”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold px-12 py-10 text-2xl border-b-8 border-accent shadow-[0_0_30px_rgba(34,197,94,0.4)] active:translate-y-1 transition-all" asChild>
              <Link href="/config">立即入坑 (0.1元体验)</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent font-bold px-12 py-10 text-2xl hover:bg-accent/10" asChild>
              <Link href="/sla">法律(跑路)协议</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Area: Double Column */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Left Column: Products (Span 3) */}
          <div className="lg:col-span-3 space-y-20">
            
            {/* Professional Product Grid */}
            <section>
              <div className="flex items-center justify-between mb-12 border-b-2 border-primary/20 pb-4">
                <div className="flex items-center gap-4">
                  <Boxes className="h-10 w-10 text-primary" />
                  <div>
                    <h2 className="text-4xl font-headline italic">全线业务矩阵</h2>
                    <p className="text-xs font-mono text-muted-foreground uppercase mt-1">Full-Stack Satirical Solutions</p>
                  </div>
                </div>
                <Badge className="bg-accent text-black font-bold">新品首发: 跑路即服务</Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PRODUCTS.map(product => (
                  <Card key={product.id} className="bg-card/40 border-2 border-primary/10 hover:border-accent hover:shadow-[0_0_25px_rgba(132,204,22,0.15)] transition-all flex flex-col group overflow-hidden">
                    <CardHeader className="pb-4 bg-muted/5">
                      <div className="flex justify-between items-center mb-4">
                        <Badge variant="outline" className="text-[10px] border-primary/40 text-primary uppercase font-mono">{product.category}</Badge>
                        <span className="text-[10px] font-mono opacity-40">#VILLAGE-{(Math.random()*1000).toFixed(0)}</span>
                      </div>
                      <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                        {product.id.includes('vps') && <CpuIcon className="h-5 w-5" />}
                        {product.id.includes('vpn') && <Globe className="h-5 w-5" />}
                        {product.id.includes('cdn') && <Network className="h-5 w-5" />}
                        {product.id.includes('paas') && <Layers className="h-5 w-5" />}
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1 space-y-6 pt-6">
                      <p className="text-sm text-muted-foreground italic leading-relaxed min-h-[48px]">{product.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {product.features.map(f => (
                          <div key={f} className="flex items-center gap-2 text-[10px] font-mono bg-primary/5 p-2 rounded border border-primary/10">
                            <div className="h-1 w-1 rounded-full bg-accent animate-pulse" /> {f}
                          </div>
                        ))}
                      </div>

                      <div className="pt-6 border-t border-primary/5 flex justify-between items-end">
                        <div className="space-y-1">
                          <span className="text-[10px] uppercase opacity-50 font-mono block">今日特惠价</span>
                          <span className="text-4xl font-black text-primary">${product.price}<span className="text-xs font-normal text-muted-foreground">/{product.unit}</span></span>
                        </div>
                        <Button className="bg-accent hover:bg-accent/80 text-black font-bold group px-6" asChild>
                          <Link href="/config">
                            立即受骗 <Zap className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Infrastructure Section */}
            <section className="space-y-10">
              <div className="flex items-center gap-4 border-b-2 border-primary pb-4">
                <Server className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-headline italic">全球“漏电”基础设施</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card/40 border-primary/20 overflow-hidden group">
                   <div className="relative h-48">
                    {villageImage && (
                      <Image 
                        src={villageImage.imageUrl} 
                        alt="Village Server Room" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                        data-ai-hint="messy server room"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                    <Badge className="absolute top-4 right-4 bg-destructive animate-flicker">高压漏电</Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">村口 #01 总机房</h3>
                    <p className="text-sm text-muted-foreground font-mono">位于村长家地窖，目前由一台 1998 年的长城电脑担纲核心交换。散热全靠手摇蒲扇。</p>
                  </CardContent>
                </Card>
                <Card className="bg-card/40 border-primary/20 flex items-center justify-center p-12 border-dashed border-4 opacity-50 hover:opacity-100 transition-all cursor-wait">
                  <div className="text-center">
                    <ShieldAlert className="h-16 w-16 mx-auto mb-4 text-primary opacity-20" />
                    <p className="font-headline text-lg">正在众筹老王家的电表</p>
                    <p className="text-xs font-mono mt-2">一旦筹满 $50，我们将立即拉线</p>
                  </div>
                </Card>
              </div>
            </section>
          </div>

          {/* Right Column: Live Feed (Span 1) */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              
              {/* Dynamic Outage Feed */}
              <div className="bg-card/50 border-2 border-primary/20 rounded-xl p-6 shadow-xl">
                <DynamicOutageList />
              </div>

              {/* Status Mini Card */}
              <Card className="bg-accent/5 border border-accent/20 p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-accent animate-pulse" />
                  <h4 className="font-bold text-sm uppercase">核心节点状态</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="opacity-60">信鸽存活率</span>
                    <span className="text-accent">12%</span>
                  </div>
                  <div className="h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[12%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="opacity-60">邻居 WiFi 强度</span>
                    <span className="text-destructive animate-bounce">极弱 (老王在下片)</span>
                  </div>
                </div>
              </Card>

              {/* Time Sync Satire */}
              <div className="p-6 bg-primary/5 border border-primary/10 rounded-xl text-center">
                <Clock className="h-8 w-8 mx-auto text-primary mb-3" />
                <p className="text-[10px] font-mono uppercase mb-1">全球信鸽时间同步</p>
                <p className="text-xl font-black text-primary font-mono tabular-nums">
                   ERR-24H-LAG
                </p>
                <p className="text-[9px] text-muted-foreground italic mt-3 leading-relaxed">
                  “我们的时间永远比你慢 24 小时，这样我们就有足够的时间在出事后想好借口。”
                </p>
              </div>
            </div>
          </aside>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-20 border-t border-primary/20 bg-card/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-12 mb-12">
            <div className="space-y-4">
              <h5 className="font-bold text-sm text-primary uppercase">关于被绿</h5>
              <div className="flex flex-col gap-2 text-[10px] font-mono text-muted-foreground">
                <Link href="/sla">跑路协议</Link>
                <Link href="/contact">投诉中心 (无响应)</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h5 className="font-bold text-sm text-primary uppercase">友情链接</h5>
              <div className="flex flex-col gap-2 text-[10px] font-mono text-muted-foreground">
                <Link href="#">隔壁老王 WiFi</Link>
                <Link href="#">村口王奶奶代收费</Link>
              </div>
            </div>
          </div>
          <p className="text-[10px] font-mono mb-4 uppercase tracking-[0.5em] opacity-30">© 2024 CUNKOU CLOUD · VILLAGE INFRA · NO REFUNDS</p>
          <p className="text-[9px] uppercase tracking-[0.2em] opacity-20 max-w-2xl mx-auto italic">
            免责声明：本网站所述所有产品、电力供应、网络带宽、信鸽及老王均为虚构。若您尝试转账，我们将非常乐意地将其用于提升我们的手摇发电皮带质量。
          </p>
        </div>
      </footer>
    </div>
  );
}
