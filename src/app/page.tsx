
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, Boxes, Network, Layers, Globe, Cpu, Database, Activity, HardDrive, ShieldCheck, ChevronRight, Terminal
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
            <h1 className="text-6xl font-headline font-black mb-6 leading-[1.1] tracking-tighter">
              专业的 <span className="text-primary italic">超开</span> 云计算<br />
              <span className="text-accent underline decoration-primary decoration-4">赋能每一份被绿的信任</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 font-light max-w-xl">
              全球首家“地窖架构”云服务商。内存超卖 1000%，带宽全靠邻居老王，让您的应用在玄学中优雅奔跑。
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 font-bold px-8 h-12" asChild>
                <Link href="/dashboard">立即开启受骗之旅</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/5 px-8 h-12" asChild>
                <Link href="/sla">查看跑路免责协议</Link>
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
                  <h2 className="text-2xl font-bold">核心受骗业务</h2>
                </div>
                <Link href="/products" className="text-sm text-primary hover:underline flex items-center gap-1">
                  查看全部 (99+) <ChevronRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {PRODUCTS.map(product => (
                  <Card key={product.id} className="bg-card/40 border-primary/10 hover:border-accent transition-all group relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-2 opacity-5">
                      <Zap className="h-12 w-12 text-primary" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline" className="text-[9px] font-mono uppercase bg-primary/5 text-primary border-primary/20">{product.category}</Badge>
                        <ShieldCheck className="h-4 w-4 text-primary/30" />
                      </div>
                      <CardTitle className="text-lg font-bold flex items-center gap-2">
                        {product.id === 'vps' && <Cpu className="h-4 w-4" />}
                        {product.id === 'vpn' && <Globe className="h-4 w-4" />}
                        {product.id === 'cdn' && <Network className="h-4 w-4" />}
                        {product.id === 'db' && <Database className="h-4 w-4" />}
                        {product.id === 'oss' && <HardDrive className="h-4 w-4" />}
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-xs text-muted-foreground line-clamp-2 h-8">{product.description}</p>
                      <ul className="space-y-1.5">
                        {product.features.slice(0, 2).map((f, i) => (
                          <li key={i} className="text-[10px] flex items-center gap-2 text-muted-foreground/80">
                            <div className="h-1 w-1 rounded-full bg-primary" /> {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex justify-between items-end pt-4 border-t border-primary/5">
                        <div>
                          <span className="text-[10px] opacity-50 block font-mono">初级受骗价</span>
                          <span className="text-xl font-black text-primary">${product.price}<span className="text-[10px] font-normal text-muted-foreground">/{product.unit}</span></span>
                        </div>
                        <Button size="sm" variant="default" className="bg-primary text-white h-8 text-xs font-bold" asChild>
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
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 space-y-4">
                <Badge className="bg-accent text-black font-bold">新上线</Badge>
                <h3 className="text-3xl font-bold italic">“被绿”即时保护 2.0</h3>
                <p className="text-muted-foreground">
                  当老王拔掉网线的那一刻，我们的信鸽系统会自动接管您的 1KB 流量，并为您在大厅循环播放《绿光》。
                </p>
                <Button className="bg-accent text-black font-bold">立即开启 (强行订阅)</Button>
              </div>
              <div className="h-48 w-48 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                <Activity className="h-24 w-24 text-primary" />
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
                  <div className="flex justify-between text-[10px] uppercase">
                    <span>信鸽存活率</span>
                    <span className="text-accent">12.5%</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[12.5%]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase">
                    <span>地窖湿度</span>
                    <span className="text-primary">98% (极佳)</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[98%]" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase">
                    <span>老王 WiFi 强度</span>
                    <span className="text-destructive">一格 (随缘)</span>
                  </div>
                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-destructive w-[15%]" />
                  </div>
                </div>
              </div>
            </Card>

            <div className="p-6 bg-primary/5 border border-dashed border-primary/30 rounded-lg text-center relative group">
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Activity className="h-8 w-8 mx-auto text-primary mb-3 animate-bounce" />
              <p className="text-[10px] font-mono uppercase text-muted-foreground">平均跑路速度</p>
              <p className="text-3xl font-black text-primary font-mono tracking-tighter">0.03s</p>
              <p className="text-[9px] mt-2 opacity-50 italic">从收钱到拉黑</p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="py-16 border-t border-primary/10 bg-card/20">
        <div className="max-w-[1400px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h5 className="text-sm font-bold">关于我们</h5>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li>村口故事</li>
              <li>老王的秘密</li>
              <li>地窖探险</li>
              <li>加入我们 (当信鸽)</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold">法律条款</h5>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li>免责(跑路)声明</li>
              <li>客户(大冤种)权益</li>
              <li>数据(公共)隐私</li>
              <li>举报(无门)入口</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold">友情链接</h5>
            <ul className="space-y-2 text-xs text-muted-foreground font-light">
              <li>拼夕夕云</li>
              <li>砍一刀托管</li>
              <li>老王杂货铺</li>
              <li>村委会官网</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="text-sm font-bold">关注我们</h5>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center cursor-help">
                <Globe className="h-4 w-4" />
              </div>
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center cursor-help">
                <Terminal className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="text-center opacity-30 text-[10px] font-mono uppercase tracking-[0.2em]">
          © 2024 CUNKOU CLOUD · NO SLA · NO REFUNDS · POWERED BY OLD WANG'S WIFI
        </div>
      </footer>
    </div>
  );
}
