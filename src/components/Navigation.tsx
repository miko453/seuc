"use client";

import Link from "next/link";
import { 
  CloudOff, Menu, X, ShoppingCart, 
  ShieldCheck, Activity, HelpCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "选购业务", href: "/products", icon: ShoppingCart },
  { label: "节点探针", href: "/nodes", icon: Activity },
  { label: "合规备案", href: "/beian", icon: ShieldCheck },
  { label: "帮助中心", href: "/contact", icon: HelpCircle },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-primary/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <CloudOff className="h-8 w-8 text-primary group-hover:animate-glitch" />
              <div className="flex flex-col -space-y-1">
                <span className="font-black text-xl italic tracking-tighter">村口云</span>
                <span className="text-[8px] font-mono text-muted-foreground uppercase tracking-widest">Cunkou Cloud</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-border" />
            <Button variant="ghost" className="text-sm font-bold" asChild>
              <Link href="/login">登录受骗</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white font-bold" asChild>
              <Link href="/register">立即入坑</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden bg-white border-b transition-all", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-2 p-2">
            <Button variant="outline" asChild><Link href="/login">登录</Link></Button>
            <Button asChild><Link href="/register">注册</Link></Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
