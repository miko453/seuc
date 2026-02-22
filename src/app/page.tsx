import { Navigation } from "@/components/Navigation";
import { GlitchOverlay } from "@/components/GlitchOverlay";
import { HeroAnnouncement } from "@/components/HeroAnnouncement";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudOff, Zap, ShieldAlert, WifiOff, HardDrive, Cpu, Skull, AlertTriangle, Calendar, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";

const ANNOUNCEMENTS = [
  {
    date: "2024-05-20",
    title: "关于机房电源由“国家电网”切换为“手摇发电”的通知",
    excerpt: "因交不起电费，地窖机房已被拉闸。目前由技术员小王轮班手摇发电机，网速取决于小王的体力，请受害者们谅解。",
    tag: "电力故障",
    status: "火化中"
  },
  {
    date: "2024-05-18",
    title: "紧急：村口大黄狗误入地窖，电源线受损",
    excerpt: "机房唯一一条电源线被村长家的大黄狗当成了磨牙棒。目前我们正在尝试用铁丝和透明胶带进行修复。",
    tag: "硬件损坏",
    status: "玄学运行"
  },
  {
    date: "2024-05-15",
    title: "关于隔壁老王更改 WiFi 密码的重大事故说明",
    excerpt: "我们的骨干网出口（老王家 WiFi）突然断连。据查是老王改了密码，技术团队已带上礼品上门物理公关。",
    tag: "网络中断",
    status: "全线瘫痪"
  },
  {
    date: "2024-05-12",
    title: "内存超开倍率临时上调至 1,000,000% 公告",
    excerpt: "为了迎接新客户，我们决定将原有的 2GB 内存再卖给 5000 人。如果你发现程序无法启动，请尝试在心里默念“我没被绿”。",
    tag: "性能调整",
    status: "全靠想象"
  },
  {
    date: "2024-05-10",
    title: "地窖进水：主服务器已转为“全水冷模式”",
    excerpt: "昨日大雨导致地窖积水，服务器目前漂浮在水面上运行。散热效果极佳，但由于漏电，访问者可能会感到指尖酥麻。",
    tag: "环境预警",
    status: "漏电运行"
  },
  {
    date: "2024-05-08",
    title: "技术员小王拆除 CPU 换玫瑰花事件处理进展",
    excerpt: "小王为了给前女友庆生，私自拆除了 03 号节点的 CPU 卖给了废品站。目前该节点由一台小霸王学习机代号运行。",
    tag: "人为因素",
    status: "降级运行"
  },
  {
    date: "2024-05-05",
    title: "红薯发芽导致散热风扇堵塞的紧急通告",
    excerpt: "由于地窖存放的红薯因季节原因大量发芽，藤蔓缠绕了风扇，服务器散发着烤地瓜的香气。请勿在访问时口水直流。",
    tag: "生物干扰",
    status: "香气扑鼻"
  },
  {
    date: "2024-05-01",
    title: "HelloWorld 运行导致整村保险丝烧毁事故",
    excerpt: "某用户运行了极其复杂的 HelloWorld.exe，瞬间占用了地窖所有电力资源，导致村口变压器冒烟。对此我们不予赔偿。",
    tag: "重大事故",
    status: "冒烟中"
  },
  {
    date: "2024-04-28",
    title: "关于引入“信鸽载体协议(IPoAC)”的实验性通知",
    excerpt: "由于网线被羊咬断，我们开始测试信鸽传输数据。延迟预计在 3-5 小时，且鸽子可能在村口被老鹰拦截，丢包率 99%。",
    tag: "协议升级",
    status: "正在飞翔"
  },
  {
    date: "2024-04-25",
    title: "数据库逻辑性消失：我们决定将其定义为“禅意备份”",
    excerpt: "数据库内容由于不明原因全部清空。我们认为这是宇宙在提醒我们要放下执念，所有的过去皆为虚无。祝您生活愉快。",
    tag: "数据丢失",
    status: "四大皆空"
  }
];

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
            “全球首家位于村长家地窖的云服务商。物理内存 1GB 卖给 1000 人。我们的口号是：只要不重启，谁也别想跑。”
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

      {/* WordPress Style Announcements Section */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 border-b-2 border-primary pb-4">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-4xl font-headline italic">最新事故公告 <span className="text-sm font-mono opacity-50 uppercase tracking-widest ml-4">Outage Center</span></h2>
            </div>
            <Link href="#" className="text-primary hover:text-accent font-mono text-xs underline decoration-dotted underline-offset-4">查看更多黑历史</Link>
          </div>

          <div className="space-y-6">
            {ANNOUNCEMENTS.map((post, idx) => (
              <Card key={idx} className="bg-card/50 border-primary/20 hover:border-accent/40 transition-colors group cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 text-primary p-2 rounded">
                        <Calendar className="h-4 w-4" />
                      </div>
                      <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
                      <Badge variant="outline" className="border-primary/40 text-primary font-mono text-[10px]">{post.tag}</Badge>
                    </div>
                    <Badge className="bg-destructive/20 text-destructive border-destructive/30 text-[10px] uppercase tracking-tighter">当前状态: {post.status}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                    {post.title}
                    <ChevronRight className="h-5 w-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed italic">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 border-2 border-dashed border-primary/30 rounded-lg bg-primary/5 text-center">
            <Skull className="h-10 w-10 text-primary mx-auto mb-4" />
            <p className="font-headline text-lg italic mb-2">“数据已经灰飞烟灭，生活还要继续。”</p>
            <p className="text-xs text-muted-foreground font-mono">如果你也有离谱的报错经历，请发邮件给我们，我们将挑选最离谱的编入公告。</p>
          </div>
        </div>
      </section>

      {/* Featured "Service" */}
      <section className="py-24 border-y border-primary/20 bg-card/20">
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
