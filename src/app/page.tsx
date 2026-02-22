import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CloudOff, Zap, ShieldAlert, WifiOff, HardDrive, Cpu, 
  Skull, AlertTriangle, Calendar, ChevronRight, Server, 
  Activity, Clock, Gauge
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { DynamicOutageList } from "@/components/DynamicOutageList";

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
          
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold mb-6 leading-tight">
            <span className="block italic opacity-60 text-3xl mb-4 tracking-widest">CUNKOU CLOUD · VILLAGE EDGE</span>
            <span className="glitch-effect text-primary" data-text="极致超开 · 随时跑路">极致超开 · 随时跑路</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light italic">
            “物理 1GB 内存卖给 1000 人。我们的口号是：只要网线不被羊咬断，我们就还能撑一秒。”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold px-12 py-8 text-xl border-b-4 border-accent shadow-[0_0_20px_rgba(34,197,94,0.3)]" asChild>
              <Link href="/config">立即受骗 (0.1元起)</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent font-bold px-12 py-8 text-xl hover:bg-accent/10" asChild>
              <Link href="/sla">法律免责声明</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content: Two Columns */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Featured "Nodes" & Services */}
            <div className="lg:col-span-2 space-y-12">
              <div className="flex items-center gap-4 border-b-2 border-primary pb-4 mb-8">
                <Server className="h-8 w-8 text-primary" />
                <h2 className="text-4xl font-headline italic">全球“地窖”节点</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="bg-card/40 border-primary/20 hover:border-accent transition-all group">
                  <div className="relative h-48 overflow-hidden">
                    {villageImage && (
                      <Image 
                        src={villageImage.imageUrl} 
                        alt="Village Server Room" 
                        fill 
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                        data-ai-hint="old messy server"
                      />
                    )}
                    <Badge className="absolute top-4 right-4 bg-destructive animate-pulse">漏水运行中</Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-primary">村口 #01 (主节点)</h3>
                    <p className="text-sm text-muted-foreground italic font-mono leading-relaxed">
                      位置：村长家地窖。电力来源：手摇发电机 + 太阳能（仅限晴天）。
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono uppercase opacity-70">
                      <div className="flex items-center gap-2"><Cpu className="h-3 w-3" /> 超开率: 10,000%</div>
                      <div className="flex items-center gap-2"><Gauge className="h-3 w-3" /> 延迟: 5000ms+</div>
                    </div>
                    <Button variant="outline" className="w-full border-primary/40 text-xs py-1" asChild>
                      <Link href="/dashboard">查看此节点实时瘫痪</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-card/40 border-primary/20 hover:border-accent transition-all group">
                  <div className="relative h-48 overflow-hidden bg-black flex items-center justify-center">
                    <Skull className="h-16 w-16 text-primary/20 group-hover:text-primary transition-colors" />
                    <Badge className="absolute top-4 right-4 bg-secondary">筹建中 (缺电)</Badge>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-primary">隔壁老王 WiFi 节点</h3>
                    <p className="text-sm text-muted-foreground italic font-mono leading-relaxed">
                      位置：老王家阳台。带宽来源：WPA2 破解中。若连接失败，请等待老王重启路由。
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono uppercase opacity-70">
                      <div className="flex items-center gap-2"><WifiOff className="h-3 w-3" /> 稳定性: 看缘分</div>
                      <div className="flex items-center gap-2"><Zap className="h-3 w-3" /> 峰值: 56Kbps</div>
                    </div>
                    <Button variant="outline" disabled className="w-full border-muted text-xs py-1">等待老王同意</Button>
                  </CardContent>
                </Card>
              </div>

              {/* Satirical Marketing Block */}
              <div className="bg-primary/5 border-2 border-dashed border-primary/30 rounded-xl p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <Activity className="h-6 w-6 text-primary animate-pulse" />
                  <h4 className="text-xl font-bold uppercase">为什么选择村口云？</h4>
                </div>
                <ul className="grid md:grid-cols-2 gap-4 text-sm font-mono opacity-80">
                  <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> 数据绝对安全：因为我们自己也找不到了。</li>
                  <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> 环保领先：全行业首创“红薯散热”技术。</li>
                  <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> 物理隔离：服务器藏在地窖，黑客进村必被狗咬。</li>
                  <li className="flex items-center gap-2"><ChevronRight className="h-3 w-3 text-accent" /> 极致性价比：0.1元体验被绿的快感。</li>
                </ul>
              </div>
            </div>

            {/* Right Column: Sidebar Announcements */}
            <aside className="space-y-8">
              <div className="flex items-center justify-between border-b-2 border-accent pb-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent animate-bounce" />
                  <h3 className="text-xl font-headline italic">最新噩耗</h3>
                </div>
                <Badge variant="outline" className="text-[10px] font-mono opacity-50">WordPress 风格</Badge>
              </div>

              {/* Dynamic Outage List Component */}
              <DynamicOutageList />

              {/* Sidebar Footer Widget */}
              <div className="p-4 bg-muted/10 border border-primary/20 rounded text-center space-y-3">
                <Clock className="h-6 w-6 mx-auto text-primary" />
                <p className="text-[10px] font-mono uppercase leading-tight">
                  当前服务器时间<br />
                  <span className="text-accent text-xs font-bold">2024-VILLAGE-CLOCK-ERROR</span>
                </p>
                <p className="text-[9px] text-muted-foreground italic">
                  * 时间系统已由信鸽协议同步，误差约 48 小时。
                </p>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 text-center bg-card/10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm font-mono mb-2 uppercase tracking-widest">© 2024 村口云 (Cunkou Cloud) - 谁买谁绿</p>
          <div className="flex justify-center gap-6 text-[10px] text-muted-foreground uppercase mb-4">
            <Link href="/sla" className="hover:text-primary underline">免责协议</Link>
            <Link href="/contact" className="hover:text-primary underline">投诉虚无</Link>
            <Link href="/config" className="hover:text-primary underline">再次受骗</Link>
          </div>
          <p className="text-[9px] uppercase tracking-[0.3em] opacity-30">警告：本站所有服务均为虚构。若你当真，说明你真的很适合我们的超开服务。</p>
        </div>
      </footer>
    </div>
  );
}
