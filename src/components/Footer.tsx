import Link from "next/link";
import { CloudOff, Github, Twitter, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-primary/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <CloudOff className="h-6 w-6 text-primary" />
              <span className="font-bold tracking-tighter italic">村口云</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              全球首家基于“邻居 WiFi”和“地窖机房”的去中心化（指设备散落在全村）云计算服务商。
            </p>
            <div className="flex gap-4">
              <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
              <Github className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
              <Mail className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">产品中心</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/products/vps" className="hover:text-primary">超开 VPS</Link></li>
              <li><Link href="/products/vds" className="hover:text-primary">灵异 VDS</Link></li>
              <li><Link href="/products/cdn" className="hover:text-primary">信鸽 CDN</Link></li>
              <li><Link href="/products/oss" className="hover:text-primary">地窖存储</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">支持与文档</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/contact" className="hover:text-primary">提交工单</Link></li>
              <li><Link href="/nodes" className="hover:text-primary">节点状态</Link></li>
              <li><Link href="/beian" className="hover:text-primary">合规备案</Link></li>
              <li><Link href="/tos" className="hover:text-primary">谁看啊 TOS</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">法律条款</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><Link href="/sla" className="hover:text-primary">服务等级协议 (SLA)</Link></li>
              <li><Link href="/tos" className="hover:text-primary">隐私政策</Link></li>
              <li><Link href="/tos" className="hover:text-primary">跑路免责声明</Link></li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h4 className="font-bold text-sm mb-4 uppercase tracking-widest text-primary">友情链接</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li><span className="opacity-50">拼夕夕云 (合作伙伴)</span></li>
              <li><span className="opacity-50">老王杂货铺 (硬件供货)</span></li>
              <li><span className="opacity-50">村委会大数据局</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-muted-foreground font-mono">
            © 2026 大槐树村信息技术发展有限公司. All Rights Reserved. (并无任何法律效力)
          </p>
          <p className="text-[10px] text-muted-foreground flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> 
            地窖主发电机组运行正常 (剩余柴油: 2L)
          </p>
        </div>
      </div>
    </footer>
  );
}
