"use client";

import Link from "next/link";
import { 
  Menu, Search, Bell, HelpCircle, 
  Settings, User, ChevronDown, 
  LayoutGrid, CloudOff, Terminal
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function Navigation() {
  const [project, setProject] = useState("大槐树村-prod-01");

  return (
    <nav className="gcp-header">
      <div className="flex items-center gap-4 shrink-0">
        <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-muted">
          <Menu className="h-5 w-5" />
        </Button>
        <Link href="/" className="flex items-center gap-2 group">
          <CloudOff className="h-6 w-6 text-primary group-hover:animate-console-glitch" />
          <span className="font-semibold text-[18px] text-[#5f6368] hidden md:block">
            村口云 <span className="font-light text-muted-foreground">控制台</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2 ml-8 px-3 py-1 bg-muted/50 rounded hover:bg-muted cursor-pointer transition-colors border border-transparent hover:border-border">
        <span className="text-xs font-medium text-primary uppercase tracking-tighter">项目</span>
        <span className="text-sm font-medium">{project}</span>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="flex-1 max-w-2xl mx-12 hidden md:block">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground group-focus-within:text-primary" />
          </div>
          <Input 
            className="h-9 w-full bg-[#f1f3f4] border-none focus-visible:bg-white focus-visible:ring-1 focus-visible:ring-primary/20 pl-10 transition-all placeholder:text-muted-foreground/60 text-sm"
            placeholder="搜索资源、文档和走丢的家禽..."
          />
        </div>
      </div>

      <div className="flex items-center gap-1 ml-auto shrink-0">
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Terminal className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <HelpCircle className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" className="text-muted-foreground">
          <Bell className="h-4 w-4" />
        </Button>
        <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center ml-2 cursor-pointer hover:bg-primary/20 transition-colors">
          <User className="h-4 w-4 text-primary" />
        </div>
      </div>
    </nav>
  );
}