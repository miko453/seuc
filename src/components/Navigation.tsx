
"use client";

import Link from "next/link";
import { CloudOff, Menu, X, Terminal, Search, ShoppingBag, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-primary/20 bg-background/90 backdrop-blur-xl sticky top-0 z-[100]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center gap-8">
          <div className="flex items-center gap-8 shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
              <CloudOff className="h-6 w-6 text-primary group-hover:animate-glitch" />
              <span className="font-headline font-bold text-lg tracking-tighter">
                村口 <span className="text-accent">云</span> <span className="text-[10px] bg-primary/20 text-primary px-1 rounded ml-1">超开 IDC</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-6">
              <Link href="/products" className="text-sm font-medium hover:text-accent transition-colors flex items-center gap-1.5">
                <ShoppingBag className="h-3.5 w-3.5" /> 产品中心
              </Link>
              <Link href="/nodes" className="text-sm font-medium hover:text-accent transition-colors">节点探针</Link>
              <Link href="/sla" className="text-sm font-medium hover:text-accent transition-colors">跑路协议</Link>
              <Link href="/contact" className="text-sm font-medium hover:text-accent transition-colors">投诉无门</Link>
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3 w-3 text-muted-foreground" />
              <Input 
                placeholder="搜索‘跑路’或‘余额截图’..." 
                className="h-8 pl-9 bg-card/50 border-primary/20 text-xs focus-visible:ring-accent"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <Link href="/beian" className="text-xs font-mono text-primary flex items-center gap-1 hover:underline">
              <ShieldCheck className="h-3 w-3" /> 备案 (梦里)
            </Link>
            <Button size="sm" className="h-8 bg-primary hover:bg-primary/80 text-white font-bold text-xs" asChild>
              <Link href="/login">进入受骗入口</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-card border-b border-primary/20 px-4 pt-2 pb-6 space-y-2">
          <Link href="/products" className="block py-2 text-sm font-bold">产品中心</Link>
          <Link href="/nodes" className="block py-2 text-sm">监控中心</Link>
          <Link href="/beian" className="block py-2 text-sm">备案管理</Link>
          <Link href="/sla" className="block py-2 text-sm">跑路协议</Link>
          <Button className="w-full mt-4 bg-primary text-white h-9 font-bold" asChild>
            <Link href="/login">立即受骗</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
