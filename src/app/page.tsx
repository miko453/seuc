
import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Zap, Boxes, Network, Layers, Globe, CpuIcon, Database, Activity, Clock
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
      
      {/* Hero Section */}
      <section className="relative py-16 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <HeroAnnouncement />
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold mb-6 leading-tight">
            <span className="glitch-effect text-primary" data-text="村口云：极致超开">村口云：极致超开</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 font-mono italic">
            “全球首家支持‘被绿’体验的云。我们不生产代码，我们只是老王 WiFi 的搬运工。”
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/80 font-bold border-b-4 border-accent" asChild>
              <Link href="/dashboard">查看实时瘫痪监控</Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Product Grid */}
          <div className="lg:col-span-3 space-y-12">
            <div className="flex items-center gap-3 border-b border-primary/20 pb-2">
              <Boxes className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-headline italic">业务受骗中心</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRODUCTS.map(product => (
                <Card key={product.id} className="bg-card/40 border-2 border-primary/10 hover:border-accent transition-all group">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Badge variant="outline" className="text-[10px] text-primary font-mono uppercase">{product.category}</Badge>
                      <span className="text-[10px] font-mono opacity-30">#V-{product.id.toUpperCase()}</span>
                    </div>
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      {product.id === 'vps' && <CpuIcon className="h-5 w-5" />}
                      {product.id === 'vpn' && <Globe className="h-5 w-5" />}
                      {product.id === 'cdn' && <Network className="h-5 w-5" />}
                      {product.id === 'paas' && <Layers className="h-5 w-5" />}
                      {product.id === 'db' && <Database className="h-5 w-5" />}
                      {product.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground italic h-10 overflow-hidden">{product.description}</p>
                    <div className="flex justify-between items-end pt-4 border-t border-primary/5">
                      <div>
                        <span className="text-xs opacity-50 block font-mono">起步价</span>
                        <span className="text-2xl font-black text-primary">${product.price}<span className="text-[10px] font-normal">/{product.unit}</span></span>
                      </div>
                      <Button size="sm" className="bg-accent text-black font-bold" asChild>
                        <Link href={`/products/${product.id}`}>
                          去配(被)置 <Zap className="ml-1 h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Sidebar Feed */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-card/50 border border-primary/20 rounded-lg p-4">
              <DynamicOutageList />
            </div>
            
            <Card className="bg-accent/5 border border-accent/20 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Activity className="h-4 w-4 text-accent animate-pulse" />
                <h4 className="font-bold text-xs uppercase">信鸽存活率</h4>
              </div>
              <div className="space-y-2">
                <div className="h-1 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-accent w-[15%]" />
                </div>
                <p className="text-[9px] font-mono opacity-60">目前 15%，老王正在村口架火。</p>
              </div>
            </Card>

            <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg text-center">
              <Clock className="h-6 w-6 mx-auto text-primary mb-2" />
              <p className="text-[10px] font-mono uppercase">信鸽误差时间</p>
              <p className="text-lg font-black text-primary font-mono">-24:00:00</p>
            </div>
          </aside>
        </div>
      </main>

      <footer className="py-12 border-t border-primary/20 text-center opacity-40 text-[10px] font-mono uppercase tracking-widest">
        © 2024 CUNKOU CLOUD · NO SLA · NO REFUNDS · JUST GREEN
      </footer>
    </div>
  );
}
