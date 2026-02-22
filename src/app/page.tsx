import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CloudOff, Zap, ShieldAlert, WifiOff, HardDrive, Cpu, Skull } from "lucide-react";
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <HeroAnnouncement />
          
          <h1 className="text-6xl md:text-9xl font-headline font-extrabold mb-6 leading-none">
            <span className="block italic opacity-70 text-4xl mb-4">超开云 · 谁买谁</span>
            <span className="glitch-effect text-primary" data-text="绿了">绿了</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 font-light italic">
            “我们从村口回收站搞了几台旧 486。我们把它们并联了。现在你可以用来托管你的 Hello World 了。崩溃概不负责。”
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/80 text-white font-bold px-12 py-8 text-xl border-b-4 border-accent" asChild>
              <Link href="/config">立即受骗</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-accent text-accent font-bold px-12 py-8 text-xl" asChild>
              <Link href="/sla">跑路声明 (SLA)</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Satirical Marketing Grid */}
      <section className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:-rotate-1 border-2 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
              <CardContent className="p-8 text-center">
                <HardDrive className="h-12 w-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl mb-4 font-headline text-accent uppercase italic">内存超开 1000%</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  物理内存 1GB？没关系，我们可以卖给 100 个人。只要你们不同时运行程序，谁也发现不了我们在骗人。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:rotate-1 border-2 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
              <CardContent className="p-8 text-center">
                <Cpu className="h-12 w-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl mb-4 font-headline text-accent uppercase italic">地窖级冷却</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  服务器存放在村长家地窖，常年恒温。如果太热了，技术员会往主板上泼一盆凉水强制降温。
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background/40 border-primary/30 transform transition hover:scale-[1.02] hover:-rotate-1 border-2 shadow-[0_0_15px_rgba(34,197,94,0.05)]">
              <CardContent className="p-8 text-center">
                <Skull className="h-12 w-12 text-primary mb-6 mx-auto" />
                <h3 className="text-2xl mb-4 font-headline text-accent uppercase italic">数据定期蒸发</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  我们不信备份，我们只信天意。每逢农历初一，我们会随机格式化一台母鸡，以祭奠死去的电子。
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
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur px-3 py-1 text-[10px] font-mono border border-accent/50 text-accent">
                NODE_CUNKOU_01: 村长家地窖 (当前状态: 漏水)
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl font-headline tracking-tighter text-primary italic">“<span className="text-accent">邻居 WiFi</span>” 核心骨干网</h2>
              <p className="text-lg text-muted-foreground italic">
                我们的带宽是租来的？不，是蹭来的。邻居老王换密码之日，就是我们数据中心断网之时。
              </p>
              <ul className="space-y-4 font-mono text-xs uppercase">
                <li className="flex items-center gap-3">
                  <WifiOff className="h-5 w-5 text-accent" /> 带宽全靠老王不关路由 (爆破中)
                </li>
                <li className="flex items-center gap-3">
                  <Zap className="h-5 w-5 text-accent" /> 极速 56kbps 拨号回国 (猫尿了)
                </li>
                <li className="flex items-center gap-3">
                  <CloudOff className="h-5 w-5 text-accent" /> 提供“运营商流量卡”专用加速器
                </li>
              </ul>
              <Button asChild className="bg-accent text-black font-bold tracking-widest px-8 hover:bg-accent/80 border-b-4 border-primary h-12">
                <Link href="/dashboard">查看实时瘫痪状态</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-primary/20 text-center opacity-50">
        <p className="text-sm font-mono mb-2 uppercase">© 2024 村口云 - 你敢买我敢卖。</p>
        <p className="text-[10px] uppercase tracking-[0.2em]">你的钱就是我们的钱。我们的服务器在物理上是不存在的。</p>
      </footer>
    </div>
  );
}
