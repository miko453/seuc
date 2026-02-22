
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CloudOff, Zap, ShieldAlert, WifiOff, HardDrive, Cpu, 
  Skull, AlertTriangle, Calendar, ChevronRight, Server, 
  Activity, Clock, Gauge, Network, Layers, Share2
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
      <section className="relative py-20 overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroAnnouncement />
          
          <h1 className="text-5xl md:text-8xl font-headline font-extrabold mb-6 leading-tight">
            <span className="block italic opacity-60 text-2xl mb-4 tracking-widest uppercase">Cunkou Cloud · Professional Overselling</span>
            <span className="glitch-effect text-primary" data-text="极致被绿 · 随时跑路">极致被绿 · 随时跑路</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-mono italic">
            “1GB 卖给 1000 人。我们的口号是：只要羊不啃断光缆，我就能再骗你一年。”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold px-12 py-8 text-xl border-b-4 border-accent shadow-[0_0_20px_rgba(34,197,94,0.3)]" asChild>
              <Link href="/config">立即入坑 (0.1元体验)</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent font-bold px-12 py-8 text-xl hover:bg-accent/10" asChild>
              <Link href="/sla">法律(跑路)协议</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Satirical Products Grid */}
      <section className="py-16 bg-muted/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-10">
            <Layers className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-headline italic">精选“超开”全家桶</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUCTS.map(product => (
              <Card key={product.id} className="bg-card border-2 border-primary/10 hover:border-accent hover:shadow-[0_0_15px_rgba(132,204,22,0.1)] transition-all flex flex-col group">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline" className="text-[10px] border-primary/30 text-primary">已售 999k+</Badge>
                    <Network className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>
                  <CardTitle className="text-lg font-bold group-hover:text-primary">{product.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 space-y-4 pt-2">
                  <p className="text-xs text-muted-foreground italic leading-relaxed">{product.description}</p>
                  <div className="space-y-1">
                    {product.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-[10px] font-mono opacity-70">
                        <Zap className="h-2 w-2 text-accent" /> {f}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <div className="p-6 pt-0 mt-auto border-t border-primary/5">
                  <div className="flex justify-between items-end mb-4">
                    <span className="text-[10px] uppercase opacity-50 font-mono">惊喜价</span>
                    <span className="text-2xl font-bold text-primary">${product.price}<span className="text-[10px] font-normal text-muted-foreground">/{product.unit}</span></span>
                  </div>
                  <Button variant="outline" className="w-full text-xs font-bold border-primary/30 hover:bg-primary hover:text-white" asChild>
                    <Link href="/config">立即受骗</Link>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column Layout: Nodes and Live Feed */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Nodes */}
            <div className="lg:col-span-2 space-y-10">
              <div className="flex items-center gap-4 border-b-2 border-primary pb-4">
                <Server className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-headline italic">全球“漏电”节点</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/40 border-primary/20 hover:border-accent transition-all group overflow-hidden">
                  <div className="relative h-40">
                    {villageImage && (
                      <Image 
                        src={villageImage.imageUrl} 
                        alt="Village Server Room" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        data-ai-hint="old messy server"
                      />
                    )}
                    <Badge className="absolute top-2 right-2 bg-destructive animate-pulse">漏电中</Badge>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="text-xl font-bold text-primary">村口 #01 (总机)</h3>
                    <p className="text-[11px] text-muted-foreground font-mono leading-relaxed">
                      村长家地窖，手摇发电。
                    </p>
                    <div className="flex justify-between text-[10px] font-mono uppercase opacity-70">
                      <span className="flex items-center gap-1"><Cpu className="h-3 w-3" /> 超开 1万%</span>
                      <span className="flex items-center gap-1"><Gauge className="h-3 w-3" /> 5s 延迟</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-card/40 border-primary/20 hover:border-accent transition-all group overflow-hidden">
                  <div className="relative h-40 bg-black flex items-center justify-center">
                    <Skull className="h-12 w-12 text-primary/10 group-hover:text-primary transition-colors" />
                    <Badge className="absolute top-2 right-2 bg-secondary">筹建 (缺钱)</Badge>
                  </div>
                  <CardContent className="p-5 space-y-3">
                    <h3 className="text-xl font-bold text-primary">隔壁老王 WiFi 节点</h3>
                    <p className="text-[11px] text-muted-foreground font-mono leading-relaxed">
                      老王家阳台。若连接失败，请等待老王重启路由。
                    </p>
                    <div className="flex justify-between text-[10px] font-mono uppercase opacity-70">
                      <span className="flex items-center gap-1"><WifiOff className="h-3 w-3" /> 靠缘分</span>
                      <span className="flex items-center gap-1"><Zap className="h-3 w-3" /> 1KB 峰值</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: Live Outage Feed */}
            <aside className="space-y-6">
              <div className="flex items-center justify-between border-b-2 border-accent pb-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent animate-bounce" />
                  <h3 className="text-xl font-headline italic">实时直播噩耗</h3>
                </div>
                <Badge variant="outline" className="text-[8px] font-mono opacity-50">每6秒随机刷新</Badge>
              </div>

              <div className="bg-card/30 border border-primary/10 rounded-lg p-5">
                <DynamicOutageList />
              </div>

              <div className="p-4 bg-muted/10 border border-primary/20 rounded text-center space-y-3">
                <Clock className="h-5 w-5 mx-auto text-primary" />
                <p className="text-[9px] font-mono uppercase leading-tight">
                  当前信鸽同步时间<br />
                  <span className="text-accent text-xs font-bold">2024-VILLAGE-ERROR</span>
                </p>
                <p className="text-[8px] text-muted-foreground italic">
                  * 误差约 48 小时，请勿作为医疗参考。
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-primary/20 text-center bg-card/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] font-mono mb-2 uppercase tracking-[0.2em] opacity-60">© 2024 村口云 (Cunkou Cloud) - 谁买谁绿</p>
          <div className="flex justify-center gap-6 text-[9px] text-muted-foreground uppercase mb-4">
            <Link href="/sla" className="hover:text-primary">跑路协议</Link>
            <Link href="/contact" className="hover:text-primary">投诉虚无</Link>
            <Link href="/config" className="hover:text-primary">再次受骗</Link>
          </div>
          <p className="text-[8px] uppercase tracking-[0.3em] opacity-20 max-w-lg mx-auto leading-relaxed">
            警告：本站所有服务均为虚构。若你当真，说明你真的很适合我们的超开服务。
          </p>
        </div>
      </footer>
    </div>
  );
}
