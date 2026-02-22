import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CloudOff, Zap, ShieldAlert, WifiOff, HardDrive, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function Home() {
  const villageImage = PlaceHolderImages.find(img => img.id === 'village-datacenter');
  
  return (
    <div className="relative">
      <GlitchOverlay />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden border-b border-primary/20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold mb-6 leading-none">
            <span className="block italic opacity-70 text-4xl mb-4">我们从不承诺</span>
            <span className="glitch-effect" data-text="在线率">在线率</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light italic">
            “我们在郊区地下室发现了一些旧服务器。我们把它们插上了电。现在你可以托管你的应用了。祝你好运。”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary text-white font-bold px-12 py-8 text-xl border-b-4 border-accent">
              立即部署 (大概吧)
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent font-bold px-12 py-8 text-xl">
              阅读谎言 (SLA)
            </Button>
          </div>
        </div>
      </section>

      {/* Satirical Marketing Grid */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:-rotate-1">
              <CardContent className="p-8">
                <HardDrive className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl mb-4 font-headline text-accent">内存超卖 1000%</h3>
                <p className="text-muted-foreground leading-relaxed">
                  我们专利的内存管理技术允许我们将同一台 8GB 机器上的 64GB 内存同时卖给 200 个不同的客户。这叫“量子交换”。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:rotate-1">
              <CardContent className="p-8">
                <Cpu className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl mb-4 font-headline text-accent">乡村数据中心</h3>
                <p className="text-muted-foreground leading-relaxed">
                  战略部署在不知名的地下室和废弃储藏室。冷却系统由一台台式风扇提供（如果技术员记得开的话）。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:-rotate-1">
              <CardContent className="p-8">
                <ShieldAlert className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl mb-4 font-headline text-accent">零安全保障</h3>
                <p className="text-muted-foreground leading-relaxed">
                  防火墙？更像是“火情建议”。我们相信真正的开放互联网，任何人都应该能访问你的数据库。这对开发者的意志是一种锻炼。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured "Service" */}
      <section className="py-24 border-y border-primary/20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-lg overflow-hidden border-4 border-primary/40 group">
              {villageImage && (
                <Image 
                  src={villageImage.imageUrl} 
                  alt={villageImage.description} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                  data-ai-hint={villageImage.imageHint}
                />
              )}
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-xs font-mono border border-accent/50 text-accent">
                UNCERTAIN_EDGE_01: 郊区地下室
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-headline tracking-tighter">“<span className="text-accent italic">暗黑互联网</span>” 边缘</h2>
              <p className="text-lg text-muted-foreground italic">
                我们的网络极其不稳定，以至于处于叠加态。你的数据包发出了吗？丢了吗？直到它没能到达之前，没人知道。
              </p>
              <ul className="space-y-4 font-mono text-sm uppercase">
                <li className="flex items-center gap-3">
                  <WifiOff className="h-5 w-5 text-accent" /> 附赠随机丢包
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" /> 高压延迟峰值
                </li>
                <li className="flex items-center gap-3">
                  <CloudOff className="h-5 w-5 text-accent" /> 每两周一次的数据蒸发事件
                </li>
              </ul>
              <Button asChild className="bg-accent text-white font-bold tracking-widest px-8">
                <Link href="/dashboard">查看实时混乱状态</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 text-center opacity-50">
        <p className="text-sm font-mono mb-2 uppercase">© 2024 不可靠云有限公司 - 灾难集团旗下的子公司。</p>
        <p className="text-[10px] uppercase tracking-[0.2em]">隐私是不可能的。停机是不可避免的。利润是我们唯一的追求。</p>
      </footer>
    </div>
  );
}
