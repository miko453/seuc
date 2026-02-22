"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Home, Cpu, Database, Network, HardDrive, 
  ShieldCheck, Activity, Users, FileText, 
  CreditCard, Search, ExternalLink, Settings
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "控制台首页", icon: Home, href: "/" },
  { label: "Compute Engine (发电机)", icon: Cpu, href: "/products/compute-engine" },
  { label: "Cloud Storage (地窖)", icon: HardDrive, href: "/products/cloud-storage" },
  { label: "BigQuery (村委会大数据)", icon: Search, href: "/products/bigquery" },
  { label: "Cloud Run (村长快跑)", icon: Activity, href: "/products/cloud-run" },
  { type: "separator" },
  { label: "IAM (村委会权限管理)", icon: Users, href: "/beian" },
  { label: "账单 (韭菜收割)", icon: CreditCard, href: "/sla" },
  { label: "安全中心 (老王监控)", icon: ShieldCheck, href: "/nodes" },
  { label: "操作日志", icon: FileText, href: "/tos" },
  { type: "separator" },
  { label: "API 与服务", icon: Network, href: "/products" },
  { label: "设置", icon: Settings, href: "/contact" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="gcp-sidebar">
      <nav className="p-3 space-y-0.5">
        {NAV_ITEMS.map((item, idx) => {
          if (item.type === "separator") {
            return <div key={idx} className="h-px bg-border my-3 mx-4" />;
          }

          const Icon = item.icon!;
          const isActive = pathname === item.href;

          return (
            <Link
              key={idx}
              href={item.href!}
              className={cn(
                "flex items-center gap-3 px-4 py-2 text-[13px] rounded-sm transition-all group",
                isActive 
                  ? "bg-primary/10 text-primary font-semibold" 
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              <Icon className={cn("h-4 w-4", isActive ? "text-primary" : "text-muted-foreground")} />
              <span>{item.label}</span>
              {isActive && <div className="ml-auto w-1 h-4 bg-primary rounded-full" />}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-6 right-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center gap-2 mb-2">
          <Activity className="h-3 w-3 text-primary" />
          <span className="text-[10px] font-bold text-primary uppercase">服务状态</span>
        </div>
        <p className="text-[10px] text-muted-foreground italic leading-tight">
          当前共 50 个发电机组起火中。
        </p>
      </div>
    </aside>
  );
}